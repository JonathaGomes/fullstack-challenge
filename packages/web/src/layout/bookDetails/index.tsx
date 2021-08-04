import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

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
    <div>
      <Head>
        <title>{book.title} | Página não encontrada</title>
      </Head>
      <div key={book.id}>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <p>{book.description}</p>
        <Image width={100} height={200} src={book.thumbnail} alt={book.title} />
      </div>
      <Link href="/">
        <a>Go Home</a>
      </Link>
    </div>
  );
}
