import { useEffect, useState } from "react";
import { Text, useColorScheme, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Stack } from "expo-router";
import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router/react-navigation";
import * as SplashScreen from "expo-splash-screen";

import ThemedText from "../components/shared/ThemedText";
import ThemedView from "../components/shared/ThemedView";
import { allRoutes } from "../constans/Routes";
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
          <Stack
            screenOptions={{
              headerShadowVisible: false,
              contentStyle: {
                backgroundColor: backgroundColor,
              },
              headerStyle: {
                backgroundColor: backgroundColor,
              },
            }}>
            <Stack.Screen
              name="index"
              options={{
                title: "",
              }}
            />

            {allRoutes.map((route) => (
              <Stack.Screen
                key={route.name}
                name={route.name}
                options={{
                  title: route.title,
                }}
              />
            ))}
          </Stack>
        </SafeAreaProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
