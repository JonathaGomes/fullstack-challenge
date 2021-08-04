import { useEffect, useState } from "react";
import { NavigationBar } from "@/common";
import Head from "next/head";
import { VscSearch } from "react-icons/vsc";
import Image from "next/image";
import Link from "next/link";
import api from "@/services/api";

type BooksProps = {
  id: string;
  title: string;
  author: string;
  description: string;
  thumbnail: string;
};

import {
  HomePageContainer,
  HomePageContent,
  SearchInput,
  BookContainer,
} from "./styles";

export function HomePage() {
  const [books, setBooks] = useState<BooksProps[]>([]);

  useEffect(() => {
    api.get("/books").then((response) => {
      setBooks(response.data);
    });
  }, []);

  return (
    <HomePageContainer>
      <HomePageContent>
        <Head>
          <title>Home Page | Book App</title>
        </Head>
        <SearchInput>
          {/*<VscSearch />*/}
          <input type="text" placeholder="Search book" />
        </SearchInput>
        <h1>
          <span>Hi</span>, Mehmed Al Fatih 👋
        </h1>
        <BookContainer>
          {books.map((book) => {
            return (
              <div key={book.id}>
                <Link href={`/books/${book.id}`}>
                  <a>
                    <Image
                      width={110}
                      height={160}
                      src={book.thumbnail}
                      alt={book.title}
                    />
                  </a>
                </Link>
                <h2>The One Thing</h2>
                <p>by {book.author}</p>
              </div>
            );
          })}
        </BookContainer>
      </HomePageContent>
      <NavigationBar activeItem={1} />
    </HomePageContainer>
  );
}
