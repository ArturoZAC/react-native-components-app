import { useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";

import FadeInImage from "@/src/components/images/FadeInImage";
import ThemedView from "@/src/components/shared/ThemedView";
import { useThemeColor } from "@/src/hooks/useThemeColor";

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);
  const primaryColor = useThemeColor({}, "primary");

  const loadMore = () => {
    setTimeout(() => {
      setNumbers((currentNumbers) => {
        const newArray = Array.from({ length: 5 }, (_, index) => currentNumbers.length + index);

        return [...currentNumbers, ...newArray];
      });
    }, 3000);
  };

  return (
    <ThemedView>
      <FlatList
        data={numbers}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => <ListItem number={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        ListFooterComponent={() => (
          <View style={{ height: 150, justifyContent: "center" }}>
            <ActivityIndicator size={40} color={primaryColor} />
          </View>
        )}
      />
    </ThemedView>
  );
};
export default InfiniteScrollScreen;

interface ListItemProps {
  number: number;
}

const ListItem = ({ number }: ListItemProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{
        height: 400,
        width: "100%",
      }}
    />
    // <Image
    //   source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
    //   style={{
    //     height: 400,
    //     width: "100%",
    //   }}
    // />
  );
};
