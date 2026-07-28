import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import ScreenContainer from '../components/ScreenContainer';
import Card from '../components/Card';
import Pill from '../components/Pill';
import IconBadge from '../components/IconBadge';
import { colors, spacing, typography } from '../theme/theme';
import { SPORTS, LEVEL_LABEL } from '../data/sports';
import { getTechniquesFor } from '../data/techniques';
import { useUser } from '../context/UserContext';
import { Level } from '../data/types';

const LEVELS: Level[] = ['iniciante', 'intermedio', 'profissional'];

export default function TechniqueListScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { profile } = useUser();
  const sportId = route.params.sportId as string;
  const sport = SPORTS.find((s) => s.id === sportId)!;
  const [level, setLevel] = useState<Level>(profile.level ?? 'iniciante');

  const techniques = getTechniquesFor(sportId, level);

  return (
    <ScreenContainer>
      <View style={styles.headerRow}>
        <IconBadge sport={sport.id} size={36} />
        <Text style={styles.eyebrowInline}>{sport.name.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Técnicas para treinares sozinho</Text>

      <View style={styles.pillRow}>
        {LEVELS.map((lvl) => (
          <Pill key={lvl} label={LEVEL_LABEL[lvl]} selected={level === lvl} onPress={() => setLevel(lvl)} />
        ))}
      </View>

      {techniques.length === 0 && (
        <Text style={styles.empty}>Ainda não há conteúdo para este nível nesta modalidade.</Text>
      )}

      {techniques.map((t) => (
        <TouchableOpacity key={t.id} onPress={() => navigation.navigate('TechniqueDetail', { techniqueId: t.id })}>
          <Card style={styles.card}>
            <Text style={styles.techName}>{t.name}</Text>
            <Text style={styles.techObjective}>{t.objective}</Text>
          </Card>
        </TouchableOpacity>
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  headerRow: { flexDirection: 'row', alignItems: 'center', marginTop: spacing.lg, gap: spacing.sm },
  eyebrowInline: { ...typography.label, color: colors.accent },
  title: { ...typography.title, marginTop: spacing.sm, marginBottom: spacing.md },
  pillRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginBottom: spacing.lg },
  card: { marginBottom: spacing.md },
  techName: { ...typography.subtitle, marginBottom: spacing.xs },
  techObjective: { ...typography.bodyMuted },
  empty: { ...typography.bodyMuted, marginTop: spacing.lg },
});
