import { Text } from "react-native";

import { Link, router } from "expo-router";

import ThemedButton from "@/src/components/shared/ThemedButton";
import ThemedView from "@/src/components/shared/ThemedView";

const ModalScreen = () => {
  return (
    <ThemedView>
      <Link asChild href={"/modal/modal-window"} className="mx-4">
        <Text className="my-2 text-xl text-light-text dark:text-dark-text">Abrir Modal</Text>
      </Link>

      <ThemedButton onPress={() => router.push("/modal/modal-window")} className="mx-4">
        Abrir Modal
      </ThemedButton>
    </ThemedView>
  );
};
export default ModalScreen;
