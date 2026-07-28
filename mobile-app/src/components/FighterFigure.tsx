import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';
import { colors } from '../theme/theme';

const AnimatedLine = Animated.createAnimatedComponent(Line);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type MoveKey = 'jab' | 'direto' | 'gancho' | 'upper' | 'elbow' | 'knee' | 'kick' | 'lowkick';

interface PoseDef {
  side: 'front' | 'rear' | 'leg';
  pivot: [number, number];
  guard: [number, number];
  strike: [number, number];
  limb: 'arm' | 'leg';
  endCap: boolean;
}

const POSES: Record<MoveKey, PoseDef> = {
  jab: { side: 'front', pivot: [16, 10], guard: [19, 9], strike: [35, 9], limb: 'arm', endCap: true },
  direto: { side: 'rear', pivot: [15, 11], guard: [13, 14], strike: [35, 11], limb: 'arm', endCap: true },
  gancho: { side: 'front', pivot: [16, 10], guard: [19, 9], strike: [28, 2], limb: 'arm', endCap: true },
  upper: { side: 'rear', pivot: [15, 11], guard: [13, 14], strike: [24, 3], limb: 'arm', endCap: true },
  elbow: { side: 'front', pivot: [16, 10], guard: [19, 9], strike: [23, 4], limb: 'arm', endCap: false },
  knee: { side: 'leg', pivot: [16, 20], guard: [21, 32], strike: [19, 12], limb: 'leg', endCap: false },
  kick: { side: 'leg', pivot: [16, 20], guard: [21, 32], strike: [33, 16], limb: 'leg', endCap: true },
  lowkick: { side: 'leg', pivot: [16, 20], guard: [21, 32], strike: [30, 27], limb: 'leg', endCap: true },
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
  const impact = useRef(new Animated.Value(0)).current;
  const move = resolveMove(label);
  const pose = POSES[move];
  const passivePose = pose.side === 'front' ? POSES.direto : pose.side === 'rear' ? POSES.jab : null;

  useEffect(() => {
    progress.setValue(0);
    impact.setValue(0);
    if (!active) return;

    Animated.timing(progress, {
      toValue: 1,
      duration: 160,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start(() => {
      Animated.sequence([
        Animated.timing(impact, { toValue: 1, duration: 70, useNativeDriver: false }),
        Animated.timing(impact, { toValue: 0, duration: 170, useNativeDriver: false }),
      ]).start();
      Animated.sequence([
        Animated.delay(90),
        Animated.timing(progress, { toValue: 0, duration: 230, easing: Easing.in(Easing.cubic), useNativeDriver: false }),
      ]).start();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger, active]);

  const limbX = progress.interpolate({ inputRange: [0, 1], outputRange: [pose.guard[0], pose.strike[0]] });
  const limbY = progress.interpolate({ inputRange: [0, 1], outputRange: [pose.guard[1], pose.strike[1]] });
  const impactRadius = impact.interpolate({ inputRange: [0, 1], outputRange: [1.5, 5] });
  const impactOpacity = impact.interpolate({ inputRange: [0, 1], outputRange: [0, 0.85] });

  const legStatic = pose.limb === 'leg';

  return (
    <View style={styles.wrap}>
      <Svg width="100%" height="100%" viewBox="0 0 40 36">
        {/* back leg */}
        <Line x1={16} y1={20} x2={11} y2={32} stroke={colors.text} strokeWidth={5} strokeLinecap="round" />
        <Circle cx={10.5} cy={33} r={2} fill={colors.text} />

        {/* front leg: static guard, or the animated striking limb */}
        {legStatic ? (
          <AnimatedLine x1={16} y1={20} x2={limbX} y2={limbY} stroke={colors.primary} strokeWidth={5.5} strokeLinecap="round" />
        ) : (
          <Line x1={16} y1={20} x2={21} y2={32} stroke={colors.text} strokeWidth={5} strokeLinecap="round" />
        )}
        {legStatic && pose.endCap && (
          <AnimatedCircle cx={limbX} cy={limbY} r={2.4} fill={colors.primary} />
        )}
        {!legStatic && <Circle cx={21.5} cy={33} r={2} fill={colors.text} />}

        {/* torso (thick capsule) */}
        <Line x1={16} y1={8.5} x2={16} y2={20} stroke={colors.text} strokeWidth={7.5} strokeLinecap="round" />

        {/* passive arm */}
        {!legStatic && passivePose && (
          <>
            <Line
              x1={passivePose.pivot[0]}
              y1={passivePose.pivot[1]}
              x2={passivePose.guard[0]}
              y2={passivePose.guard[1]}
              stroke={colors.text}
              strokeWidth={5}
              strokeLinecap="round"
            />
            <Circle cx={passivePose.guard[0]} cy={passivePose.guard[1]} r={2.2} fill={colors.text} />
          </>
        )}

        {/* active arm */}
        {!legStatic && (
          <>
            <AnimatedLine x1={pose.pivot[0]} y1={pose.pivot[1]} x2={limbX} y2={limbY} stroke={colors.primary} strokeWidth={5.5} strokeLinecap="round" />
            {pose.endCap && <AnimatedCircle cx={limbX} cy={limbY} r={2.6} fill={colors.primary} />}
          </>
        )}

        {/* impact flash */}
        <AnimatedCircle cx={pose.strike[0]} cy={pose.strike[1]} r={impactRadius} fill={colors.accent} opacity={impactOpacity} />

        {/* head (drawn last so limbs never cover it) */}
        <Circle cx={16} cy={5} r={3.4} fill={colors.text} />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { width: '100%', height: '100%' },
});
