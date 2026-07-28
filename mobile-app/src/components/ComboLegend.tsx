import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card from './Card';
import { colors, radius, spacing, typography } from '../theme/theme';
import { COMBO_LEGEND } from '../data/comboLegend';

export default function ComboLegend() {
  const [open, setOpen] = useState(false);

  return (
    <Card style={styles.card}>
      <TouchableOpacity style={styles.header} onPress={() => setOpen(!open)} activeOpacity={0.7}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>O que significam os números?</Text>
          <Text style={styles.subtitle}>Ex: "1-1-2" = Jab, Jab, Direto. Toca para {open ? 'esconder' : 'ver'}.</Text>
        </View>
        <Text style={styles.chevron}>{open ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      {open && (
        <View style={styles.list}>
          {COMBO_LEGEND.map((entry) => (
            <View key={entry.number} style={styles.row}>
              <View style={styles.numberCircle}>
                <Text style={styles.numberText}>{entry.number}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.entryName}>{entry.name} <Text style={styles.entrySide}>· {entry.side}</Text></Text>
                <Text style={styles.entryDesc}>{entry.description}</Text>
              </View>
            </View>
          ))}
          <Text style={styles.footnote}>
            Pontapés, joelhadas e cotoveladas não têm número universal — aparecem sempre pelo nome (ex: "canelada", "chute circular").
          </Text>
        </View>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: spacing.md, backgroundColor: colors.surfaceAlt },
  header: { flexDirection: 'row', alignItems: 'center' },
  title: { ...typography.body, fontWeight: '700', color: colors.accent },
  subtitle: { ...typography.bodyMuted, fontSize: 12, marginTop: 2 },
  chevron: { color: colors.textMuted, fontSize: 12, marginLeft: spacing.sm },
  list: { marginTop: spacing.md, gap: spacing.sm },
  row: { flexDirection: 'row', alignItems: 'flex-start', gap: spacing.sm, marginBottom: spacing.sm },
  numberCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: { color: colors.text, fontWeight: '800', fontSize: 13 },
  entryName: { ...typography.body, fontWeight: '700' },
  entrySide: { ...typography.bodyMuted, fontWeight: '400', fontSize: 12 },
  entryDesc: { ...typography.bodyMuted, fontSize: 13, marginTop: 1 },
  footnote: { ...typography.bodyMuted, fontSize: 12, fontStyle: 'italic', marginTop: spacing.xs },
});
