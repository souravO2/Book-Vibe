import Image from "next/image";
import React from "react";
import banner from "@/assets/hero_img.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="container mx-auto my-8 overflow-hidden rounded-3xl bg-linear-to-br from-[#f5f3ff] via-[#fafafa] to-[#eef2ff]">
      <div className="flex min-h-125 items-center justify-between px-10 py-12 md:px-16 lg:px-20">
        {/* Content */}
        <div className="max-w-xl">
          <span className="mb-5 inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm">
            📚 Discover your next favorite book
          </span>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Books to freshen up
            <br />
            <span className="text-[#23BE0A]">your bookshelf</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-gray-600 md:text-lg">
            Explore inspiring stories, timeless classics, and exciting new reads
            curated for every kind of reader.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Link href={`/books`}>
              <button className="btn rounded-full bg-[#23BE0A] px-7 py-3.5 font-semibold text-white shadow-lg shadow-violet-200 hover:bg-gray-900">
                View The List
              </button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative hidden md:block">
          <div className="absolute -inset-6 rounded-full bg-violet-200/40 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src={banner}
              width={400}
              height={400}
              alt="A collection of books"
              className="h-90 w-90 object-cover transition duration-500 hover:scale-105 lg:h-105 lg:w-105"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-5 -left-8 rounded-2xl bg-white px-5 py-4 shadow-xl">
            <p className="text-xs font-medium text-gray-500">
              Readers&apos; choice
            </p>
            <p className="mt-1 font-bold text-gray-900">✨ 100+ Books</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
