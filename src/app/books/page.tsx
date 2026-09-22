import React from "react";
import BookCard from "@/components/homepage/BookCard";
import { BookType } from "@/types/BookType";

const getBooks = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    return await res.json();
  } catch (error) {
    console.error("Erro fetching data", error);
    return [];
  }
};

const Books = async () => {
  const Books: BookType[] = await getBooks();
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-5xl text-center my-4">
        Explore All Boooks
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 my-8 items-center justify-center gap-16">
        {Books.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
