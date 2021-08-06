import { useEffect, useState } from "react";
import { NavigationBar } from "@/common";
import Head from "next/head";
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
  ButtonLoadMore,
} from "./styles";

export function HomePage() {
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(0);
  const [booksPerPage, setBooksPerPage] = useState(3);
  const [books, setBooks] = useState<BooksProps[]>([]);
  const [allBooks, setAllBooks] = useState<BooksProps[]>([]);
  const noMoreBooks = page + booksPerPage >= allBooks.length;
  const filteredBooks = !!searchValue
    ? books.filter((book) => {
        return book.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : books;

  console.log(filteredBooks);

  useEffect(() => {
    api.get("/books").then((response) => {
      setAllBooks(response.data);
      setBooks(response.data.slice(page, booksPerPage));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSearch(query: string) {
    setSearchValue(query);
  }

  function loadMoreBooks() {
    const nextPage = page + booksPerPage;
    const nextBooks = allBooks.slice(nextPage, nextPage + booksPerPage);

    setBooks(books.concat(nextBooks));
    setPage(nextPage);
  }

  return (
    <HomePageContainer>
      <HomePageContent>
        <Head>
          <title>Home Page | Book App</title>
        </Head>
        <SearchInput>
          <label>
            <div>
              <Image
                height={16}
                width={16}
                src={"/lupa.svg"}
                alt={"Search book"}
              />
            </div>
            <input
              onChange={(e) => handleSearch(e.target.value)}
              type="text"
              placeholder="Search book"
            />
          </label>
        </SearchInput>
        <h1>
          <span>Hi,</span> Mehmed Al Fatih 👋
        </h1>
        <BookContainer>
          {filteredBooks.length === 0 && (
            <h1>There are no books with this title</h1>
          )}

          {filteredBooks.length > 0 &&
            books.map((book) => {
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
        {filteredBooks.length > 0 && searchValue && (
          <ButtonLoadMore onClick={loadMoreBooks} disabled={noMoreBooks}>
            Load More
          </ButtonLoadMore>
        )}
      </HomePageContent>
      <NavigationBar activeItem={1} />
    </HomePageContainer>
  );
}
