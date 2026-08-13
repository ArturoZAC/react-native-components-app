import { useState } from "react";
import { FlatList, Image } from "react-native";

import ThemedView from "@/src/components/shared/ThemedView";

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

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
    <Image
      source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
      style={{
        height: 400,
        width: "100%",
      }}
    />
  );
};
