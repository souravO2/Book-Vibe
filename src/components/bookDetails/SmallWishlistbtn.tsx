"use client";

import { BooksContext } from "@/context/BooksContext";
import { BookType } from "@/types/BookType";
import React, { useContext } from "react";
import { FiHeart } from "react-icons/fi";
import { toast } from "sonner";

const SmallWishlistbtn = ({ book }: { book: BookType }) => {
  const { wishlist, setWishlist } = useContext(BooksContext);

  const handleAddToWishlist = () => {
    setWishlist((prev: BookType[]) => [...prev, book]);
    toast.success(`Successfully added "${book.bookName}" to wishlist.`);
  };

  return (
    <button
      onClick={() => handleAddToWishlist()}
      className="btn col-span-2 flex h-12 items-center justify-center rounded-xl bg-gray-100 hover:text-green-700"
    >
      <FiHeart className="text-lg"/>
    </button>
  );
};

export default SmallWishlistbtn;
