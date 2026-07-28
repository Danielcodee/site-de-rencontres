import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import ScreenContainer from '../components/ScreenContainer';
import Card from '../components/Card';
import IconBadge from '../components/IconBadge';
import { LogoGlove } from '../components/Logo';
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
      <LinearGradient
        colors={[colors.primary, colors.primaryMuted]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.hero}
      >
        <View style={styles.heroTop}>
          <View style={{ flex: 1 }}>
            <Text style={styles.eyebrow}>OLÁ{profile.name ? `, ${profile.name.toUpperCase()}` : ''}</Text>
            <Text style={styles.title}>Pronto para treinar?</Text>
          </View>
          <View style={styles.logoCircle}>
            <LogoGlove size={26} />
          </View>
        </View>
        <View style={styles.levelTag}>
          <Text style={styles.levelTagText}>Nível: {LEVEL_LABEL[level]}</Text>
        </View>
      </LinearGradient>

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
          <View style={styles.sportRow}>
            <IconBadge sport={firstSport.id} size={36} />
            <Text style={[styles.cardTitle, { marginLeft: spacing.sm, marginBottom: 0 }]}>{firstSport.name}</Text>
          </View>
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
  hero: {
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginTop: spacing.md,
    marginBottom: spacing.lg,
  },
  heroTop: { flexDirection: 'row', alignItems: 'flex-start' },
  logoCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eyebrow: { ...typography.label, color: 'rgba(255,255,255,0.8)' },
  title: { ...typography.title, marginTop: spacing.xs, color: colors.text },
  levelTag: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: radius.pill,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    marginTop: spacing.md,
  },
  levelTagText: { color: colors.text, fontWeight: '700', fontSize: 12 },
  card: { marginBottom: spacing.md },
  sportRow: { flexDirection: 'row', alignItems: 'center', marginBottom: spacing.xs },
  cardLabel: { ...typography.label, color: colors.accent, marginBottom: spacing.xs },
  cardTitle: { ...typography.subtitle, marginBottom: spacing.xs },
  cardBody: { ...typography.bodyMuted },
});
