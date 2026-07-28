import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenContainer from '../components/ScreenContainer';
import Card from '../components/Card';
import { colors, spacing, typography } from '../theme/theme';
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
  card: { marginBottom: spacing.md },
  row: { flexDirection: 'row', alignItems: 'center' },
  sessionDay: { ...typography.label, color: colors.accent, marginBottom: spacing.xs },
  sessionFocus: { ...typography.subtitle },
  doneBadge: { color: colors.success, fontWeight: '700', fontSize: 13 },
});
