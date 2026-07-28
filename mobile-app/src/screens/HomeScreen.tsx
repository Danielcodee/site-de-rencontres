import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenContainer from '../components/ScreenContainer';
import Card from '../components/Card';
import { useUser } from '../context/UserContext';
import { colors, radius, spacing, typography } from '../theme/theme';
import { LEVEL_LABEL, SPORTS } from '../data/sports';
import { WORKOUT_PLANS } from '../data/workouts';
import { DIET_PLANS } from '../data/nutrition';

export default function HomeScreen() {
  const { profile } = useUser();
  const navigation = useNavigation<any>();
  const level = profile.level ?? 'iniciante';
  const plan = WORKOUT_PLANS[level];
  const diet = DIET_PLANS[level];
  const firstSport = SPORTS.find((s) => s.id === profile.favoriteSports[0]) ?? SPORTS[0];

  return (
    <ScreenContainer>
      <Text style={styles.eyebrow}>OLÁ{profile.name ? `, ${profile.name.toUpperCase()}` : ''}</Text>
      <Text style={styles.title}>Pronto para treinar?</Text>
      <View style={styles.levelTag}>
        <Text style={styles.levelTagText}>Nível: {LEVEL_LABEL[level]}</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Físico')}>
        <Card style={styles.card}>
          <Text style={styles.cardLabel}>PREPARAÇÃO FÍSICA DE HOJE</Text>
          <Text style={styles.cardTitle}>{plan.sessions[0].focus}</Text>
          <Text style={styles.cardBody}>{plan.summary}</Text>
        </Card>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Técnicas')}>
        <Card style={styles.card}>
          <Text style={styles.cardLabel}>TREINO SOLO SUGERIDO</Text>
          <Text style={styles.cardTitle}>{firstSport.emoji} {firstSport.name}</Text>
          <Text style={styles.cardBody}>{firstSport.description}</Text>
        </Card>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Dieta')}>
        <Card style={styles.card}>
          <Text style={styles.cardLabel}>DICA DE NUTRIÇÃO</Text>
          <Text style={styles.cardTitle}>{diet.goal}</Text>
          <Text style={styles.cardBody}>{diet.principles[0]}</Text>
        </Card>
      </TouchableOpacity>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  eyebrow: { ...typography.label, marginTop: spacing.lg },
  title: { ...typography.title, marginTop: spacing.xs },
  levelTag: {
    alignSelf: 'flex-start',
    backgroundColor: colors.primaryMuted,
    borderRadius: radius.pill,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    marginTop: spacing.sm,
    marginBottom: spacing.lg,
  },
  levelTagText: { color: colors.accent, fontWeight: '700', fontSize: 12 },
  card: { marginBottom: spacing.md },
  cardLabel: { ...typography.label, color: colors.accent, marginBottom: spacing.xs },
  cardTitle: { ...typography.subtitle, marginBottom: spacing.xs },
  cardBody: { ...typography.bodyMuted },
});
