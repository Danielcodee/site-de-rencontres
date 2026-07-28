import React from 'react';
import { StyleSheet, View } from 'react-native';
import SportIcon from './icons/SportIcon';
import { colors } from '../theme/theme';
import { SportId } from '../data/types';

interface Props {
  sport: SportId;
  size?: number;
  selected?: boolean;
}

export default function IconBadge({ sport, size = 44, selected = true }: Props) {
  return (
    <View
      style={[
        styles.badge,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: selected ? colors.primary : colors.surfaceAlt,
        },
      ]}
    >
      <SportIcon sport={sport} size={size * 0.55} color={selected ? colors.text : colors.textMuted} />
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
});
