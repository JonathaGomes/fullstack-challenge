import { BookDetails } from "@/layout/bookDetails";
import { GetStaticPaths } from "next";
import api from "@/services/api";

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

type Params = {
  params: {
    slug: string;
  };
};

export default function Book({ book }: Book) {
  return <BookDetails book={book} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get("/books");

  const paths = data.map((book: BookProps) => {
    return {
      params: {
        slug: book.id,
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const { slug } = params;
  const { data } = await api.get(`/books/${slug}`);

  const book = {
    id: data.id,
    title: data.title,
    author: data.author,
    thumbnail: data.thumbnail,
    description: data.description,
  };

  return {
    props: {
      book,
    },
    revalidate: 60 * 60 * 24, // 24 horas
  };
};
