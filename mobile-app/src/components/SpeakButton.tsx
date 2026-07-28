import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import * as Speech from 'expo-speech';
import { colors, radius, spacing } from '../theme/theme';

interface Props {
  text: string;
  label?: string;
  style?: ViewStyle;
}

export default function SpeakButton({ text, label = 'Ouvir', style }: Props) {
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    return () => {
      Speech.stop();
    };
  }, []);

  const toggle = () => {
    if (speaking) {
      Speech.stop();
      setSpeaking(false);
      return;
    }
    Speech.stop();
    setSpeaking(true);
    Speech.speak(text, {
      language: 'pt-PT',
      rate: 1.0,
      volume: 1.0,
      onDone: () => setSpeaking(false),
      onStopped: () => setSpeaking(false),
      onError: () => setSpeaking(false),
    });
  };

  return (
    <TouchableOpacity style={[styles.btn, speaking && styles.btnActive, style]} onPress={toggle} activeOpacity={0.8}>
      <Text style={[styles.text, speaking && styles.textActive]}>{speaking ? '⏸ Parar' : `🔊 ${label}`}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignSelf: 'flex-start',
    backgroundColor: colors.surfaceAlt,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.pill,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
  },
  btnActive: { backgroundColor: colors.accent, borderColor: colors.accent },
  text: { color: colors.accent, fontWeight: '700', fontSize: 13 },
  textActive: { color: colors.background },
});
