import { NavigationBar } from "@/common";
import Head from "next/head";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useForm } from "react-hook-form";

type FormProps = {
  title: string;
  author: string;
  description: string;
};

const schema = yup.object().shape({
  title: yup.string().required("The Name is required"),
  author: yup.string().required("The Author is required"),
  description: yup
    .string()
    .min(100, "The description must be at least 100 characters.")
    .required("Description is required"),
});

import { AddBookContainer, AddBookContent, MessageError } from "./styles";

export function AddBook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormProps) => console.log(data); // posso enviar para a api

  return (
    <AddBookContainer>
      <Head>
        <title>Add Book | Book App</title>
      </Head>
      <AddBookContent>
        <h1>Add a new book</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Name</label>
            <input {...register("title")} />
            <MessageError>{errors.title?.message}</MessageError>
          </div>
          <div>
            <label>Author</label>
            <input {...register("author")} />
            <MessageError>{errors.author?.message}</MessageError>
          </div>
          <div>
            <label>Description</label>
            <textarea {...register("description")}></textarea>
            <MessageError>{errors.description?.message}</MessageError>
          </div>
          <button type="submit">Add new book</button>
        </form>
      </AddBookContent>
      <NavigationBar activeItem={2} />
    </AddBookContainer>
  );
}
