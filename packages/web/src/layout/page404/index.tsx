import Link from "next/link";
import Head from "next/head";
import { HiOutlineEmojiSad } from "react-icons/hi";

import { Page404Container } from "./styles";

export function Page404() {
  return (
    <Page404Container>
      <Head>
        <title>404 | Página não encontrada</title>
      </Head>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <HiOutlineEmojiSad size="180px" />
      <Link href="/">
        <a>Go Home</a>
      </Link>
    </Page404Container>
  );
}
