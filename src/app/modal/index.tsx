import { useState } from "react";
import { Animated, Pressable, StyleSheet, View } from "react-native";

import ThemedButton from "@/src/components/shared/ThemedButton";
import ThemedText from "@/src/components/shared/ThemedText";
import ThemedView from "@/src/components/shared/ThemedView";
import { useThemeColor } from "@/src/hooks/useThemeColor";

const ModalScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalAnimation] = useState(() => new Animated.Value(0));
  const modalBackgroundColor = useThemeColor({}, "modalBackground");

  const openModal = () => {
    setIsModalVisible(true);
    Animated.timing(modalAnimation, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(modalAnimation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) {
        setIsModalVisible(false);
      }
    });
  };

  return (
    <ThemedView className="flex-1">
      <ThemedButton onPress={openModal} className="mx-4">
        Abrir Modal
      </ThemedButton>

      {isModalVisible && (
        <View className="absolute inset-0 z-50" style={StyleSheet.absoluteFill}>
          <Pressable
            onPress={closeModal}
            className="absolute inset-0 bg-black/40"
            style={StyleSheet.absoluteFill}
          />

          <Animated.View
            style={[
              {
                bottom: 0,
                height: "60%",
                left: 0,
                opacity: modalAnimation,
                position: "absolute",
                right: 0,
                transform: [
                  {
                    translateY: modalAnimation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [300, 0],
                    }),
                  },
                ],
              },
            ]}>
            <ThemedView
              className="flex-1 items-center justify-center rounded-t-3xl p-6"
              style={{ flex: 1, width: "100%" }}
              bgColor={modalBackgroundColor}>
              <ThemedText type="h2">Hola, soy un modal</ThemedText>

              <Pressable onPress={closeModal} className="mt-6 rounded-xl bg-white px-5 py-3">
                <ThemedText>Cerrar</ThemedText>
              </Pressable>
            </ThemedView>
          </Animated.View>
        </View>
      )}
    </ThemedView>
  );
};

export default ModalScreen;
