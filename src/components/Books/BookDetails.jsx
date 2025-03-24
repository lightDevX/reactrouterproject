import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoreBookList } from "../../Utilities/bookDB";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId); // Ensure number type
  const data = useLoaderData();

  console.log("Loaded data:", data);
  console.log("Book ID from URL:", bookId, "Parsed ID:", id);

  const book = data.find((book) => parseInt(book.bookId) === id);

  if (!book) {
    return <p>Book not found</p>;
  }

  const { bookName, image, author, review } = book;

  const handleMarkAsRead = (id) => {
    console.log("Marking book as read:", id);
    addToStoreBookList(id);
  };

  return (
    <div className="flex gap-12 bg-neutral-800/35 p-8">
      <div className="h-1/2 w-full">
        <img
          src={image}
          alt={bookName}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="space-y-4">
        <p>Book Name: {bookName}</p>
        <h2>Author Name: {author}</h2>
        <p>Review: {review}</p>
        <div className="flex gap-3">
          <button className="rounded-2xl bg-lime-400/50 px-4 py-2 outline outline-amber-300">
            Wish List
          </button>
          <button
            className="rounded-2xl bg-lime-400/50 px-4 py-2 outline outline-amber-300"
            onClick={() => handleMarkAsRead(id)} // Fix here
          >
            Mark as Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
