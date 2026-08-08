import { Animated, Easing } from "react-native";

import ThemedButton from "@/src/components/shared/ThemedButton";
import ThemedView from "@/src/components/shared/ThemedView";
import { useAnimation } from "@/src/hooks/useAnimation";

const Animation101Screen = () => {
  const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition } = useAnimation();

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

      <ThemedButton
        className="my-5"
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            easing: Easing.bounce,
          });
        }}>
        Fade in
      </ThemedButton>

      <ThemedButton
        className="my-5"
        onPress={() => {
          fadeOut({});
        }}>
        Fade Out
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
