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
      <div>
        <h1>404</h1>
        <h2>Page not found</h2>
      </div>
      <Link href="/">
        <a>Homepage</a>
      </Link>
    </Page404Container>
  );
}
