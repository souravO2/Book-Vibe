"use client"

import { BooksContext } from "@/context/BooksContext";
import { BookType } from "@/types/BookType";
import React, { useContext } from "react";
import { FiHeart } from "react-icons/fi";
import { toast } from "sonner";

const WishlistButton = ({book}:{book: BookType}) => {
  const {wishlist, setWishlist} = useContext(BooksContext);

  const handleAddToWishlist = () =>{
    setWishlist((prev : BookType[]) => [...prev, book]);
    toast.success(`Successfully added "${book.bookName}" to wishlist.`)
  }

  return (
    <button 
    onClick={()=> handleAddToWishlist()}
    className="btn flex flex-1 items-center justify-center gap-2 rounded-xl border border-green-200 px-6 py-3.5 font-semibold text-green-700 transition hover:border-gray-200 hover:bg-gray-50 hover:text-gray-700">
      <FiHeart />
      Add to Wishlist
    </button>
  );
};

export default WishlistButton;
