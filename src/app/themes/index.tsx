import { useState } from "react";

import { useColorScheme } from "nativewind";

import ThemedCard from "@/src/components/shared/ThemedCard";
import ThemedSwitch from "@/src/components/shared/ThemedSwitch";
import ThemedView from "@/src/components/shared/ThemedView";

const ThemesScreen = () => {
  // const theme = useColorScheme();
  const { colorScheme, setColorScheme } = useColorScheme();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: colorScheme === "dark",
    systemMode: false,
  });

  const setDarkMode = (value: boolean) => {
    setColorScheme(value ? "dark" : "light");

    setDarkModeSettings({
      darkMode: value,
      systemMode: false,
    });
  };

  const setSystemMode = (value: boolean) => {
    setColorScheme("system");

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
