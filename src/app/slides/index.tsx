import { Image, ImageSourcePropType, useWindowDimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import ThemedButton from "@/src/components/shared/ThemedButton";
import ThemedText from "@/src/components/shared/ThemedText";
import ThemedView from "@/src/components/shared/ThemedView";

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: "Titulo 1",
    desc: "Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.",
    img: require("../../../assets/slides/slide-1.png"),
  },
  {
    title: "Titulo 2",
    desc: "Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ",
    img: require("../../../assets/slides/slide-2.png"),
  },
  {
    title: "Titulo 3",
    desc: "Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.",
    img: require("../../../assets/slides/slide-3.png"),
  },
];

const SlidesScreen = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <ThemedView>
      <FlatList
        data={items}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
      />

      <ThemedButton
        className="absolute right-5 w-[150px]"
        style={{ bottom: bottom + 16 }}>
        Siguiente
      </ThemedButton>
      <ThemedButton
        className="absolute right-5 w-[150px]"
        style={{ bottom: bottom + 16 }}>
        Finalizar
      </ThemedButton>
    </ThemedView>
  );
};
export default SlidesScreen;

interface SlideItemProps {
  item: Slide;
}

const SlideItem = ({ item }: SlideItemProps) => {
  const { width } = useWindowDimensions();
  const { title, desc, img } = item;

  return (
    <ThemedView className="flex-1 justify-center rounded bg-red-500 p-10" style={{ width }}>
      <Image
        source={img}
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: "center",
          alignSelf: "center",
        }}
      />

      <ThemedText type="h1" className="text-light-primary dark:text-dark-primary">
        {title}
      </ThemedText>

      <ThemedText className="mt-10">{desc}</ThemedText>
    </ThemedView>
  );
};
