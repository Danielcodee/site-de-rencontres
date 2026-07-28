import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import Card from '../components/Card';
import Pill from '../components/Pill';
import { colors, spacing, typography } from '../theme/theme';
import { useUser } from '../context/UserContext';
import { SPORTS, LEVEL_LABEL } from '../data/sports';
import { Level, SportId } from '../data/types';

const LEVELS: Level[] = ['iniciante', 'intermedio', 'profissional'];

export default function ProfileScreen() {
  const { profile, setLevel, toggleSport } = useUser();

  const completedCount = profile.completedSessions.length;

  return (
    <ScreenContainer>
      <Text style={styles.eyebrow}>PERFIL</Text>
      <Text style={styles.title}>{profile.name || 'Atleta'}</Text>

      <Card style={styles.card}>
        <Text style={styles.statNumber}>{completedCount}</Text>
        <Text style={styles.statLabel}>sessões de treino físico concluídas</Text>
      </Card>

      <Text style={styles.sectionTitle}>Nível</Text>
      <View style={styles.pillRow}>
        {LEVELS.map((lvl) => (
          <Pill key={lvl} label={LEVEL_LABEL[lvl]} selected={profile.level === lvl} onPress={() => setLevel(lvl)} />
        ))}
      </View>

      <Text style={styles.sectionTitle}>Modalidades favoritas</Text>
      <View style={styles.pillRow}>
        {SPORTS.map((s) => (
          <Pill
            key={s.id}
            label={`${s.emoji} ${s.name}`}
            selected={profile.favoriteSports.includes(s.id as SportId)}
            onPress={() => toggleSport(s.id as SportId)}
          />
        ))}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  eyebrow: { ...typography.label, marginTop: spacing.lg },
  title: { ...typography.title, marginTop: spacing.xs, marginBottom: spacing.lg },
  card: { alignItems: 'center', marginBottom: spacing.lg, paddingVertical: spacing.lg },
  statNumber: { fontSize: 36, fontWeight: '800', color: colors.primary },
  statLabel: { ...typography.bodyMuted, marginTop: spacing.xs, textAlign: 'center' },
  sectionTitle: { ...typography.subtitle, marginBottom: spacing.sm },
  pillRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginBottom: spacing.lg },
});
