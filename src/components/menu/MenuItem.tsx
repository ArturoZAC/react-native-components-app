import { Pressable } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Href, router } from "expo-router";

import { useThemeColor } from "@/src/hooks/useThemeColor";

import ThemedText from "../shared/ThemedText";

interface Props {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  name: string;

  isFirst?: boolean;
  isLast?: boolean;
}

const MenuItem = ({ title, icon, name, isFirst = false, isLast = false }: Props) => {
  const [routeName] = name.split("/");
  const primaryColor = useThemeColor({}, "primary");

  return (
    <Pressable
      onPress={() => router.push(routeName as Href)}
      className="flex-row items-center gap-3 bg-white px-5 py-2 dark:bg-black/15"
      style={{
        ...(isFirst && {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          paddingTop: 10,
        }),
        ...(isLast && {
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          paddingBottom: 10,
        }),
      }}>
      <Ionicons name={icon} size={30} color={primaryColor} className="" />
      <ThemedText type="h2">{title}</ThemedText>
    </Pressable>
  );
};

export default MenuItem;
