import React, { ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { colors, radius, spacing } from '../theme/theme';

interface Props {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
  icon?: ReactNode;
}

export default function Pill({ label, selected, onPress, style, icon }: Props) {
  return (
    <TouchableOpacity
      style={[styles.pill, selected && styles.pillSelected, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {icon && <View style={styles.icon}>{icon}</View>}
      <Text style={[styles.label, selected && styles.labelSelected]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: radius.pill,
    backgroundColor: colors.surfaceAlt,
    borderWidth: 1,
    borderColor: colors.border,
  },
  pillSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  icon: { marginRight: spacing.xs },
  label: {
    color: colors.textMuted,
    fontWeight: '600',
    fontSize: 13,
  },
  labelSelected: {
    color: colors.text,
  },
});
