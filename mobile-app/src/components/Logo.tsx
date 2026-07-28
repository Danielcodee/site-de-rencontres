import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, G, Rect } from 'react-native-svg';
import { colors } from '../theme/theme';

export function LogoGlove({ size = 40, color = '#FFFFFF' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <G rotation={-8} origin="32, 32">
        <Rect x={21.1} y={18.6} width={22.5} height={20.6} rx={9.7} fill={color} />
        <Circle cx={43.6} cy={22} r={6.75} fill={color} />
        <Rect x={19.2} y={37.9} width={17.5} height={10.6} rx={2.6} fill={color} />
      </G>
    </Svg>
  );
}

export function LogoBadge({ size = 56 }: { size?: number }) {
  return (
    <View
      style={[
        styles.badge,
        { width: size, height: size, borderRadius: size * 0.28, backgroundColor: colors.primary },
      ]}
    >
      <LogoGlove size={size * 0.6} />
    </View>
  );
}

export function LogoLockup({ size = 44, dark = false }: { size?: number; dark?: boolean }) {
  return (
    <View style={styles.lockup}>
      <LogoBadge size={size} />
      <View style={styles.wordmarkCol}>
        <Text style={[styles.wordmark, dark && styles.wordmarkDark]}>COMBAT{'\n'}READY</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  lockup: { flexDirection: 'row', alignItems: 'center' },
  wordmarkCol: { marginLeft: 12 },
  wordmark: {
    color: colors.text,
    fontWeight: '900',
    fontSize: 16,
    lineHeight: 17,
    letterSpacing: 1,
  },
  wordmarkDark: { color: colors.background },
});
