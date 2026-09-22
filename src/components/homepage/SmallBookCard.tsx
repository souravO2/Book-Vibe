import { BookType } from "@/types/BookType";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong, FaStar } from "react-icons/fa6";
import { FiBookOpen } from "react-icons/fi";

const SmallBookCard = ({ book }: { book: BookType }) => {
  return (
    <article className="group flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-lg sm:flex-row">
      {/* Book Image */}
      <div className="relative h-96 w-full shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-96 sm:w-60">
        <Image
          src={book.image}
          fill
          sizes="(max-width: 640px) 100vw, 160px"
          alt={book.bookName}
          className="object-cover"
        />

        {/* Rating */}
        {/* <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-white/25 text-white px-2.5 py-1 text-xs font-semibold shadow-sm backdrop-blur-sm">
          <FaStar className="text-yellow-500" />
          {book.rating}
        </div> */}
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Tags */}
        <div className="mb-2 flex flex-wrap gap-2">
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
        <h2 className="line-clamp-2 text-xl font-bold leading-snug text-gray-900 transition-colors group-hover:text-green-700">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 text-sm text-gray-500">
          By <span className="font-medium text-gray-700">{book.author}</span>
        </p>

        {/* Metadata */}
        <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:grid-cols-3">
          <div>
            <p className="text-xs text-gray-400">Category</p>
            <p className="mt-0.5 font-medium text-gray-700">{book.category}</p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Published</p>
            <p className="mt-0.5 font-medium text-gray-700">
              {book.yearOfPublishing}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Pages</p>
            <p className="mt-0.5 flex items-center gap-1 font-medium text-gray-700">
              <FiBookOpen className="text-gray-400" />
              {book.totalPages}
            </p>
          </div>

          <div className="sm:col-span-2">
            <p className="text-xs text-gray-400">Publisher</p>
            <p className="mt-0.5 truncate font-medium text-gray-700">
              {book.publisher}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-auto flex items-center justify-between gap-4 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <span>Rating</span>
            <FaStar className="text-yellow-500" />
            <span className="font-semibold text-gray-800">{book.rating}</span>
          </div>

          <Link
            href={`/books/${book.bookId}`}
            className="flex items-center gap-2 rounded-xl bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-900"
          >
            View Details
            <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default SmallBookCard;
