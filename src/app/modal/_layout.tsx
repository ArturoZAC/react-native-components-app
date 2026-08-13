import { Stack } from "expo-router";

const ModalLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="index" />
    </Stack>
  );
};
export default ModalLayout;
