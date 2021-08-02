import { NavigationBar } from "@/common";

import { NewBookContainer } from "./styles";

export function AddBook() {
  return (
    <NewBookContainer>
      <NavigationBar activeItem={2} />
    </NewBookContainer>
  );
}
