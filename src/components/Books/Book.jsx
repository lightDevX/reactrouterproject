import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookId, bookName, image, author, rating } = book;
  return (
    <Link to={`/book/${bookId}`}>
      <div className="flex flex-col space-y-4 rounded-2xl bg-neutral-900/30 p-5 outline outline-amber-200">
        <div className="h-1/2 w-full grow">
          <img
            src={image}
            alt="Book Cover"
            className="h-96 w-[380px] rounded-2xl object-cover"
          />
        </div>
        <p>Book Name: {bookName}</p>
        <h2>Author: {author}</h2>
        <p>Ratings: {rating}</p>
      </div>
    </Link>
  );
};

export default Book;
