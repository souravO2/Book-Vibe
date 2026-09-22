"use client";

import SmallBookCard from "@/components/homepage/SmallBookCard";
import { BooksContext } from "@/context/BooksContext";
import { BookType } from "@/types/BookType";
import React, { useContext, useState } from "react";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BooksContext);

  const [sort, setSort] = useState<"rating" | "year" | "pages">();

  const sortBooks = (books: BookType[]) => {
    const sortedBooks = [...books];
    if (sort === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sort === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sort === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    return sortedBooks;
  };

  const sortReadBooks = sortBooks(readBooks);
  const sortWishlist = sortBooks(wishlist);

  return (
    <div className="container mx-auto">
      <h2 className="text-center text-4xl font-bold my-4 bg-gray-100 rounded-2xl py-8">
        Listed Books
      </h2>
      <div className="text-center sm:text-right mt-12 mb-2">
        <select
          defaultValue="Sort"
          value={sort}
          onChange={(e) =>
            setSort(e.target.value as "rating" | "pages" | "year")
          }
          className="select"
        >
          <option disabled={true}>Sort</option>
          <option value={"rating"}>Rating</option>
          <option value={"year"}>Published Year</option>
          <option value={"pages"}>Number of Pages</option>
        </select>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 space-y-4">
          {sortReadBooks.length > 0 ? (
            sortReadBooks.map((book: BookType) => (
              <SmallBookCard key={book.bookId} book={book} />
            ))
          ) : (
            <p className="text-center text-2xl font-semibold text-gray-400">
              No Read Book Found.
            </p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist Books (${wishlist.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 space-y-4">
          {sortWishlist.length > 0 ? (
            sortWishlist.map((book: BookType) => (
              <SmallBookCard key={book.bookId} book={book} />
            ))
          ) : (
            <p className="text-center text-2xl font-semibold text-gray-400">
              No Wishlist Book Found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
