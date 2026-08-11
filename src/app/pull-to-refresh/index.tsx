import { useState } from "react";
import { RefreshControl, ScrollView } from "react-native";

import ThemedText from "@/src/components/shared/ThemedText";
import ThemedView from "@/src/components/shared/ThemedView";
import { useThemeColor } from "@/src/hooks/useThemeColor";

const PullToRefreshScreen = () => {
  const primaryColor = useThemeColor({}, "primary");
  const backgroundColor = useThemeColor(
    {
      dark: "black",
      light: "white",
    },
    "background"
  );

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = async () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}

          colors={[primaryColor, "red", "orange", "green"]}
          progressBackgroundColor={backgroundColor}
        />
      }>
      <ThemedView margin>
        <ThemedText>Pull To Refresh Screen</ThemedText>
      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
