import { Stack } from "expo-router";

import { useThemeColor } from "@/src/hooks/useThemeColor";

const ModalLayout = () => {
  const modalBackgroundColor = useThemeColor({}, "modalBackground");

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="modal-window"
        options={{
          presentation: "containedModal",
          contentStyle: {
            backgroundColor: modalBackgroundColor,
          },
        }}
      />
    </Stack>
  );
};
export default ModalLayout;
