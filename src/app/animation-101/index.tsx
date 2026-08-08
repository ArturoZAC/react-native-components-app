import { useState } from "react";
import { Animated } from "react-native";

import ThemedButton from "@/src/components/shared/ThemedButton";
import ThemedView from "@/src/components/shared/ThemedView";

const Animation101Screen = () => {
  const [animatedOpacity] = useState(() => new Animated.Value(0));

  const fadeIn = () => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const faeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ThemedView margin className="flex-1 items-center justify-center">
      <Animated.View
        className="rounded-xl bg-light-secondary dark:bg-dark-secondary"
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity,
        }}
      />

      <ThemedButton className="my-5" onPress={fadeIn}>
        Fade in
      </ThemedButton>

      <ThemedButton className="my-5" onPress={faeOut}>
        Fade Out
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
