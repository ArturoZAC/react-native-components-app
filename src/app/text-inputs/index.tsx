import { useState } from "react";

import ThemedCard from "@/src/components/shared/ThemedCard";
import ThemedText from "@/src/components/shared/ThemedText";
import ThemedTextInput from "@/src/components/shared/ThemedTextInput";
import ThemedView from "@/src/components/shared/ThemedView";

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoe: "",
  });

  return (
    <ThemedView margin>
      <ThemedCard className="mb-5">
        <ThemedTextInput
          placeholder="Nombre Completo"
          autoCapitalize="words"
          autoCorrect={false}
          onChangeText={(text) => setForm({ ...form, name: text })}
        />
      </ThemedCard>

      <ThemedCard>
        <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
      </ThemedCard>
    </ThemedView>
  );
};
export default TextInputsScreen;
