import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ScreenContainer from '../components/ScreenContainer';
import Card from '../components/Card';
import { colors, radius, spacing, typography } from '../theme/theme';
import { useUser } from '../context/UserContext';
import { WORKOUT_PLANS } from '../data/workouts';

export default function SessionDetailScreen() {
  const route = useRoute<any>();
  const { profile, toggleSessionComplete, isSessionComplete } = useUser();
  const level = profile.level ?? 'iniciante';
  const plan = WORKOUT_PLANS[level];
  const sessionId = route.params.sessionId as string;
  const session = plan.sessions.find((s) => s.id === sessionId)!;
  const done = isSessionComplete(session.id);

  return (
    <ScreenContainer>
      <Text style={styles.eyebrow}>{session.day.toUpperCase()}</Text>
      <Text style={styles.title}>{session.focus}</Text>

      <Text style={styles.sectionTitle}>Aquecimento</Text>
      <Card style={styles.card}>
        <Text style={styles.body}>{session.warmup}</Text>
      </Card>

      <Text style={styles.sectionTitle}>Exercícios</Text>
      <Card style={styles.card}>
        {session.exercises.map((ex, i) => (
          <View key={i} style={styles.exerciseRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.exerciseName}>{ex.name}</Text>
              {ex.notes && <Text style={styles.exerciseNotes}>{ex.notes}</Text>}
            </View>
            <Text style={styles.exerciseSets}>{ex.sets}</Text>
          </View>
        ))}
      </Card>

      <Text style={styles.sectionTitle}>Retorno à calma</Text>
      <Card style={styles.card}>
        <Text style={styles.body}>{session.cooldown}</Text>
      </Card>

      <TouchableOpacity
        style={[styles.button, done && styles.buttonDone]}
        onPress={() => toggleSessionComplete(session.id)}
      >
        <Text style={styles.buttonText}>{done ? '✓ Sessão concluída' : 'Marcar como concluída'}</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  eyebrow: { ...typography.label, color: colors.accent, marginTop: spacing.lg },
  title: { ...typography.title, marginTop: spacing.xs, marginBottom: spacing.lg },
  sectionTitle: { ...typography.subtitle, marginBottom: spacing.sm },
  card: { marginBottom: spacing.md },
  body: { ...typography.body },
  exerciseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.xs,
  },
  exerciseName: { ...typography.body, fontWeight: '600' },
  exerciseNotes: { ...typography.bodyMuted, fontSize: 12, marginTop: 2 },
  exerciseSets: { ...typography.bodyMuted, fontWeight: '700' },
  button: {
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
    marginTop: spacing.md,
  },
  buttonDone: { backgroundColor: colors.success },
  buttonText: { color: colors.text, fontWeight: '700', fontSize: 16 },
});
