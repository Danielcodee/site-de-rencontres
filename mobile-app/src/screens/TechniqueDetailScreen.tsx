import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import ScreenContainer from '../components/ScreenContainer';
import Card from '../components/Card';
import ComboLegend from '../components/ComboLegend';
import ComboDiagram from '../components/ComboDiagram';
import { colors, radius, spacing, typography } from '../theme/theme';
import { TECHNIQUES } from '../data/techniques';
import { LEVEL_LABEL } from '../data/sports';

export default function TechniqueDetailScreen() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const techniqueId = route.params.techniqueId as string;
  const technique = TECHNIQUES.find((t) => t.id === techniqueId)!;

  return (
    <ScreenContainer>
      <Text style={styles.eyebrow}>{LEVEL_LABEL[technique.level].toUpperCase()}</Text>
      <Text style={styles.title}>{technique.name}</Text>
      <Text style={styles.objective}>{technique.objective}</Text>

      <Text style={styles.sectionTitle}>Pontos-chave</Text>
      <Card style={styles.card}>
        {technique.cues.map((cue, i) => (
          <View key={i} style={styles.cueRow}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.cueText}>{cue}</Text>
          </View>
        ))}
      </Card>

      {technique.combos && technique.combos.length > 0 && (
        <>
          <Text style={styles.sectionTitle}>Combos explicados</Text>
          <ComboLegend />
          {technique.combos.map((combo, i) => (
            <Card key={i} style={styles.card}>
              <Text style={styles.comboLabel}>{combo.label}</Text>
              <ComboDiagram combo={combo} />
              <TouchableOpacity
                style={styles.voiceButton}
                onPress={() =>
                  navigation.navigate('GuidedDrill', {
                    comboLabel: combo.label,
                    sequence: combo.sequence,
                    techniqueName: technique.name,
                  })
                }
              >
                <Text style={styles.voiceButtonText}>🔊 Treinar com voz e temporizador</Text>
              </TouchableOpacity>
            </Card>
          ))}
        </>
      )}

      <Text style={styles.sectionTitle}>Drills para treinares sozinho</Text>
      {technique.soloDrills.map((drill, i) => (
        <Card key={i} style={styles.card}>
          <View style={styles.drillHeader}>
            <Text style={styles.drillTitle}>{drill.title}</Text>
            <Text style={styles.drillDuration}>{drill.duration}</Text>
          </View>
          <Text style={styles.drillInstructions}>{drill.instructions}</Text>
        </Card>
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  eyebrow: { ...typography.label, color: colors.accent, marginTop: spacing.lg },
  title: { ...typography.title, marginTop: spacing.xs, marginBottom: spacing.xs },
  objective: { ...typography.bodyMuted, marginBottom: spacing.lg },
  sectionTitle: { ...typography.subtitle, marginBottom: spacing.sm, marginTop: spacing.sm },
  card: { marginBottom: spacing.md },
  cueRow: { flexDirection: 'row', marginBottom: spacing.xs },
  bullet: { color: colors.primary, marginRight: spacing.sm, fontWeight: '700' },
  cueText: { ...typography.body, flex: 1 },
  comboLabel: { ...typography.body, fontWeight: '700', marginBottom: spacing.xs },
  voiceButton: {
    marginTop: spacing.sm,
    backgroundColor: colors.primaryMuted,
    borderRadius: radius.sm,
    paddingVertical: spacing.sm,
    alignItems: 'center',
  },
  voiceButtonText: { color: colors.accent, fontWeight: '700', fontSize: 13 },
  drillHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: spacing.xs },
  drillTitle: { ...typography.body, fontWeight: '700', flex: 1 },
  drillDuration: { ...typography.bodyMuted, fontWeight: '600' },
  drillInstructions: { ...typography.bodyMuted },
});
