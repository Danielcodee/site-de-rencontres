import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenContainer from '../components/ScreenContainer';
import Card from '../components/Card';
import IconBadge from '../components/IconBadge';
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
            <View style={styles.row}>
              <IconBadge sport={sport.id} />
              <View style={styles.textCol}>
                <Text style={styles.sportName}>{sport.name}</Text>
                <Text style={styles.sportDesc}>{sport.description}</Text>
              </View>
              <Text style={styles.chevron}>›</Text>
            </View>
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
  row: { flexDirection: 'row', alignItems: 'center' },
  textCol: { flex: 1, marginLeft: spacing.md },
  sportName: { ...typography.subtitle, marginBottom: 2 },
  sportDesc: { ...typography.bodyMuted },
  chevron: { color: colors.textMuted, fontSize: 22, marginLeft: spacing.sm },
});
