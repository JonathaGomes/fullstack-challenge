import { useState } from "react";
import Link from "next/link";
import { BiHomeAlt, BiPlus, BiUser } from "react-icons/bi";
import { NavigationBarContainer, NavigationBarContent } from "./styles";

export function NavigationBar() {
  const [isActive, setIsActive] = useState(1);
  return (
    <NavigationBarContainer>
      <NavigationBarContent>
        <div>
          <Link href="/">
            <a style={{ color: isActive === 1 ? "#313131" : "#bfbebf" }}>
              <BiHomeAlt />
              <p>Home</p>
            </a>
          </Link>
        </div>
        <div>
          <Link href="/add/book">
            <a style={{ color: isActive === 2 ? "#313131" : "#bfbebf" }}>
              <BiPlus />
              <p>Add Boo</p>
            </a>
          </Link>
        </div>
        <div>
          <Link href="/settings/profile">
            <a style={{ color: isActive === 3 ? "#313131" : "#bfbebf" }}>
              <BiUser />
              <p>Profile</p>
            </a>
          </Link>
        </div>
      </NavigationBarContent>
    </NavigationBarContainer>
  );
}
