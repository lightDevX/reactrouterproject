import React from "react";
import { useLoaderData } from "react-router";
import Book from "./Book";

const Books = () => {
  const books = useLoaderData();

  console.log(books);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
      {books.map((book) => (
        <Book key={book.bookId} book={book}></Book>
      ))}
    </div>
  );
};

export default Books;
