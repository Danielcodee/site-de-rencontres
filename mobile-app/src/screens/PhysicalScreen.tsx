import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenContainer from '../components/ScreenContainer';
import Card from '../components/Card';
import { colors, radius, spacing, typography } from '../theme/theme';
import { useUser } from '../context/UserContext';
import { WORKOUT_PLANS } from '../data/workouts';
import { LEVEL_LABEL } from '../data/sports';

export default function PhysicalScreen() {
  const navigation = useNavigation<any>();
  const { profile, isSessionComplete } = useUser();
  const level = profile.level ?? 'iniciante';
  const plan = WORKOUT_PLANS[level];

  return (
    <ScreenContainer>
      <Text style={styles.eyebrow}>PREPARAÇÃO FÍSICA</Text>
      <Text style={styles.title}>Plano — {LEVEL_LABEL[level]}</Text>
      <Text style={styles.summary}>{plan.summary}</Text>
      <Text style={styles.structure}>{plan.weeklyStructure}</Text>

      <TouchableOpacity style={styles.timerButton} onPress={() => navigation.navigate('RoundTimer')}>
        <Text style={styles.timerButtonText}>⏱️ Temporizador de rounds</Text>
      </TouchableOpacity>

      {plan.sessions.map((session) => {
        const done = isSessionComplete(session.id);
        return (
          <TouchableOpacity key={session.id} onPress={() => navigation.navigate('SessionDetail', { sessionId: session.id })}>
            <Card style={styles.card}>
              <View style={styles.row}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.sessionDay}>{session.day}</Text>
                  <Text style={styles.sessionFocus}>{session.focus}</Text>
                </View>
                {done && <Text style={styles.doneBadge}>✓ Feito</Text>}
              </View>
            </Card>
          </TouchableOpacity>
        );
      })}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  eyebrow: { ...typography.label, marginTop: spacing.lg },
  title: { ...typography.title, marginTop: spacing.xs },
  summary: { ...typography.body, marginTop: spacing.sm },
  structure: { ...typography.bodyMuted, marginBottom: spacing.lg, marginTop: spacing.xs },
  timerButton: {
    backgroundColor: colors.surfaceAlt,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  timerButtonText: { color: colors.accent, fontWeight: '700' },
  card: { marginBottom: spacing.md },
  row: { flexDirection: 'row', alignItems: 'center' },
  sessionDay: { ...typography.label, color: colors.accent, marginBottom: spacing.xs },
  sessionFocus: { ...typography.subtitle },
  doneBadge: { color: colors.success, fontWeight: '700', fontSize: 13 },
});
