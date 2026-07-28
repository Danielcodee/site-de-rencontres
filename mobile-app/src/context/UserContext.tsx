import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Level, SportId } from '../data/types';

interface CompletedSession {
  sessionId: string;
  date: string;
}

interface UserProfile {
  name: string;
  level: Level | null;
  favoriteSports: SportId[];
  completedSessions: CompletedSession[];
}

interface UserContextValue {
  profile: UserProfile;
  loading: boolean;
  onboardingDone: boolean;
  setName: (name: string) => void;
  setLevel: (level: Level) => void;
  toggleSport: (sport: SportId) => void;
  completeOnboarding: () => void;
  toggleSessionComplete: (sessionId: string) => void;
  isSessionComplete: (sessionId: string) => boolean;
}

const STORAGE_KEY = '@combat_app_profile_v1';

const defaultProfile: UserProfile = {
  name: '',
  level: null,
  favoriteSports: [],
  completedSessions: [],
};

const UserContext = createContext<UserContextValue | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);
  const [onboardingDone, setOnboardingDone] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed: UserProfile = JSON.parse(raw);
          setProfile(parsed);
          setOnboardingDone(!!parsed.level);
        }
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const persist = (next: UserProfile) => {
    setProfile(next);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next)).catch(() => {});
  };

  const setName = (name: string) => persist({ ...profile, name });

  const setLevel = (level: Level) => persist({ ...profile, level });

  const toggleSport = (sport: SportId) => {
    const has = profile.favoriteSports.includes(sport);
    const favoriteSports = has
      ? profile.favoriteSports.filter((s) => s !== sport)
      : [...profile.favoriteSports, sport];
    persist({ ...profile, favoriteSports });
  };

  const completeOnboarding = () => setOnboardingDone(true);

  const toggleSessionComplete = (sessionId: string) => {
    const exists = profile.completedSessions.some((c) => c.sessionId === sessionId);
    const completedSessions = exists
      ? profile.completedSessions.filter((c) => c.sessionId !== sessionId)
      : [...profile.completedSessions, { sessionId, date: new Date().toISOString() }];
    persist({ ...profile, completedSessions });
  };

  const isSessionComplete = (sessionId: string) =>
    profile.completedSessions.some((c) => c.sessionId === sessionId);

  return (
    <UserContext.Provider
      value={{
        profile,
        loading,
        onboardingDone,
        setName,
        setLevel,
        toggleSport,
        completeOnboarding,
        toggleSessionComplete,
        isSessionComplete,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within a UserProvider');
  return ctx;
}
