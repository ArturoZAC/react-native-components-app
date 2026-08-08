import { useEffect, useState } from "react";
import { Text, useColorScheme, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router/react-navigation";
import * as SplashScreen from "expo-splash-screen";

import ThemedText from "../components/shared/ThemedText";
import ThemedView from "../components/shared/ThemedView";
import { useThemeColor } from "../hooks/useThemeColor";

import "./global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, "background");
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
    <GestureHandlerRootView style={{ backgroundColor: backgroundColor, flex: 1 }}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <SafeAreaProvider>
          <ThemedView margin>
            <ThemedText className="mt-10">Hola Puerro</ThemedText>
          </ThemedView>
        </SafeAreaProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
