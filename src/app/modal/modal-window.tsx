import { Platform } from "react-native";

import { NavigationBar } from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";

import ThemedText from "@/src/components/shared/ThemedText";
import ThemedView from "@/src/components/shared/ThemedView";
import { useThemeColor } from "@/src/hooks/useThemeColor";

const ModalWindowScreen = () => {
  const modalBackgroundColor = useThemeColor({}, "modalBackground");

  return (
    <ThemedView className="flex-1 items-center justify-center" bgColor={modalBackgroundColor}>
      <ThemedText>Hola, soy un modal</ThemedText>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <NavigationBar style="dark" />
    </ThemedView>
  );
};

export default ModalWindowScreen;
