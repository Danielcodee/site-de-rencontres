import React from 'react';
import Svg, { Circle, Line, Path, Rect } from 'react-native-svg';

export type NavIconName = 'home' | 'techniques' | 'physical' | 'diet' | 'profile';

interface Props {
  name: NavIconName;
  size?: number;
  color?: string;
}

const STROKE_WIDTH = 1.9;

function HomeGlyph({ color }: { color: string }) {
  return (
    <>
      <Path d="M4 11L12 4l8 7" stroke={color} strokeWidth={STROKE_WIDTH} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <Path d="M6 10v9h12v-9" stroke={color} strokeWidth={STROKE_WIDTH} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <Rect x={10} y={13} width={4} height={6} stroke={color} strokeWidth={STROKE_WIDTH} fill="none" />
    </>
  );
}

function TechniquesGlyph({ color }: { color: string }) {
  return (
    <>
      <Circle cx={10} cy={13} r={6} stroke={color} strokeWidth={STROKE_WIDTH} fill="none" />
      <Line x1={14} y1={9.5} x2={17.5} y2={6} stroke={color} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
    </>
  );
}

function PhysicalGlyph({ color }: { color: string }) {
  return (
    <>
      <Line x1={5} y1={12} x2={19} y2={12} stroke={color} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
      <Rect x={2.5} y={9} width={3} height={6} rx={1} stroke={color} strokeWidth={STROKE_WIDTH} fill="none" />
      <Rect x={18.5} y={9} width={3} height={6} rx={1} stroke={color} strokeWidth={STROKE_WIDTH} fill="none" />
    </>
  );
}

function DietGlyph({ color }: { color: string }) {
  return (
    <>
      <Circle cx={12} cy={13} r={7} stroke={color} strokeWidth={STROKE_WIDTH} fill="none" />
      <Circle cx={12} cy={13} r={2.6} stroke={color} strokeWidth={STROKE_WIDTH} fill="none" />
    </>
  );
}

function ProfileGlyph({ color }: { color: string }) {
  return (
    <>
      <Circle cx={12} cy={8} r={3.4} stroke={color} strokeWidth={STROKE_WIDTH} fill="none" />
      <Path d="M5 20c1.2-4 4-6 7-6s5.8 2 7 6" stroke={color} strokeWidth={STROKE_WIDTH} strokeLinecap="round" fill="none" />
    </>
  );
}

export default function NavIcon({ name, size = 22, color = '#F5F5F5' }: Props) {
  const content = {
    home: <HomeGlyph color={color} />,
    techniques: <TechniquesGlyph color={color} />,
    physical: <PhysicalGlyph color={color} />,
    diet: <DietGlyph color={color} />,
    profile: <ProfileGlyph color={color} />,
  }[name];

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      {content}
    </Svg>
  );
}
