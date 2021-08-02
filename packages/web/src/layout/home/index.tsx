import { NavigationBar } from "@/common";

import { HomePageContainer } from "./styles";

export function HomePage() {
  return (
    <HomePageContainer>
      <NavigationBar activeItem={1} />
    </HomePageContainer>
  );
}
