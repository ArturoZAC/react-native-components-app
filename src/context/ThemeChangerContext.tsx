import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { useColorScheme as useSystemColorScheme } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router/react-navigation";
import { useColorScheme } from "nativewind";

type ThemeMode = "light" | "dark" | "system";

interface ThemeChangerContextType {
  currentTheme: "light" | "dark";
  isSystemTheme: boolean;
  toggleTheme: () => Promise<void>;
  setSystemTheme: () => Promise<void>;
}

const THEME_STORAGE_KEY = "theme-key";

const ThemeChangerContext = createContext({} as ThemeChangerContextType);

export const useThemeChangeContext = () => useContext(ThemeChangerContext);

export const ThemeChangerProvider = ({ children }: PropsWithChildren) => {
  const { setColorScheme } = useColorScheme();
  const systemColorScheme = useSystemColorScheme();
  const [themeMode, setThemeMode] = useState<ThemeMode>("system");

  useEffect(() => {
    let isMounted = true;

    async function loadThemeMode() {
      try {
        const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        const nextTheme: ThemeMode =
          savedTheme === "light" || savedTheme === "dark" || savedTheme === "system"
            ? savedTheme
            : "system";

        if (isMounted) {
          setThemeMode(nextTheme);
          setColorScheme(nextTheme);
        }
      } catch (error) {
        console.error("No se pudo cargar el tema guardado:", error);
      }
    }

    loadThemeMode();

    return () => {
      isMounted = false;
    };
  }, [setColorScheme]);

  const currentTheme =
    themeMode === "system" ? (systemColorScheme === "dark" ? "dark" : "light") : themeMode;

  const toggleTheme = async () => {
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    setThemeMode(nextTheme);
    setColorScheme(nextTheme);
    await AsyncStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  };

  const setSystemTheme = async () => {
    setThemeMode("system");
    setColorScheme("system");
    await AsyncStorage.setItem(THEME_STORAGE_KEY, "system");
  };

  return (
    <ThemeProvider value={currentTheme === "dark" ? DarkTheme : DefaultTheme}>
      <ThemeChangerContext.Provider
        value={{
          currentTheme,
          isSystemTheme: themeMode === "system",
          toggleTheme,
          setSystemTheme,
        }}>
        {children}
      </ThemeChangerContext.Provider>
    </ThemeProvider>
  );
};
