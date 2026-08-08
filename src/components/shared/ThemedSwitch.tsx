import { Platform, Pressable, Switch, View } from "react-native";

import { useThemeColor } from "@/src/hooks/useThemeColor";

// import { Switch } from "react-native-gesture-handler";
import ThemedText from "./ThemedText";

interface Props {
  text?: string;
  value: boolean;
  className?: string;

  onValueChange: (value: boolean) => void;
}

const isAndroid = Platform.OS === "android";

const ThemedSwitch = ({ text, value, className, onValueChange }: Props) => {
  const switchActiveColor = useThemeColor({}, "primary");

  return (
    <Pressable
      className={`mx-2 flex flex-row items-center justify-between active:opacity-80 ${className}`}
      onPress={() => onValueChange(!value)}>
      {text ? <ThemedText type="h2">{text}</ThemedText> : <View />}
      <Switch
        value={value}
        onValueChange={onValueChange}
        thumbColor={isAndroid ? switchActiveColor : ""}
        trackColor={{
          false: "#C5CAD1",
          true: switchActiveColor,
        }}
      />
    </Pressable>
  );
};

export default ThemedSwitch;
