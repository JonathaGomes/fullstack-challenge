import { NavigationBar } from "@/common";
import Head from "next/head";

import { HomePageContainer } from "./styles";

export function HomePage() {
  return (
    <HomePageContainer>
      <Head>
        <title>Home Page | Book App</title>
      </Head>
      a
      <NavigationBar activeItem={1} />
    </HomePageContainer>
  );
}
