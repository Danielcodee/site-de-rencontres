import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Audio } from 'expo-av';
import { UserProvider } from './src/context/UserContext';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  useEffect(() => {
    // Without this, iOS mutes expo-speech narration whenever the phone's
    // silent switch is on, making the voice guide sound "broken".
    Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      staysActiveInBackground: false,
      shouldDuckAndroid: true,
    }).catch(() => {});
  }, []);

  return (
    <SafeAreaProvider>
      <UserProvider>
        <StatusBar style="light" />
        <RootNavigator />
      </UserProvider>
    </SafeAreaProvider>
  );
}
