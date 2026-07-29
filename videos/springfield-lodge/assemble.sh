#!/usr/bin/env bash
# Monta o vídeo final da visita virtual do Springfield Lodge.
#
# Espera 9 clips numerados em ./clips/ (01_*.mp4 ... 09_*.mp4, ~4s cada,
# gerados manualmente na Higgsfield a partir dos prompts em ./prompts/) e
# uma faixa de música em ./music/ (primeiro ficheiro .mp3/.wav/.m4a encontrado).
#
# Produz em ./final/:
#   springfield-lodge-16x9.mp4  (1920x1080)
#   springfield-lodge-9x16.mp4  (1080x1920)
#
# Uso: ./assemble.sh
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CLIPS_DIR="$SCRIPT_DIR/clips"
MUSIC_DIR="$SCRIPT_DIR/music"
FINAL_DIR="$SCRIPT_DIR/final"
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

XFADE=0.5           # duração do crossfade entre clips, em segundos
CARD_DURATION=3      # duração do card final, em segundos
CARD_TEXT="Springfield Lodge · Valongo, Porto"
MUSIC_DB=-18          # volume da música face ao vídeo
W=1920
H=1080

command -v ffmpeg >/dev/null || { echo "ffmpeg não encontrado. Instala o ffmpeg e tenta novamente." >&2; exit 1; }
command -v ffprobe >/dev/null || { echo "ffprobe não encontrado (normalmente vem com o ffmpeg)." >&2; exit 1; }

mapfile -t CLIPS < <(find "$CLIPS_DIR" -maxdepth 1 -type f \( -iname '0[1-9]_*.mp4' \) | sort)
if [ "${#CLIPS[@]}" -ne 9 ]; then
  echo "Esperava 9 clips numerados 01_*.mp4 .. 09_*.mp4 em $CLIPS_DIR, encontrei ${#CLIPS[@]}." >&2
  printf '  %s\n' "${CLIPS[@]}" >&2
  exit 1
fi

MUSIC_FILE="$(find "$MUSIC_DIR" -maxdepth 1 -type f \( -iname '*.mp3' -o -iname '*.wav' -o -iname '*.m4a' \) | sort | head -n1 || true)"
if [ -z "$MUSIC_FILE" ]; then
  echo "Nenhuma faixa de música encontrada em $MUSIC_DIR (.mp3/.wav/.m4a)." >&2
  exit 1
fi

mkdir -p "$FINAL_DIR"

echo "Clips (ordem):"
printf '  %s\n' "${CLIPS[@]}"
echo "Música: $MUSIC_FILE"

# 1) Normaliza cada clip para a mesma resolução/fps/SAR (necessário para o xfade)
NORM=()
for i in "${!CLIPS[@]}"; do
  out="$TMP_DIR/norm_$i.mp4"
  ffmpeg -y -loglevel error -i "${CLIPS[$i]}" \
    -vf "scale=${W}:${H}:force_original_aspect_ratio=decrease,pad=${W}:${H}:(ow-iw)/2:(oh-ih)/2,setsar=1,fps=30" \
    -an -c:v libx264 -pix_fmt yuv420p -preset veryfast "$out"
  NORM+=("$out")
done

# 2) Card final (imagem estática com texto, mesma resolução/fps)
FONT="/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
CARD="$TMP_DIR/card.mp4"
ffmpeg -y -loglevel error -f lavfi -i "color=c=black:s=${W}x${H}:d=${CARD_DURATION}:r=30" \
  -vf "drawtext=fontfile=${FONT}:text='${CARD_TEXT}':fontcolor=white:fontsize=54:x=(w-text_w)/2:y=(h-text_h)/2:alpha='if(lt(t,0.6),t/0.6,1)'" \
  -c:v libx264 -pix_fmt yuv420p -preset veryfast "$CARD"
NORM+=("$CARD")

# 3) Crossfade sequencial de todos os clips (incluindo o card final)
get_dur() { ffprobe -v error -show_entries format=duration -of csv=p=0 "$1"; }

cur="${NORM[0]}"
cur_dur="$(get_dur "$cur")"
for i in $(seq 1 $((${#NORM[@]} - 1))); do
  next="${NORM[$i]}"
  next_dur="$(get_dur "$next")"
  offset="$(awk -v a="$cur_dur" -v x="$XFADE" 'BEGIN{printf "%.3f", a - x}')"
  merged="$TMP_DIR/merge_$i.mp4"
  ffmpeg -y -loglevel error -i "$cur" -i "$next" \
    -filter_complex "[0:v][1:v]xfade=transition=fade:duration=${XFADE}:offset=${offset},format=yuv420p[v]" \
    -map "[v]" -c:v libx264 -preset veryfast "$merged"
  cur="$merged"
  cur_dur="$(awk -v a="$cur_dur" -v b="$next_dur" -v x="$XFADE" 'BEGIN{printf "%.3f", a + b - x}')"
done
MASTER_16x9_SILENT="$cur"
TOTAL_DUR="$cur_dur"

# 4) Versão 9:16 (fundo desfocado a preencher + imagem nítida centrada)
MASTER_9x16_SILENT="$TMP_DIR/master_9x16_silent.mp4"
ffmpeg -y -loglevel error -i "$MASTER_16x9_SILENT" -filter_complex "
  [0:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,gblur=sigma=20[bg];
  [0:v]scale=1080:1920:force_original_aspect_ratio=decrease[fg];
  [bg][fg]overlay=(W-w)/2:(H-h)/2,format=yuv420p[v]" \
  -map "[v]" -c:v libx264 -preset veryfast "$MASTER_9x16_SILENT"

# 5) Música de fundo (loop/corte ao comprimento total, fade in/out, -18dB) + mux
mux_with_music() {
  local video_in="$1" out="$2"
  ffmpeg -y -loglevel error -stream_loop -1 -i "$MUSIC_FILE" -i "$video_in" \
    -filter_complex "[0:a]atrim=0:${TOTAL_DUR},asetpts=PTS-STARTPTS,volume=${MUSIC_DB}dB,afade=t=in:st=0:d=1,afade=t=out:st=$(awk -v d="$TOTAL_DUR" 'BEGIN{printf "%.3f", d-1}'):d=1[a]" \
    -map 1:v -map "[a]" -c:v copy -c:a aac -b:a 192k -shortest "$out"
}

mux_with_music "$MASTER_16x9_SILENT" "$FINAL_DIR/springfield-lodge-16x9.mp4"
mux_with_music "$MASTER_9x16_SILENT" "$FINAL_DIR/springfield-lodge-9x16.mp4"

echo "Concluído:"
echo "  $FINAL_DIR/springfield-lodge-16x9.mp4"
echo "  $FINAL_DIR/springfield-lodge-9x16.mp4"
