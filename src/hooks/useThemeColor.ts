import { useColorScheme } from "react-native";

import { Colors } from "../constans/Colors";

type ThemeColorProps = {
  light?: string;
  dark?: string;
};

export function useThemeColor(
  props: ThemeColorProps,
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() === "dark" ? "dark" : "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  }

  return Colors[theme][colorName];
}
