import { useEffect, useState } from "react";
import { Text, useColorScheme, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router/react-navigation";
import * as SplashScreen from "expo-splash-screen";

import "./global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function prepareApp() {
      try {
        // Carga aquí fuentes, assets o datos iniciales.
      } catch (error) {
        console.error("Error al preparar la aplicación:", error);
      } finally {
        await SplashScreen.hideAsync();
        setIsLoading(false);
      }
    }

    prepareApp();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <SafeAreaProvider>
        <View className="bg-light-background dark:bg-dark-background">
          <Text className="mt-10 text-3xl text-light-text dark:text-dark-text">Hola Puerro</Text>
        </View>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
