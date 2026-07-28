import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useUser } from '../context/UserContext';
import { colors } from '../theme/theme';
import NavIcon, { NavIconName } from '../components/icons/NavIcon';

import OnboardingScreen from '../screens/OnboardingScreen';
import HomeScreen from '../screens/HomeScreen';
import SportsListScreen from '../screens/SportsListScreen';
import TechniqueListScreen from '../screens/TechniqueListScreen';
import TechniqueDetailScreen from '../screens/TechniqueDetailScreen';
import GuidedDrillScreen from '../screens/GuidedDrillScreen';
import PhysicalScreen from '../screens/PhysicalScreen';
import SessionDetailScreen from '../screens/SessionDetailScreen';
import RoundTimerScreen from '../screens/RoundTimerScreen';
import DietScreen from '../screens/DietScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const TechniquesStack = createNativeStackNavigator();
const PhysicalStack = createNativeStackNavigator();

const stackScreenOptions = {
  headerStyle: { backgroundColor: colors.surface },
  headerTintColor: colors.text,
  headerShadowVisible: false,
};

function TechniquesStackNavigator() {
  return (
    <TechniquesStack.Navigator screenOptions={stackScreenOptions}>
      <TechniquesStack.Screen name="SportsList" component={SportsListScreen} options={{ title: 'Técnicas' }} />
      <TechniquesStack.Screen name="TechniqueList" component={TechniqueListScreen} options={{ title: 'Modalidade' }} />
      <TechniquesStack.Screen name="TechniqueDetail" component={TechniqueDetailScreen} options={{ title: 'Técnica' }} />
      <TechniquesStack.Screen name="GuidedDrill" component={GuidedDrillScreen} options={{ title: 'Treino guiado' }} />
    </TechniquesStack.Navigator>
  );
}

function PhysicalStackNavigator() {
  return (
    <PhysicalStack.Navigator screenOptions={stackScreenOptions}>
      <PhysicalStack.Screen name="PhysicalHome" component={PhysicalScreen} options={{ title: 'Preparação Física' }} />
      <PhysicalStack.Screen name="SessionDetail" component={SessionDetailScreen} options={{ title: 'Sessão' }} />
      <PhysicalStack.Screen name="RoundTimer" component={RoundTimerScreen} options={{ title: 'Temporizador' }} />
    </PhysicalStack.Navigator>
  );
}

const TAB_ICONS: Record<string, NavIconName> = {
  Início: 'home',
  Técnicas: 'techniques',
  Físico: 'physical',
  Dieta: 'diet',
  Perfil: 'profile',
};

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: colors.surface },
        headerTintColor: colors.text,
        headerShadowVisible: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.border, height: 64, paddingBottom: 8, paddingTop: 8 },
        tabBarIcon: ({ color }) => <NavIcon name={TAB_ICONS[route.name]} color={color} size={22} />,
      })}
    >
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Técnicas" component={TechniquesStackNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Físico" component={PhysicalStackNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Dieta" component={DietScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const navTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.background,
    card: colors.surface,
    text: colors.text,
    border: colors.border,
    primary: colors.primary,
  },
};

export default function RootNavigator() {
  const { onboardingDone, loading } = useUser();

  if (loading) return null;

  return (
    <NavigationContainer theme={navTheme}>
      {onboardingDone ? <MainTabs /> : <OnboardingScreen />}
    </NavigationContainer>
  );
}
