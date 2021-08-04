import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { BiBookOpen } from "react-icons/bi";
import { RiHeadphoneFill } from "react-icons/ri";
import { IoShareOutline } from "react-icons/io5";
import {
  BookDetailsContainer,
  BookDetailsContent,
  BookCover,
  ArrowBack,
  BookDetailsBar,
} from "./styles";

type BookProps = {
  id: string;
  title: string;
  author: string;
  description: string;
  thumbnail: string;
};

type Book = {
  book: BookProps;
};

export function BookDetails({ book }: Book) {
  return (
    <BookDetailsContainer>
      <Head>
        <title>{book.title} | Página não encontrada</title>
      </Head>

      <section>
        <ArrowBack>
          <Link href="/">
            <a>
              <Image height={16} width={16} src={"/back.svg"} alt={"Voltar"} />
            </a>
          </Link>
        </ArrowBack>
        <BookCover>
          <Image
            width={160}
            height={230}
            src={book.thumbnail}
            alt={book.title}
          />
        </BookCover>
      </section>
      <BookDetailsContent>
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        <p>{book.description}</p>
      </BookDetailsContent>
      <BookDetailsBar>
        <Link href="/">
          <a>
            <BiBookOpen size="18" color="#CFCBD2" /> Read
          </a>
        </Link>
        <Link href="/">
          <a>
            <RiHeadphoneFill size="18" color="#CFCBD2" /> Listen
          </a>
        </Link>
        <Link href="/">
          <a>
            <IoShareOutline size="18" color="#CFCBD2" /> Share
          </a>
        </Link>
      </BookDetailsBar>
    </BookDetailsContainer>
  );
}
