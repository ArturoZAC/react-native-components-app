import { useState } from "react";
import { Animated, Easing } from "react-native";

import ThemedButton from "@/src/components/shared/ThemedButton";
import ThemedView from "@/src/components/shared/ThemedView";

const Animation101Screen = () => {
  const [animatedOpacity] = useState(() => new Animated.Value(0));
  const [animatedTop] = useState(() => new Animated.Value(-100));

  const fadeIn = () => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(animatedTop, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  const faeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => animatedTop.resetAnimation());

    // Animated.timing(animatedTop, {
    //   toValue: 1,
    //   duration: 700,
    //   useNativeDriver: true,
    // }).start();
  };

  return (
    <ThemedView margin className="flex-1 items-center justify-center">
      <Animated.View
        className="rounded-xl bg-light-secondary dark:bg-dark-secondary"
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity,
          transform: [
            {
              translateY: animatedTop,
            },
          ],
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
