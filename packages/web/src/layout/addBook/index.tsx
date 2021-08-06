import { useEffect, useState } from "react";
import { NavigationBar } from "@/common";
import Head from "next/head";
import { IoShareOutline } from "react-icons/io5";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";

type FormProps = {
  title: string;
  author: string;
  description: string;
};

type uploadedFilesProps = {
  name: string;
  id: string;
  preview: string;
};

const schema = yup.object().shape({
  title: yup.string().required("The Name is required"),
  author: yup.string().required("The Author is required"),
  description: yup
    .string()
    .min(100, "The description must be at least 100 characters.")
    .required("Description is required"),
});

import {
  AddBookContainer,
  AddBookContent,
  MessageError,
  InputFileContainer,
} from "./styles";

export function AddBook() {
  const [file, setFile] = useState({} as uploadedFilesProps);
  const { acceptedFiles, getInputProps, getRootProps } = useDropzone({
    accept: "image/jpeg, image/png, image/jpg",
    maxFiles: 1,
  });
  console.log(file);

  useEffect(() => {
    const file = acceptedFiles[0];

    if (file) {
      setFile({
        id: file.name + "-" + Date.now(),
        name: file.name,
        preview: URL.createObjectURL(file),
      });
    }
  }, [acceptedFiles]);

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
            <label>Image</label>
            <InputFileContainer {...getRootProps()}>
              <IoShareOutline size={32} />
              <input type="text" {...getInputProps()} />
            </InputFileContainer>
          </div>
          <div>
            <label>
              Name
              <input {...register("title")} />
            </label>
            <MessageError>{errors.title?.message}</MessageError>
          </div>
          <div>
            <label>
              Author
              <input {...register("author")} />
            </label>
            <MessageError>{errors.author?.message}</MessageError>
          </div>
          <div>
            <label>
              Description
              <textarea {...register("description")}></textarea>
            </label>
            <MessageError>{errors.description?.message}</MessageError>
          </div>
          <button type="submit">Add new book</button>
        </form>
      </AddBookContent>
      <NavigationBar activeItem={2} />
    </AddBookContainer>
  );
}
