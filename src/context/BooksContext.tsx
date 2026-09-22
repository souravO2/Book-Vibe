"use client";

import { BookType } from "@/types/BookType";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export interface BooksContextProp {
  readBooks: BookType[];
  setReadBooks: Dispatch<SetStateAction<BookType[]>>;
  wishlist: BookType[];
  setWishlist: Dispatch<SetStateAction<BookType[]>>;
}

export const BooksContext = createContext<BooksContextProp>({
  readBooks: [],
  setReadBooks: () => {},
  wishlist: [],
  setWishlist: () => {},
});

const BooksProvider = ({ children }: { children: React.ReactNode }) => {
  const [readBooks, setReadBooks] = useState<BookType[]>([]);
  const [wishlist, setWishlist] = useState<BookType[]>([]);

  const sharedData = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };

  return (
    <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
