import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Vibration, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import * as Speech from 'expo-speech';
import ScreenContainer from '../components/ScreenContainer';
import Pill from '../components/Pill';
import FighterFigure from '../components/FighterFigure';
import { colors, radius, spacing, typography } from '../theme/theme';
import { Combo } from '../data/types';

const PACES = [
  { label: 'Lento', ms: 1700 },
  { label: 'Normal', ms: 1200 },
  { label: 'Rápido', ms: 850 },
];

export default function GuidedDrillScreen() {
  const route = useRoute<any>();
  const { comboLabel, sequence, techniqueName } = route.params as {
    comboLabel: string;
    sequence: Combo['sequence'];
    techniqueName: string;
  };

  const [playing, setPlaying] = useState(false);
  const [stepIndex, setStepIndex] = useState(-1);
  const [rep, setRep] = useState(0);
  const [rounds, setRounds] = useState(8);
  const [paceIdx, setPaceIdx] = useState(1);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const playingRef = useRef(false);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      Speech.stop();
    };
  }, []);

  const stepAt = (i: number, r: number) => {
    if (!playingRef.current) return;
    if (r >= rounds) {
      setPlaying(false);
      playingRef.current = false;
      setStepIndex(-1);
      Vibration.vibrate([0, 100, 80, 100, 80, 200]);
      Speech.speak('Treino concluído!', { language: 'pt-PT' });
      return;
    }
    const step = sequence[i];
    setStepIndex(i);
    setRep(r);
    Vibration.vibrate(35);
    Speech.speak(step.label, { language: 'pt-PT', rate: 1.05 });

    const nextI = (i + 1) % sequence.length;
    const nextR = nextI === 0 ? r + 1 : r;
    timeoutRef.current = setTimeout(() => stepAt(nextI, nextR), PACES[paceIdx].ms);
  };

  const start = () => {
    setPlaying(true);
    playingRef.current = true;
    stepAt(0, 0);
  };

  const pause = () => {
    setPlaying(false);
    playingRef.current = false;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    Speech.stop();
  };

  const reset = () => {
    pause();
    setStepIndex(-1);
    setRep(0);
  };

  const currentStep = stepIndex >= 0 ? sequence[stepIndex] : null;

  return (
    <ScreenContainer scroll={false}>
      <Text style={styles.eyebrow}>{techniqueName.toUpperCase()}</Text>
      <Text style={styles.title}>{comboLabel}</Text>

      <View style={styles.stage}>
        <View style={styles.figureBox}>
          <FighterFigure
            label={currentStep?.label ?? sequence[0].label}
            trigger={`${stepIndex}-${rep}`}
            active={!!currentStep}
          />
        </View>
        <View style={styles.stageTextCol}>
          {currentStep ? (
            <>
              <Text style={styles.bigNumber}>{currentStep.number ?? '👟'}</Text>
              <Text style={styles.bigLabel}>{currentStep.label}</Text>
            </>
          ) : (
            <Text style={styles.idleText}>{playing ? 'A preparar…' : 'Pronto para começar'}</Text>
          )}
          {playing && <Text style={styles.repCounter}>Repetição {rep + 1} / {rounds}</Text>}
        </View>
      </View>

      <Text style={styles.sectionLabel}>Ritmo</Text>
      <View style={styles.pillRow}>
        {PACES.map((p, i) => (
          <Pill key={p.label} label={p.label} selected={paceIdx === i} onPress={() => !playing && setPaceIdx(i)} />
        ))}
      </View>

      <Text style={styles.sectionLabel}>Repetições: {rounds}</Text>
      <View style={styles.pillRow}>
        {[4, 8, 12, 16].map((r) => (
          <Pill key={r} label={String(r)} selected={rounds === r} onPress={() => !playing && setRounds(r)} />
        ))}
      </View>

      <View style={styles.controls}>
        {!playing ? (
          <TouchableOpacity style={styles.primaryButton} onPress={start}>
            <Text style={styles.primaryButtonText}>▶ Começar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={[styles.primaryButton, styles.pauseButton]} onPress={pause}>
            <Text style={styles.primaryButtonText}>⏸ Pausar</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.secondaryButton} onPress={reset}>
          <Text style={styles.secondaryButtonText}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  eyebrow: { ...typography.label, color: colors.accent, marginTop: spacing.lg },
  title: { ...typography.title, marginTop: spacing.xs, marginBottom: spacing.md },
  stage: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.lg,
    minHeight: 200,
  },
  figureBox: { width: 130, height: 150, marginRight: spacing.sm },
  stageTextCol: { flex: 1, alignItems: 'center' },
  bigNumber: { fontSize: 56, fontWeight: '800', color: colors.primary },
  bigLabel: { ...typography.title, marginTop: spacing.sm, textAlign: 'center' },
  idleText: { ...typography.bodyMuted, fontSize: 16 },
  repCounter: { ...typography.bodyMuted, marginTop: spacing.md },
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
  pauseButton: { backgroundColor: colors.accent },
  primaryButtonText: { color: colors.text, fontWeight: '700', fontSize: 16 },
  secondaryButton: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  secondaryButtonText: { color: colors.textMuted, fontWeight: '700' },
});
