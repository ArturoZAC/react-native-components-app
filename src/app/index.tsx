import { Href, Link } from "expo-router";

import ThemedView from "../components/shared/ThemedView";
import { animationMenuRoutes } from "../constans/Routes";

const ComponentsApp = () => {
  return (
    <ThemedView margin>
      {animationMenuRoutes.map((route) => (
        <Link key={route.name} href={route.name.split("/")[0] as Href}>
          {route.title}
        </Link>
      ))}
    </ThemedView>
  );
};

export default ComponentsApp;
