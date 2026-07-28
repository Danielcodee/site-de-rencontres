import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenContainer from '../components/ScreenContainer';
import Card from '../components/Card';
import { colors, spacing, typography } from '../theme/theme';
import { SPORTS, LEVEL_LABEL } from '../data/sports';
import { useUser } from '../context/UserContext';

export default function SportsListScreen() {
  const navigation = useNavigation<any>();
  const { profile } = useUser();

  return (
    <ScreenContainer>
      <Text style={styles.eyebrow}>TÉCNICAS · TREINO SOLO</Text>
      <Text style={styles.title}>Escolhe a modalidade</Text>
      <Text style={styles.subtitle}>
        Conteúdo ajustado ao teu nível: {LEVEL_LABEL[profile.level ?? 'iniciante']}
      </Text>

      {SPORTS.map((sport) => (
        <TouchableOpacity key={sport.id} onPress={() => navigation.navigate('TechniqueList', { sportId: sport.id })}>
          <Card style={styles.card}>
            <Text style={styles.sportName}>{sport.emoji} {sport.name}</Text>
            <Text style={styles.sportDesc}>{sport.description}</Text>
          </Card>
        </TouchableOpacity>
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  eyebrow: { ...typography.label, marginTop: spacing.lg },
  title: { ...typography.title, marginTop: spacing.xs },
  subtitle: { ...typography.bodyMuted, marginBottom: spacing.lg, marginTop: spacing.xs },
  card: { marginBottom: spacing.md },
  sportName: { ...typography.subtitle, marginBottom: spacing.xs },
  sportDesc: { ...typography.bodyMuted },
});
