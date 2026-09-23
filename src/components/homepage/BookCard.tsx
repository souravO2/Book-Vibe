import { BookType } from "@/types/BookType";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiBookOpen } from "react-icons/fi";
import SmallReadbtn from "../bookDetails/SmallReadbtn";
import SmallWishlistbtn from "../bookDetails/SmallWishlistbtn";

interface BookCardProps {
  book: BookType;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <article className="group mx-4 sm:mx-0 md:mx-4 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl">
      {/* Book Image */}
      <div className="relative h-120 w-full overflow-hidden bg-gray-100">
        <Image
          src={book.image}
          width={400}
          height={300}
          alt={book.bookName}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />

        {/* Rating */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/25 px-3 py-1.5 text-sm font-semibold shadow-sm backdrop-blur-[1px]">
          <FaStar className="text-lg text-yellow-500" />
          {book.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {book.tags.slice(0, 2).map((tag, id) => (
            <span
              key={id}
              className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="line-clamp-2 text-xl font-bold leading-snug text-gray-900 transition-colors group-hover:text-green-600">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-2 text-sm text-gray-500">
          By <span className="font-medium text-gray-700">{book.author}</span>
        </p>

        {/* Details */}
        <div className="mt-5 grid grid-cols-2 gap-y-3 border-t border-gray-100 pt-4 text-sm">
          <div>
            <p className="text-xs text-gray-400">Category</p>
            <p className="mt-1 font-medium text-gray-700">{book.category}</p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Published</p>
            <p className="mt-1 font-medium text-gray-700">
              {book.yearOfPublishing}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Pages</p>
            <p className="mt-1 flex items-center gap-1 font-medium text-gray-700">
              <FiBookOpen className="text-gray-400" />
              {book.totalPages}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Publisher</p>
            <p className="mt-1 truncate font-medium text-gray-700">
              {book.publisher}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="grid grid-cols-12 items-center gap-2 mt-4">
          <Link
            href={`/books/${book.bookId}`}
            className="btn col-span-8 flex h-12 items-center justify-center gap-2 rounded-xl bg-green-700 text-sm font-semibold text-white hover:bg-gray-900"
          >
            View Details
            <FaArrowRightLong />
          </Link>

          <SmallReadbtn book={book} />
          <SmallWishlistbtn book={book} />
        </div>
      </div>
    </article>
  );
};

export default BookCard;
