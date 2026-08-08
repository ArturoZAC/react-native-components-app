import { useState } from "react";

import ThemedCard from "@/src/components/shared/ThemedCard";
import ThemedSwitch from "@/src/components/shared/ThemedSwitch";
import ThemedView from "@/src/components/shared/ThemedView";

const Switches = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <ThemedView margin className="mt-2">
      <ThemedCard>
        {/* <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={state.isActive ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => setState({ ...state, isActive: value })}
          value={state.isActive}
        /> */}

        <ThemedSwitch
          value={state.isActive}
          text="Activo"
          onValueChange={(value) => setState({ ...state, isActive: value })}
          className="mb-2"
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
