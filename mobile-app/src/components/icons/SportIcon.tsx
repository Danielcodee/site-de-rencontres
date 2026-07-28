import React from 'react';
import Svg, { Circle, Line, Polygon, Rect } from 'react-native-svg';
import { SportId } from '../../data/types';

interface Props {
  sport: SportId;
  size?: number;
  color?: string;
}

const STROKE_WIDTH = 1.8;

function BoxeIcon({ color }: { color: string }) {
  return (
    <>
      <Circle cx={10} cy={13} r={6} stroke={color} strokeWidth={STROKE_WIDTH} fill="none" />
      <Line x1={14} y1={9.5} x2={17.5} y2={6} stroke={color} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
      <Rect x={6} y={18} width={8} height={3} rx={1} stroke={color} strokeWidth={STROKE_WIDTH} fill="none" />
    </>
  );
}

function MuayThaiIcon({ color }: { color: string }) {
  return (
    <>
      <Line x1={6} y1={6} x2={12} y2={12} stroke={color} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
      <Line x1={12} y1={12} x2={8} y2={19} stroke={color} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
      <Polygon points="12,8 16.5,12 12,16" stroke={color} strokeWidth={STROKE_WIDTH} fill="none" strokeLinejoin="round" />
    </>
  );
}

function KickboxingIcon({ color }: { color: string }) {
  return (
    <>
      <Line x1={6} y1={5} x2={13} y2={11} stroke={color} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
      <Line x1={13} y1={11} x2={20} y2={9} stroke={color} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
      <Line x1={20} y1={9} x2={22} y2={11} stroke={color} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
      <Circle cx={6} cy={5} r={1.6} fill={color} />
    </>
  );
}

function MmaIcon({ color }: { color: string }) {
  return (
    <>
      <Polygon
        points="12,3 19,7 19,15 12,19 5,15 5,7"
        stroke={color}
        strokeWidth={STROKE_WIDTH}
        fill="none"
        strokeLinejoin="round"
      />
      <Circle cx={12} cy={11} r={2.1} fill={color} />
    </>
  );
}

function JiuJitsuIcon({ color }: { color: string }) {
  return (
    <>
      <Rect x={4} y={10.5} width={16} height={3} rx={1} stroke={color} strokeWidth={STROKE_WIDTH} fill="none" />
      <Line x1={10.5} y1={13.5} x2={7.5} y2={19.5} stroke={color} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
      <Line x1={13.5} y1={13.5} x2={16.5} y2={19.5} stroke={color} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
      <Circle cx={12} cy={12} r={1.5} fill={color} />
    </>
  );
}

function LutaOlimpicaIcon({ color }: { color: string }) {
  return (
    <>
      <Circle cx={9} cy={9} r={5} stroke={color} strokeWidth={STROKE_WIDTH} fill="none" />
      <Circle cx={15} cy={15} r={5} stroke={color} strokeWidth={STROKE_WIDTH} fill="none" />
    </>
  );
}

export default function SportIcon({ sport, size = 24, color = '#F5F5F5' }: Props) {
  const content = {
    boxe: <BoxeIcon color={color} />,
    'muay-thai': <MuayThaiIcon color={color} />,
    kickboxing: <KickboxingIcon color={color} />,
    mma: <MmaIcon color={color} />,
    'jiu-jitsu': <JiuJitsuIcon color={color} />,
    'luta-olimpica': <LutaOlimpicaIcon color={color} />,
  }[sport];

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      {content}
    </Svg>
  );
}
