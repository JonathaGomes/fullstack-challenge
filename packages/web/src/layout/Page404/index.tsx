import Link from "next/link";
import { HiOutlineEmojiSad } from "react-icons/hi";

import { Page404Container } from "./styles";

export function Page404() {
  return (
    <Page404Container>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <HiOutlineEmojiSad size="180px" />
      <Link href="/">
        <a>Go Home</a>
      </Link>
    </Page404Container>
  );
}
