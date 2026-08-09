import { useEffect, useRef, useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import ThemedCard from "@/src/components/shared/ThemedCard";
import ThemedText from "@/src/components/shared/ThemedText";
import ThemedTextInput from "@/src/components/shared/ThemedTextInput";
import ThemedView from "@/src/components/shared/ThemedView";

const TextInputsScreen = () => {
  const insets = useSafeAreaInsets();
  const scrollViewRef = useRef<ScrollView>(null);
  const lastInputFocused = useRef(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [lastCardHeight, _] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const scheduleScrollToLastInput = () => {
    setTimeout(() => {
      requestAnimationFrame(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      });
    }, 100);
  };

  useEffect(() => {
    const showEvent = Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
    const hideEvent = Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";

    const showSubscription = Keyboard.addListener(showEvent, (event) => {
      setKeyboardHeight(event.endCoordinates.height);
    });

    const hideSubscription = Keyboard.addListener(hideEvent, () => {
      setKeyboardHeight(0);
      lastInputFocused.current = false;
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  useEffect(() => {
    if (keyboardHeight === 0 || !lastInputFocused.current) {
      return;
    }

    scheduleScrollToLastInput();
  }, [keyboardHeight, lastCardHeight]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}>
      <ScrollView
        ref={scrollViewRef}
        automaticallyAdjustKeyboardInsets
        contentInsetAdjustmentBehavior="automatic"
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode={Platform.OS === "ios" ? "interactive" : "on-drag"}
        scrollsChildToFocus
        onContentSizeChange={() => {
          if (lastInputFocused.current) {
            scheduleScrollToLastInput();
          }
        }}
        contentContainerStyle={{
          paddingBottom: insets.bottom + (keyboardHeight > 0 ? lastCardHeight + 64 : 24),
        }}>
        <ThemedView margin>
          <ThemedCard className="mb-5">
            <ThemedTextInput
              placeholder="Nombre Completo"
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />

            <ThemedTextInput
              placeholder="Correo Electronico"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setForm({ ...form, email: text })}
            />

            <ThemedTextInput
              placeholder="Telefono"
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemedCard>

          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          {/* <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard
            onLayout={(event) => {
              setLastCardHeight(event.nativeEvent.layout.height);

              if (lastInputFocused.current) {
                scheduleScrollToLastInput();
              }
            }}>
            <ThemedTextInput
              placeholder="Telefono"
              autoCorrect={false}
              keyboardType="phone-pad"
              onFocus={() => {
                lastInputFocused.current = true;
                scheduleScrollToLastInput();
              }}
              onBlur={() => {
                lastInputFocused.current = false;
              }}
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemedCard> */}
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
