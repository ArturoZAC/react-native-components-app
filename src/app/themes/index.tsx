import { useState } from "react";

import ThemedCard from "@/src/components/shared/ThemedCard";
import ThemedSwitch from "@/src/components/shared/ThemedSwitch";
import ThemedView from "@/src/components/shared/ThemedView";
import { useThemeChangeContext } from "@/src/context/ThemeChangerContext";

const ThemesScreen = () => {
  // const theme = useColorScheme();
  // const { colorScheme, setColorScheme } = useColorScheme();
  const { toggleTheme, currentTheme, isSystemTheme, setSystemTheme } = useThemeChangeContext();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme === "dark",
    systemMode: isSystemTheme,
  });

  const setDarkMode = (value: boolean) => {
    // setColorScheme(value ? "dark" : "light");

    toggleTheme();

    setDarkModeSettings({
      darkMode: value,
      systemMode: false,
    });
  };

  const setSystemMode = (value: boolean) => {
    // setColorScheme("system");

    if (value) {
      setSystemTheme();
    }

    setDarkModeSettings({
      darkMode: darkModeSettings.darkMode,
      systemMode: value,
    });
  };

  return (
    <ThemedView margin>
      <ThemedCard className="mt-5">
        <ThemedSwitch
          text="Dark Mode"
          className="mb-5"
          onValueChange={setDarkMode}
          value={darkModeSettings.darkMode}
        />
        <ThemedSwitch
          text="System Mode"
          className="mb-5"
          onValueChange={setSystemMode}
          value={darkModeSettings.systemMode}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
