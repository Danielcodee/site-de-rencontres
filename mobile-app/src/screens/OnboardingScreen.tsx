import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ScreenContainer from '../components/ScreenContainer';
import Pill from '../components/Pill';
import { LogoBadge } from '../components/Logo';
import { useUser } from '../context/UserContext';
import { colors, radius, spacing, typography } from '../theme/theme';
import { SPORTS, LEVEL_LABEL } from '../data/sports';
import { Level, SportId } from '../data/types';
import SportIcon from '../components/icons/SportIcon';

const LEVELS: Level[] = ['iniciante', 'intermedio', 'profissional'];

export default function OnboardingScreen() {
  const { profile, setName, setLevel, toggleSport, completeOnboarding } = useUser();
  const [step, setStep] = useState(0);
  const [localName, setLocalName] = useState(profile.name);

  const canContinueStep0 = localName.trim().length > 0;
  const canContinueStep1 = !!profile.level;
  const canFinish = profile.favoriteSports.length > 0;

  const next = () => {
    if (step === 0) {
      setName(localName.trim());
    }
    if (step < 2) setStep(step + 1);
    else completeOnboarding();
  };

  return (
    <ScreenContainer>
      <LinearGradient
        colors={[colors.primary, colors.primaryMuted]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.hero}
      >
        <LogoBadge size={64} />
        <Text style={styles.wordmark}>COMBAT READY</Text>
        <Text style={styles.tagline}>Treina sozinho. Aprende a lutar. Fica pronto.</Text>
      </LinearGradient>

      <Text style={styles.eyebrow}>BEM-VINDO</Text>
      <Text style={styles.title}>Vamos preparar o teu treino</Text>

      <View style={styles.progressRow}>
        {[0, 1, 2].map((i) => (
          <View key={i} style={[styles.progressDot, i === step && styles.progressDotActive, i < step && styles.progressDotDone]} />
        ))}
      </View>

      {step === 0 && (
        <View style={styles.block}>
          <Text style={styles.question}>Como te chamas?</Text>
          <TextInput
            style={styles.input}
            placeholder="O teu nome"
            placeholderTextColor={colors.textMuted}
            value={localName}
            onChangeText={setLocalName}
          />
        </View>
      )}

      {step === 1 && (
        <View style={styles.block}>
          <Text style={styles.question}>Qual é o teu nível?</Text>
          <View style={styles.pillRow}>
            {LEVELS.map((lvl) => (
              <Pill
                key={lvl}
                label={LEVEL_LABEL[lvl]}
                selected={profile.level === lvl}
                onPress={() => setLevel(lvl)}
              />
            ))}
          </View>
          <Text style={styles.hint}>
            Isto ajusta as técnicas, treino físico e dieta sugeridos para ti. Podes mudar depois no Perfil.
          </Text>
        </View>
      )}

      {step === 2 && (
        <View style={styles.block}>
          <Text style={styles.question}>Que modalidades te interessam?</Text>
          <View style={styles.pillRow}>
            {SPORTS.map((s) => {
              const isSelected = profile.favoriteSports.includes(s.id as SportId);
              return (
                <Pill
                  key={s.id}
                  label={s.name}
                  selected={isSelected}
                  onPress={() => toggleSport(s.id as SportId)}
                  icon={<SportIcon sport={s.id} size={16} color={isSelected ? colors.text : colors.textMuted} />}
                />
              );
            })}
          </View>
          <Text style={styles.hint}>Escolhe uma ou mais. Podes adicionar mais tarde.</Text>
        </View>
      )}

      <TouchableOpacity
        style={[
          styles.button,
          ((step === 0 && !canContinueStep0) ||
            (step === 1 && !canContinueStep1) ||
            (step === 2 && !canFinish)) &&
            styles.buttonDisabled,
        ]}
        disabled={
          (step === 0 && !canContinueStep0) ||
          (step === 1 && !canContinueStep1) ||
          (step === 2 && !canFinish)
        }
        onPress={next}
      >
        <Text style={styles.buttonText}>{step < 2 ? 'Continuar' : 'Começar a treinar'}</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  hero: {
    alignItems: 'center',
    borderRadius: radius.lg,
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
    marginTop: spacing.md,
  },
  wordmark: {
    color: colors.text,
    fontWeight: '900',
    fontSize: 20,
    letterSpacing: 2,
    marginTop: spacing.md,
  },
  tagline: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 13,
    marginTop: spacing.xs,
    textAlign: 'center',
  },
  eyebrow: { ...typography.label, marginTop: spacing.lg },
  title: { ...typography.title, marginTop: spacing.xs, marginBottom: spacing.lg },
  progressRow: { flexDirection: 'row', gap: spacing.xs, marginBottom: spacing.xl },
  progressDot: { flex: 1, height: 4, borderRadius: 2, backgroundColor: colors.surfaceAlt },
  progressDotActive: { backgroundColor: colors.primary },
  progressDotDone: { backgroundColor: colors.accent },
  block: { marginBottom: spacing.xl },
  question: { ...typography.subtitle, marginBottom: spacing.md },
  input: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    color: colors.text,
    fontSize: 16,
  },
  pillRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  hint: { ...typography.bodyMuted, marginTop: spacing.md },
  button: {
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
    marginTop: spacing.md,
  },
  buttonDisabled: { opacity: 0.4 },
  buttonText: { color: colors.text, fontWeight: '700', fontSize: 16 },
});
