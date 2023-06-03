import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Black': require('./assets/fonts/NotoSans-Black.ttf'),
    "Bold": require("./assets/fonts/NotoSans-Bold.ttf"),
    "Light": require("./assets/fonts/NotoSans-Light.ttf"),
    "Medium": require("./assets/fonts/NotoSans-Medium.ttf"),
    "Regular": require("./assets/fonts/NotoSans-Regular.ttf"),
    "Thin": require("./assets/fonts/NotoSans-Thin.ttf")
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={{fontFamily: "Regular"}} className="text-6xl text-red-200">Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
