import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const books = [
  {
    id: "02XnPAAACAAJ",
    title: "The Lord of the Rings 1",
    author: "J. R. R. Tolkien",
    description:
      "O Senhor dos Anéis é um livro de alta fantasia, escrito pelo escritor britânico J. R. R. Tolkien. Escrita entre 1937 e 1949, com muitas partes criadas durante a Segunda Guerra Mundial, a saga é uma continuação de O Hobbit.",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f95646dcdb2aaa3bad942f4ebed1ecbc579deea649ecc3faa92486e87f8324fc._RI_V_TTW_.jpg",
  },
  {
    id: "12XnPAAACAAJ",
    title: "The Lord of the Rings 2",
    author: "J. R. R. Tolkien",
    description:
      "O Senhor dos Anéis é um livro de alta fantasia, escrito pelo escritor britânico J. R. R. Tolkien. Escrita entre 1937 e 1949, com muitas partes criadas durante a Segunda Guerra Mundial, a saga é uma continuação de O Hobbit.",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f95646dcdb2aaa3bad942f4ebed1ecbc579deea649ecc3faa92486e87f8324fc._RI_V_TTW_.jpg",
  },
  {
    id: "22XnPAAACAAJ",
    title: "The Lord of the Rings 3",
    author: "J. R. R. Tolkien",
    description:
      "O Senhor dos Anéis é um livro de alta fantasia, escrito pelo escritor britânico J. R. R. Tolkien. Escrita entre 1937 e 1949, com muitas partes criadas durante a Segunda Guerra Mundial, a saga é uma continuação de O Hobbit.",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f95646dcdb2aaa3bad942f4ebed1ecbc579deea649ecc3faa92486e87f8324fc._RI_V_TTW_.jpg",
  },
  {
    id: "32XnPAAACAAJ",
    title: "The Lord of the Rings 4",
    author: "J. R. R. Tolkien",
    description:
      "O Senhor dos Anéis é um livro de alta fantasia, escrito pelo escritor britânico J. R. R. Tolkien. Escrita entre 1937 e 1949, com muitas partes criadas durante a Segunda Guerra Mundial, a saga é uma continuação de O Hobbit.",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f95646dcdb2aaa3bad942f4ebed1ecbc579deea649ecc3faa92486e87f8324fc._RI_V_TTW_.jpg",
  },
  {
    id: "42XnPAAACAAJ",
    title: "The Lord of the Rings 5",
    author: "J. R. R. Tolkien",
    description:
      "O Senhor dos Anéis é um livro de alta fantasia, escrito pelo escritor britânico J. R. R. Tolkien. Escrita entre 1937 e 1949, com muitas partes criadas durante a Segunda Guerra Mundial, a saga é uma continuação de O Hobbit.",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f95646dcdb2aaa3bad942f4ebed1ecbc579deea649ecc3faa92486e87f8324fc._RI_V_TTW_.jpg",
  },
  {
    id: "52XnPAAACAAJ",
    title: "The Lord of the Rings 6",
    author: "J. R. R. Tolkien",
    description:
      "O Senhor dos Anéis é um livro de alta fantasia, escrito pelo escritor britânico J. R. R. Tolkien. Escrita entre 1937 e 1949, com muitas partes criadas durante a Segunda Guerra Mundial, a saga é uma continuação de O Hobbit.",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f95646dcdb2aaa3bad942f4ebed1ecbc579deea649ecc3faa92486e87f8324fc._RI_V_TTW_.jpg",
  },
  {
    id: "62XnPAAACAAJ",
    title: "The Lord of the Rings 6",
    author: "J. R. R. Tolkien",
    description:
      "O Senhor dos Anéis é um livro de alta fantasia, escrito pelo escritor britânico J. R. R. Tolkien. Escrita entre 1937 e 1949, com muitas partes criadas durante a Segunda Guerra Mundial, a saga é uma continuação de O Hobbit.",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f95646dcdb2aaa3bad942f4ebed1ecbc579deea649ecc3faa92486e87f8324fc._RI_V_TTW_.jpg",
  },
];

app.get("/books", (request, response) => {
  return response.json(books);
});

app.get("/books/:id", (request, response) => {
  const { id } = request.params;

  const book = books.find((book) => book.id === id);

  if (!book) {
    return response.status(404).send("Book not found");
  }

  return response.json(book);
});

app.listen(process.env.PORT || 3333, () => {
  console.log("server is running");
});
