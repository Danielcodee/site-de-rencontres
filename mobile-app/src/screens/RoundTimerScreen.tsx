import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Vibration, View } from 'react-native';
import * as Speech from 'expo-speech';
import ScreenContainer from '../components/ScreenContainer';
import Pill from '../components/Pill';
import { colors, radius, spacing, typography } from '../theme/theme';

type Phase = 'idle' | 'prep' | 'work' | 'rest' | 'done';

const WORK_OPTIONS = [60, 120, 180];
const REST_OPTIONS = [15, 30, 60];
const ROUND_OPTIONS = [3, 5, 8];

function formatTime(total: number) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function RoundTimerScreen() {
  const [workSec, setWorkSec] = useState(180);
  const [restSec, setRestSec] = useState(60);
  const [totalRounds, setTotalRounds] = useState(5);

  const [phase, setPhase] = useState<Phase>('idle');
  const [remaining, setRemaining] = useState(0);
  const [round, setRound] = useState(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    Speech.stop();
  }, []);

  const announce = (text: string) => {
    Speech.stop();
    Speech.speak(text, { language: 'pt-PT', rate: 1.05, volume: 1.0 });
  };

  const clearTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const tick = () => {
    setRemaining((prev) => {
      if (prev <= 1) {
        return 0;
      }
      if (prev <= 4) Vibration.vibrate(20);
      return prev - 1;
    });
  };

  useEffect(() => {
    if (phase === 'idle' || phase === 'done') return;
    if (remaining === 0) {
      handlePhaseEnd();
      return;
    }
  }, [remaining]);

  const handlePhaseEnd = () => {
    clearTimer();
    if (phase === 'prep') {
      startPhase('work', workSec, `Round ${round}. Vai!`);
    } else if (phase === 'work') {
      if (round >= totalRounds) {
        setPhase('done');
        Vibration.vibrate([0, 150, 100, 150, 100, 300]);
        announce('Treino concluído. Bom trabalho!');
      } else {
        startPhase('rest', restSec, 'Descansa');
      }
    } else if (phase === 'rest') {
      setRound((r) => r + 1);
      startPhase('work', workSec, `Round ${round + 1}. Vai!`);
    }
  };

  const startPhase = (nextPhase: Phase, seconds: number, say: string) => {
    setPhase(nextPhase);
    setRemaining(seconds);
    Vibration.vibrate(nextPhase === 'work' ? [0, 200] : 100);
    announce(say);
    intervalRef.current = setInterval(tick, 1000);
  };

  const start = () => {
    setRound(1);
    startPhase('prep', 10, 'Preparar');
  };

  const stop = () => {
    clearTimer();
    Speech.stop();
    setPhase('idle');
    setRemaining(0);
    setRound(1);
  };

  const isRunning = phase !== 'idle' && phase !== 'done';

  const phaseLabel: Record<Phase, string> = {
    idle: 'Pronto para começar',
    prep: 'Preparar',
    work: `Round ${round} / ${totalRounds}`,
    rest: 'Descanso',
    done: 'Treino concluído! 🥊',
  };

  const phaseColor = phase === 'work' ? colors.primary : phase === 'rest' ? colors.accent : colors.textMuted;

  return (
    <ScreenContainer scroll={false}>
      <Text style={styles.eyebrow}>TEMPORIZADOR</Text>
      <Text style={styles.title}>Rounds de treino</Text>

      <View style={styles.stage}>
        <Text style={[styles.phaseLabel, { color: phaseColor }]}>{phaseLabel[phase]}</Text>
        {isRunning ? (
          <Text style={styles.bigTime}>{formatTime(remaining)}</Text>
        ) : (
          <Text style={styles.idleIcon}>⏱️</Text>
        )}
      </View>

      {!isRunning && phase !== 'done' && (
        <>
          <Text style={styles.sectionLabel}>Duração do round</Text>
          <View style={styles.pillRow}>
            {WORK_OPTIONS.map((s) => (
              <Pill key={s} label={`${s / 60} min`} selected={workSec === s} onPress={() => setWorkSec(s)} />
            ))}
          </View>

          <Text style={styles.sectionLabel}>Descanso</Text>
          <View style={styles.pillRow}>
            {REST_OPTIONS.map((s) => (
              <Pill key={s} label={`${s}s`} selected={restSec === s} onPress={() => setRestSec(s)} />
            ))}
          </View>

          <Text style={styles.sectionLabel}>Nº de rounds</Text>
          <View style={styles.pillRow}>
            {ROUND_OPTIONS.map((r) => (
              <Pill key={r} label={String(r)} selected={totalRounds === r} onPress={() => setTotalRounds(r)} />
            ))}
          </View>
        </>
      )}

      <View style={styles.controls}>
        {!isRunning ? (
          <TouchableOpacity style={styles.primaryButton} onPress={start}>
            <Text style={styles.primaryButtonText}>▶ Começar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={[styles.primaryButton, styles.stopButton]} onPress={stop}>
            <Text style={styles.primaryButtonText}>■ Parar</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  eyebrow: { ...typography.label, marginTop: spacing.lg },
  title: { ...typography.title, marginTop: spacing.xs, marginBottom: spacing.md },
  stage: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xl,
    marginBottom: spacing.lg,
    minHeight: 180,
  },
  phaseLabel: { ...typography.subtitle, marginBottom: spacing.sm },
  bigTime: { fontSize: 56, fontWeight: '800', color: colors.text },
  idleIcon: { fontSize: 48 },
  sectionLabel: { ...typography.label, marginBottom: spacing.sm },
  pillRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginBottom: spacing.lg },
  controls: { flexDirection: 'row', gap: spacing.sm, marginTop: spacing.sm },
  primaryButton: {
    flex: 1,
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  stopButton: { backgroundColor: colors.surfaceAlt, borderWidth: 1, borderColor: colors.border },
  primaryButtonText: { color: colors.text, fontWeight: '700', fontSize: 16 },
});
