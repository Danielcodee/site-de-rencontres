# Springfield Lodge — Visita Virtual 3D

Kit de montagem para o vídeo de "visita virtual" do Springfield Lodge (Valongo, Porto),
gerado a partir de fotos estáticas animadas na Higgsfield AI e montadas com ffmpeg.

> **Nota:** esta pasta não contém fotos nem clips — esses ficheiros têm de ser
> adicionados manualmente (fotos originais + exports da Higgsfield), porque não
> existe acesso automático à Higgsfield AI nem às fotos do imóvel a partir daqui.

## Estrutura de pastas

```
videos/springfield-lodge/
├── raw/        # fotos originais do imóvel (input para a Higgsfield)
├── clips/      # vídeos gerados pela Higgsfield, um por foto
├── music/      # faixa de música ambiente/cinematográfica de fundo
├── prompts/    # prompts Higgsfield prontos a copiar, um ficheiro por plano
├── assemble.sh # script ffmpeg que monta o vídeo final
└── final/      # output: versões 16:9 e 9:16 + card final
```

## Tarefa 1 — Sequência da visita

Coloca as fotos em `raw/` e os clips exportados da Higgsfield em `clips/` com esta
numeração (ordem lógica de uma visita real):

| # | Ficheiro           | Plano                                              |
|---|---------------------|-----------------------------------------------------|
| 01 | `01_exterior-estabelecedor` | Plano exterior estabelecedor (cabana + prado ao fundo) |
| 02 | `02_prado-animais`          | Prado com os cavalos/gansos/patos                      |
| 03 | `03_entrada-barracao`       | Entrada / exterior do barracão                          |
| 04 | `04_interior-largo`         | Interior — plano largo do quarto                        |
| 05 | `05_janela-cortina`         | Detalhe da janela/cortina-ecrã de cinema                 |
| 06 | `06_cama`                   | Cama                                                     |
| 07 | `07_kitchenette`            | Kitchenette                                              |
| 08 | `08_casa-banho`             | Casa de banho                                            |
| 09 | `09_exterior-final`         | Plano final exterior (golden hour, se existir)           |

Convenção de nomes:
- Fotos originais: `raw/01_exterior-estabelecedor.jpg`, `raw/02_prado-animais.jpg`, ...
- Clips Higgsfield (4s cada, mesma numeração): `clips/01_exterior-estabelecedor.mp4`, ...

O script de montagem (`assemble.sh`) espera exatamente estes 9 clips numerados
`01_*.mp4` … `09_*.mp4` dentro de `clips/`.

## Tarefa 2 — Prompts Higgsfield

Ver `prompts/` — um ficheiro `.md` por plano, com o prompt final já composto
(fórmula base + movimento de câmara específico), pronto a colar na Higgsfield.
Ficheiro combinado com todos: `prompts/00_todos-os-prompts.md`.

## Tarefa 3 — Montagem final

1. Garante que tens `ffmpeg` instalado (`ffmpeg -version`).
2. Coloca os 9 clips em `clips/` (ver tabela acima) e uma faixa de música em
   `music/` (qualquer `.mp3`/`.wav`; o script pega no primeiro ficheiro que encontrar).
3. Corre:
   ```bash
   cd videos/springfield-lodge
   ./assemble.sh
   ```
4. Outputs em `final/`:
   - `springfield-lodge-16x9.mp4` (1920x1080, demo)
   - `springfield-lodge-9x16.mp4` (1080x1920, Reels/TikTok)

O script:
- Concatena os 9 clips pela ordem da Tarefa 1 com crossfade de 0.5s entre eles.
- Acrescenta um card final discreto com o texto "Springfield Lodge · Valongo, Porto".
- Adiciona a música de fundo a -18dB face ao vídeo, com fade-in/fade-out.
- Não usa a Higgsfield nem gera nenhum clip — isso é feito manualmente na
  plataforma, um clip por foto, usando os prompts em `prompts/`.
