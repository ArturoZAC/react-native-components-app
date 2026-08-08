import { Text } from "react-native";

import ThemedButton from "@/src/components/shared/ThemedButton";
import ThemedView from "@/src/components/shared/ThemedView";

const Animation101Screen = () => {
  return (
    <ThemedView margin>
      <Text>Animation101Screen</Text>

      <ThemedButton className="mb-5" onPress={() => console.log("Fadein")}>
        Fade in
      </ThemedButton>

      <ThemedButton className="mb-5" onPress={() => console.log("FadeOut")}>
        Fade Out
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
