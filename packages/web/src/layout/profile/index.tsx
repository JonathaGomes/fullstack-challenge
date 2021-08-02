import { NavigationBar } from "@/common";

import { ProfileContainer } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <NavigationBar activeItem={3} />
    </ProfileContainer>
  );
}
