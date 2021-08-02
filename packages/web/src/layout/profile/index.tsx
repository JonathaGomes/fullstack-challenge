import { NavigationBar } from "@/common";
import Head from "next/head";

import { ProfileContainer } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <Head>
        <title>Your Account | Book App</title>
      </Head>
      <NavigationBar activeItem={3} />
    </ProfileContainer>
  );
}
