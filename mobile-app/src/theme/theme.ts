export const colors = {
  background: '#0F1115',
  surface: '#1A1D24',
  surfaceAlt: '#22262F',
  primary: '#E63946',
  primaryMuted: '#7A2028',
  accent: '#F2A541',
  text: '#F5F5F5',
  textMuted: '#A0A4AD',
  border: '#2E323C',
  success: '#3DDC97',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const radius = {
  sm: 8,
  md: 14,
  lg: 20,
  pill: 999,
};

export const typography = {
  title: { fontSize: 26, fontWeight: '800' as const, color: colors.text },
  subtitle: { fontSize: 18, fontWeight: '700' as const, color: colors.text },
  body: { fontSize: 15, fontWeight: '400' as const, color: colors.text },
  bodyMuted: { fontSize: 14, fontWeight: '400' as const, color: colors.textMuted },
  label: { fontSize: 12, fontWeight: '700' as const, color: colors.textMuted, letterSpacing: 0.5 },
};
