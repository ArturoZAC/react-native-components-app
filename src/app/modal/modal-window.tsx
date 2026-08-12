import ThemedText from "@/src/components/shared/ThemedText";
import ThemedView from "@/src/components/shared/ThemedView";

const ModalWindowScreen = () => {
  return (
    <ThemedView className="flex-1 items-center justify-center" bgColor="#A52182">
      <ThemedText>Hola, soy un modal</ThemedText>
    </ThemedView>
  );
};

export default ModalWindowScreen;
