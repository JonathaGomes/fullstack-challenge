import { NavigationBar } from "@/common";
import { useTheme } from "@/utils/useTheme";
import Head from "next/head";
import Image from "next/image";
import { shade } from "polished";
import { useContext, useState } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { RiPencilFill } from "react-icons/ri";

import {
  ProfilePageContainer,
  ProfilePageContent,
  Header,
  Profile,
  Pencil,
  UserData,
  Settings,
  ButtonSignOut,
} from "./styles";
import Link from "next/link";

export function ProfilePage() {
  const { colors, title } = useContext(ThemeContext);
  const { toggleTheme } = useTheme();
  const [type, setType] = useState("password");

  function handleChangePassword() {
    setType(type === "password" ? "text" : "password");
  }

  return (
    <ProfilePageContainer>
      <Head>
        <title>My Account | Book App</title>
      </Head>
      <ProfilePageContent>
        <Header>
          <Link href="/">
            <a>
              <div>
                <IoIosArrowBack color={colors.label} size="20" />
              </div>
            </a>
          </Link>
          <h1>My Account</h1>
          <div></div>
        </Header>
        <Profile>
          <div>
            <Image
              width={70}
              height={70}
              src="https://github.com/JonathaGomes.png"
              alt="Jonatha Gomes"
            />
            <Pencil>
              <RiPencilFill color="#21212b" size="18" />
            </Pencil>
          </div>
          <div>
            <h2>Jonatha Gomes</h2>
          </div>
        </Profile>
        <UserData>
          <div>
            <div>
              <h2>Display Name</h2>
              <p>Jonatha Gomes</p>
            </div>
            <button type="button">Edit</button>
          </div>
          <div>
            <div>
              <h2>Email</h2>
              <p>jonatha@gmail.com</p>
            </div>
            <button type="button">Edit</button>
          </div>
          <div>
            <div>
              <h2>Password</h2>
              <input type={type} value="jonatha123" readOnly />
            </div>
            <button type="button" onClick={handleChangePassword}>
              Change
            </button>
          </div>
        </UserData>

        <Settings>
          <div>
            <h2>Dark Mode</h2>
            <Switch
              onChange={toggleTheme}
              checked={title === "dark"}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={40}
              handleDiameter={20}
              offColor={shade(0.15, "#181820")}
              onColor={colors.textSecondary}
            />
          </div>
        </Settings>
        <ButtonSignOut type="button">Sign out</ButtonSignOut>
      </ProfilePageContent>
      <NavigationBar activeItem={3} />
    </ProfilePageContainer>
  );
}
