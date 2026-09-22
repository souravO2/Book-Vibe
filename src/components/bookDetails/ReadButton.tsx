"use client";

import { BooksContext } from "@/context/BooksContext";
import { BookType } from "@/types/BookType";
import React, { useContext } from "react";
import { FiBookOpen } from "react-icons/fi";
import { toast } from "sonner";

const ReadButton = ({ book }: { book: BookType }) => {
  const { readBooks, setReadBooks } = useContext(BooksContext);

  const handleReadBook = () => {
    setReadBooks((prev: BookType[]) => [...prev, book]);
    toast.success(`Successfully read "${book.bookName}"`);
  };

  return (
    <button
      onClick={() => handleReadBook()}
      className="btn flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3.5 font-semibold text-white shadow-lg shadow-green-100 transition hover:bg-gray-900 hover:shadow-green-200"
    >
      <FiBookOpen />
      Read Book
    </button>
  );
};

export default ReadButton;
