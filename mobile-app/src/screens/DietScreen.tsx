import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import Card from '../components/Card';
import { colors, spacing, typography } from '../theme/theme';
import { useUser } from '../context/UserContext';
import { DIET_PLANS } from '../data/nutrition';
import { LEVEL_LABEL } from '../data/sports';

export default function DietScreen() {
  const { profile } = useUser();
  const level = profile.level ?? 'iniciante';
  const diet = DIET_PLANS[level];

  return (
    <ScreenContainer>
      <Text style={styles.eyebrow}>DIETA — {LEVEL_LABEL[level].toUpperCase()}</Text>
      <Text style={styles.title}>{diet.goal}</Text>

      <Text style={styles.sectionTitle}>Princípios</Text>
      <Card style={styles.card}>
        {diet.principles.map((p, i) => (
          <View key={i} style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.rowText}>{p}</Text>
          </View>
        ))}
      </Card>

      <Text style={styles.sectionTitle}>Hidratação</Text>
      <Card style={styles.card}>
        <Text style={styles.body}>{diet.hydration}</Text>
      </Card>

      <Text style={styles.sectionTitle}>Exemplo de dia alimentar</Text>
      <Card style={styles.card}>
        {diet.sampleDay.map((m, i) => (
          <View key={i} style={styles.mealRow}>
            <Text style={styles.mealLabel}>{m.meal}</Text>
            <Text style={styles.mealSuggestion}>{m.suggestion}</Text>
          </View>
        ))}
      </Card>

      <Text style={styles.sectionTitle}>Suplementação</Text>
      <Card style={styles.card}>
        <Text style={styles.body}>{diet.supplementNote}</Text>
      </Card>

      <Text style={styles.disclaimer}>
        Estas são orientações gerais e não substituem o acompanhamento de um nutricionista, especialmente para corte de peso ou necessidades específicas.
      </Text>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  eyebrow: { ...typography.label, marginTop: spacing.lg },
  title: { ...typography.title, marginTop: spacing.xs, marginBottom: spacing.lg },
  sectionTitle: { ...typography.subtitle, marginBottom: spacing.sm },
  card: { marginBottom: spacing.md },
  row: { flexDirection: 'row', marginBottom: spacing.xs },
  bullet: { color: colors.primary, marginRight: spacing.sm, fontWeight: '700' },
  rowText: { ...typography.body, flex: 1 },
  body: { ...typography.body },
  mealRow: { marginBottom: spacing.sm },
  mealLabel: { ...typography.label, color: colors.accent, marginBottom: 2 },
  mealSuggestion: { ...typography.body },
  disclaimer: { ...typography.bodyMuted, fontSize: 12, marginTop: spacing.sm, marginBottom: spacing.lg, fontStyle: 'italic' },
});
