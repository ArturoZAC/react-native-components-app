import { Text } from "react-native";

import { Link } from "expo-router";

import ThemedView from "@/src/components/shared/ThemedView";

const ModalScreen = () => {
  return (
    <ThemedView>
      <Link asChild href={"/modal/modal-window"} className="mx-4">
        <Text className="my-2 text-xl text-light-text dark:text-dark-text">Abrir Modal</Text>
      </Link>
    </ThemedView>
  );
};
export default ModalScreen;
