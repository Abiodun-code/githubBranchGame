import "react-native-gesture-handler";
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import NavigationRoute from "./Navigation";

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
    <NavigationRoute/>
  );
}
