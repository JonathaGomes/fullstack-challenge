import { NavigationBar } from "@/common";
import { useTheme } from "@/utils/useTheme";
import Head from "next/head";
import { shade } from "polished";
import { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

import { ProfileContainer } from "./styles";

export function Profile() {
  const { colors, title } = useContext(ThemeContext);
  const { toggleTheme } = useTheme();

  return (
    <ProfileContainer>
      <Head>
        <title>Your Account | Book App</title>
      </Head>
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, "#f00")}
        onColor={colors.textSecondary}
      />
      <NavigationBar activeItem={3} />
    </ProfileContainer>
  );
}
