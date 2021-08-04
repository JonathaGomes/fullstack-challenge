import { useState } from "react";
import { NavigationBar } from "@/common";
import Head from "next/head";
import Image from "next/image";
import api from "@/services/api";

type BooksProps = {
  id: string;
  title: string;
  author: string;
  description: string;
  thumbnail: string;
};

import { HomePageContainer } from "./styles";
import Link from "next/link";

export function HomePage() {
  const [books, setBooks] = useState<BooksProps[]>([]);
  async function getApi() {
    const { data } = await api.get("/books");
    setBooks(data);
  }
  return (
    <HomePageContainer>
      <Head>
        <title>Home Page | Book App</title>
      </Head>
      <button onClick={getApi}>Testar</button>
      {books.map((book) => {
        return (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.description}</p>
            <Link href={`/books/${book.id}`}>
              <a>
                <Image
                  width={100}
                  height={200}
                  src={book.thumbnail}
                  alt={book.title}
                />
              </a>
            </Link>
          </div>
        );
      })}
      <NavigationBar activeItem={1} />
    </HomePageContainer>
  );
}
