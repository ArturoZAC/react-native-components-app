import { SectionList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import ThemedCard from "@/src/components/shared/ThemedCard";
import ThemedText from "@/src/components/shared/ThemedText";
import ThemedView from "@/src/components/shared/ThemedView";

interface Houses {
  title: string;
  data: string[];
}

const houses: Houses[] = [
  {
    title: "DC Comics",
    data: [
      "Superman",
      "Batman",
      "Wonder Woman (Mujer Maravilla)",
      "The Flash (Flash)",
      "Aquaman",
      "Green Lantern (Linterna Verde)",
      "Cyborg",
      "Shazam",
      "Green Arrow (Flecha Verde)",
      "Batgirl (Batichica)",
      "Nightwing (Ala Nocturna)",
      "Supergirl",
      "Martian Manhunter (Detective Marciano)",
      "Harley Quinn",
      "Joker",
      "Catwoman (Gata Salvaje)",
      "Lex Luthor",
      "Poison Ivy (Hiedra Venenosa)",
      "Robin",
      "Deathstroke (Deathstroke el Terminator)",
    ],
  },
  {
    title: "Marvel Comics",
    data: [
      "Spider-Man (Hombre Araña)",
      "Iron Man (Hombre de Hierro)",
      "Captain America (Capitán América)",
      "Thor",
      "Black Widow (Viuda Negra)",
      "Hulk",
      "Doctor Strange (Doctor Extraño)",
      "Black Panther (Pantera Negra)",
      "Captain Marvel (Capitana Marvel)",
      "Wolverine",
      "Deadpool",
      "Scarlet Witch (Bruja Escarlata)",
      "Ant-Man (Hombre Hormiga)",
      "Wasp (Avispa)",
      "Groot",
      "Rocket Raccoon (Mapache Cohete)",
      "Gamora",
      "Drax the Destroyer (Drax el Destructor)",
    ],
  },
  {
    title: "Anime",
    data: [
      "Son Goku (Dragon Ball)",
      "Naruto Uzumaki (Naruto)",
      "Monkey D. Luffy (One Piece)",
      "Sailor Moon (Sailor Moon)",
      "Kenshin Himura (Rurouni Kenshin)",
      "Edward Elric (Fullmetal Alchemist)",
      "Inuyasha (Inuyasha)",
      "Sakura Kinomoto (Cardcaptor Sakura)",
      "Light Yagami (Death Note)",
      "Eren Yeager (Attack on Titan)",
      "Lelouch Lamperouge (Code Geass)",
      "Vegeta (Dragon Ball)",
      "Ichigo Kurosaki (Bleach)",
      "Kaneki Ken (Tokyo Ghoul)",
      "Gon Freecss (Hunter x Hunter)",
      "Asuka Langley Soryu (Neon Genesis Evangelion)",
      "Saitama (One Punch Man)",
      "Mikasa Ackerman (Attack on Titan)",
      "Natsu Dragneel (Fairy Tail)",
      "Usagi Tsukino (Sailor Moon)",
      "Sasuke Uchiha (Naruto)",
    ],
  },
];

const SectionListScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <ThemedView margin>
      <ThemedCard>
        <SectionList
          sections={houses}
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{ paddingBottom: insets.bottom + 16 }}
          keyExtractor={(item) => item}
          renderItem={({ item: heroe }) => <ThemedText>{heroe}</ThemedText>}
          ListHeaderComponent={() => (
            <ThemedText type="h1" className="mb-3 font-bold">
              Personajes
            </ThemedText>
          )}
          renderSectionHeader={({ section }) => (
            <ThemedText
              type="h1"
              className="rounded bg-light-background p-2 dark:bg-dark-background">
              {section.title}
            </ThemedText>
          )}

          stickySectionHeadersEnabled
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => (
            <ThemedText
              type="h1"
              className="rounded bg-light-background p-2 font-bold dark:bg-dark-background">
              {/* <ThemedText type="h1" className="mb-3 font-bold"> */}
              Secciones: {houses.length}
            </ThemedText>
          )}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default SectionListScreen;
