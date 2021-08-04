import Link from "next/link";
import { BiHomeAlt, BiPlus, BiUser } from "react-icons/bi";
import {
  NavigationBarContainer,
  NavigationBarContent,
  NavLink,
} from "./styles";

type NavigationBarProps = {
  activeItem: number;
};

export function NavigationBar({ activeItem }: NavigationBarProps) {
  return (
    <NavigationBarContainer>
      <NavigationBarContent>
        <div>
          <Link href="/" passHref>
            <NavLink isActive={activeItem === 1}>
              <BiHomeAlt size="22" />
              <p>Home</p>
            </NavLink>
          </Link>
        </div>
        <div>
          <Link href="/add/book" passHref>
            <NavLink isActive={activeItem === 2}>
              <BiPlus size="22" />
              <p>Add Book</p>
            </NavLink>
          </Link>
        </div>
        <div>
          <Link href="/profile" passHref>
            <NavLink isActive={activeItem === 3}>
              <BiUser size="22" />
              <p>Profile</p>
            </NavLink>
          </Link>
        </div>
      </NavigationBarContent>
    </NavigationBarContainer>
  );
}
