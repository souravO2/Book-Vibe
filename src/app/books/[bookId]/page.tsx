import ReadButton from "@/components/bookDetails/ReadButton";
import WishlistButton from "@/components/bookDetails/WishlistButton";
import { BookType } from "@/types/BookType";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FiBookOpen, FiCalendar } from "react-icons/fi";

const getBooks = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
  );
  return await res.json();
};

const BookDetailsPage = async ({
  params,
}: {
  params: Promise<{ bookId: string }>;
}) => {
  const { bookId } = await params;

  const booksData = await getBooks();

  const book = booksData.find(
    (book: BookType) => Number(bookId) === book.bookId,
  ) as BookType;

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl">
        <div className="grid lg:grid-cols-[420px_1fr]">
          {/* Book Cover */}
          <div className="flex items-center justify-center bg-linear-to-br from-green-50 via-white to-emerald-50 p-8 lg:p-12">
            <div className="relative w-full max-w-85 overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src={book.image}
                width={500}
                height={750}
                alt={book.bookName}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="p-7 sm:p-10 lg:p-12">
            {/* Category */}
            <div className="mb-5">
              <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-600">
                {book.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {book.bookName}
            </h1>

            {/* Author */}
            <p className="mt-4 text-lg text-gray-500">
              By{" "}
              <span className="font-semibold text-gray-800">{book.author}</span>
            </p>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-3">
              <div className="flex items-center gap-1 rounded-full bg-amber-50 px-4 py-2">
                <FaStar className="text-2xl text-amber-500" />
                <span className="font-bold text-gray-800">
                  {book.rating}&nbsp;&nbsp;
                  <span className="text-gray-400">/ 5.0</span>
                </span>
              </div>

              <span className="text-sm text-gray-400">Reader rating</span>
            </div>

            {/* Divider */}
            <div className="my-7 h-px bg-gray-100" />

            {/* Review */}
            <section>
              <h2 className="mb-3 text-lg font-bold text-gray-900">
                About the book
              </h2>

              <p className="leading-7 text-gray-600">{book.review}</p>
            </section>

            {/* Tags */}
            <div className="mt-6">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-400">
                Tags
              </h2>

              <div className="flex flex-wrap gap-2">
                {book.tags.map((tag, id) => (
                  <span
                    key={id}
                    className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Book Information */}
            <div className="my-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-xl bg-gray-50 p-4">
                <FiBookOpen className="mb-2 text-xl text-green-600" />
                <p className="text-xs text-gray-400">Pages</p>
                <p className="mt-1 font-semibold text-gray-800">
                  {book.totalPages}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <FiCalendar className="mb-2 text-xl text-green-600" />
                <p className="text-xs text-gray-400">Published</p>
                <p className="mt-1 font-semibold text-gray-800">
                  {book.yearOfPublishing}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs text-gray-400">Publisher</p>
                <p className="mt-1 truncate font-semibold text-gray-800">
                  {book.publisher}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs text-gray-400">Category</p>
                <p className="mt-1 font-semibold text-gray-800">
                  {book.category}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <ReadButton book={book} />
              <WishlistButton book={book} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookDetailsPage;
