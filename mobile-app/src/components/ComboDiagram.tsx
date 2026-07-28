import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Combo } from '../data/types';
import { colors, radius, spacing, typography } from '../theme/theme';

export default function ComboDiagram({ combo }: { combo: Combo }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.row}>
      {combo.sequence.map((step, i) => (
        <React.Fragment key={i}>
          <View style={styles.stepWrap}>
            {step.number ? (
              <View style={styles.circle}>
                <Text style={styles.circleText}>{step.number}</Text>
              </View>
            ) : (
              <View style={styles.namedChip}>
                <Text style={styles.namedChipText}>👟</Text>
              </View>
            )}
            <Text style={styles.stepLabel} numberOfLines={2}>{step.label}</Text>
          </View>
          {i < combo.sequence.length - 1 && <Text style={styles.arrow}>→</Text>}
        </React.Fragment>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'flex-start', paddingVertical: spacing.xs, paddingRight: spacing.md },
  stepWrap: { alignItems: 'center', width: 64 },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: { color: colors.text, fontWeight: '800', fontSize: 16 },
  namedChip: {
    width: 40,
    height: 40,
    borderRadius: radius.sm,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  namedChipText: { fontSize: 18 },
  stepLabel: { ...typography.bodyMuted, fontSize: 11, textAlign: 'center', marginTop: spacing.xs },
  arrow: { color: colors.textMuted, fontSize: 18, marginHorizontal: spacing.xs, marginTop: 10 },
});
