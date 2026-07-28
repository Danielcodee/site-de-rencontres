import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';
import { colors } from '../theme/theme';

const AnimatedLine = Animated.createAnimatedComponent(Line);

type MoveKey = 'jab' | 'direto' | 'gancho' | 'upper' | 'elbow' | 'knee' | 'kick' | 'lowkick';

interface PoseDef {
  side: 'front' | 'rear' | 'leg';
  pivot: [number, number];
  guard: [number, number];
  strike: [number, number];
  limb: 'arm' | 'leg';
}

const POSES: Record<MoveKey, PoseDef> = {
  jab: { side: 'front', pivot: [14, 8], guard: [16, 7], strike: [27, 7], limb: 'arm' },
  direto: { side: 'rear', pivot: [13, 9], guard: [12, 11], strike: [27, 8], limb: 'arm' },
  gancho: { side: 'front', pivot: [14, 8], guard: [16, 7], strike: [22, 3], limb: 'arm' },
  upper: { side: 'rear', pivot: [13, 9], guard: [12, 11], strike: [19, 4], limb: 'arm' },
  elbow: { side: 'front', pivot: [14, 8], guard: [16, 7], strike: [19, 4], limb: 'arm' },
  knee: { side: 'leg', pivot: [14, 16], guard: [18, 25], strike: [16, 11], limb: 'leg' },
  kick: { side: 'leg', pivot: [14, 16], guard: [18, 25], strike: [25, 13], limb: 'leg' },
  lowkick: { side: 'leg', pivot: [14, 16], guard: [18, 25], strike: [23, 21], limb: 'leg' },
};

function resolveMove(label: string): MoveKey {
  const l = label.toLowerCase();
  if (l.includes('jab')) return 'jab';
  if (l.includes('direto')) return 'direto';
  if (l.includes('gancho')) return 'gancho';
  if (l.includes('upper')) return 'upper';
  if (l.includes('cotovelo')) return 'elbow';
  if (l.includes('joelho')) return 'knee';
  if (l.includes('canelada')) return 'lowkick';
  if (l.includes('chute') || l.includes('perna')) return 'kick';
  return 'jab';
}

export default function FighterFigure({
  label,
  trigger,
  active = true,
}: {
  label: string;
  trigger: number | string;
  active?: boolean;
}) {
  const progress = useRef(new Animated.Value(0)).current;
  const move = resolveMove(label);
  const pose = POSES[move];
  const passivePose = pose.side === 'front' ? POSES.direto : pose.side === 'rear' ? POSES.jab : null;

  useEffect(() => {
    if (!active) {
      progress.setValue(0);
      return;
    }
    progress.setValue(0);
    Animated.sequence([
      Animated.timing(progress, { toValue: 1, duration: 170, easing: Easing.out(Easing.quad), useNativeDriver: false }),
      Animated.delay(110),
      Animated.timing(progress, { toValue: 0, duration: 220, easing: Easing.in(Easing.quad), useNativeDriver: false }),
    ]).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger, active]);

  const x2 = progress.interpolate({ inputRange: [0, 1], outputRange: [pose.guard[0], pose.strike[0]] });
  const y2 = progress.interpolate({ inputRange: [0, 1], outputRange: [pose.guard[1], pose.strike[1]] });

  return (
    <View style={styles.wrap}>
      <Svg width="100%" height="100%" viewBox="0 0 32 28">
        <Circle cx={14} cy={4} r={2.4} stroke={colors.text} strokeWidth={1.6} fill="none" />
        <Line x1={14} y1={6.4} x2={14} y2={16} stroke={colors.text} strokeWidth={1.6} strokeLinecap="round" />

        {pose.limb === 'leg' ? (
          <>
            <Line x1={14} y1={16} x2={10} y2={25} stroke={colors.text} strokeWidth={1.6} strokeLinecap="round" />
            <Line x1={14} y1={8} x2={16} y2={7} stroke={colors.text} strokeWidth={1.6} strokeLinecap="round" />
            <Line x1={13} y1={9} x2={12} y2={11} stroke={colors.text} strokeWidth={1.6} strokeLinecap="round" />
            <AnimatedLine x1={14} y1={16} x2={x2} y2={y2} stroke={colors.primary} strokeWidth={2.2} strokeLinecap="round" />
          </>
        ) : (
          <>
            <Line x1={14} y1={16} x2={10} y2={25} stroke={colors.text} strokeWidth={1.6} strokeLinecap="round" />
            <Line x1={14} y1={16} x2={18} y2={25} stroke={colors.text} strokeWidth={1.6} strokeLinecap="round" />
            {passivePose && (
              <Line
                x1={passivePose.pivot[0]}
                y1={passivePose.pivot[1]}
                x2={passivePose.guard[0]}
                y2={passivePose.guard[1]}
                stroke={colors.text}
                strokeWidth={1.6}
                strokeLinecap="round"
              />
            )}
            <AnimatedLine x1={pose.pivot[0]} y1={pose.pivot[1]} x2={x2} y2={y2} stroke={colors.primary} strokeWidth={2.2} strokeLinecap="round" />
          </>
        )}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { width: '100%', height: '100%' },
});
