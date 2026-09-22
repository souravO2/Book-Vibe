"use client"

import { BooksContext } from "@/context/BooksContext";
import { BookType } from "@/types/BookType";
import React, { useContext } from "react";
import { FiBookOpen } from "react-icons/fi";
import { toast } from "sonner";

const SmallReadbtn = ({book}: {book : BookType}) => {
  const { readBooks, setReadBooks } = useContext(BooksContext);

  const handleReadBook = () => {
    setReadBooks((prev: BookType[]) => [...prev, book]);
    toast.success(`Successfully read "${book.bookName}"`);
  };

  return (
    <button
      onClick={() => handleReadBook()}
      className="btn col-span-2 flex h-12 items-center justify-center rounded-xl bg-gray-100 hover:text-green-700"
    >
      <FiBookOpen className="text-lg"/>
    </button>
  );
};

export default SmallReadbtn;
