"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/assets/book.ico";
import {
  FiBookOpen,
  FiChevronRight,
  FiHome,
  FiMenu,
  FiUser,
  FiX,
} from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="navbar mx-auto h-14 max-w-7xl px-4 sm:px-6">
          {/* ================= MOBILE ================= */}
          <div className="flex w-full items-center justify-between lg:hidden">
            {/* Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-700 transition hover:bg-gray-100"
            >
              {menuOpen ? (
                <FiX className="text-xl" />
              ) : (
                <FiMenu className="text-xl" />
              )}
            </button>

            {/* Center Logo */}
            <Link
              href="/"
              onClick={closeMenu}
              className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2"
            >
              <Image src={logo} width={26} height={26} alt="Book Vibe logo" />

              <span className="text-lg font-bold text-gray-900">Book Vibe</span>
            </Link>

            {/* Right Profile */}
            <button
              aria-label="Account"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition hover:bg-green-50 hover:text-green-700"
            >
              <FiUser className="text-lg" />
            </button>
          </div>

          {/* ================= DESKTOP ================= */}
          <div className="hidden w-full items-center lg:flex">
            {/* Logo */}
            <div className="navbar-start">
              <Link href="/" className="flex items-center gap-2 text-xl">
                <Image src={logo} width={28} height={28} alt="Book Vibe logo" />

                <span className="font-bold text-gray-900">Book Vibe</span>
              </Link>
            </div>

            {/* Navigation */}
            <div className="navbar-center">
              <ul className="menu menu-horizontal gap-1 px-1">
                <li>
                  <Link href="/">Home</Link>
                </li>

                <li>
                  <Link href="/books">All Books</Link>
                </li>

                <li>
                  <Link href="/listed-books">Listed Books</Link>
                </li>

                <li>
                  <Link href="/Read-Books">Pages to Read</Link>
                </li>
              </ul>
            </div>

            {/* Auth */}
            <div className="navbar-end gap-3">
              <button className="btn btn-outline">Sign Up</button>

              <button className="btn bg-green-700 text-white hover:bg-green-800">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={closeMenu}
            className="fixed inset-0 top-14 z-40 bg-black/20 backdrop-blur-[2px] lg:hidden"
          />

          {/* Menu Panel */}
          <div className="fixed left-0 right-0 top-14 z-50 border-b border-gray-200 bg-white shadow-xl lg:hidden">
            <div className="p-4">
              {/* Menu Header */}
              <div className="mb-3 flex items-center gap-2 px-2 py-2">
                <Image src={logo} width={24} height={24} alt="Book Vibe logo" />

                <span className="text-sm font-semibold text-gray-500">
                  Book Vibe
                </span>
              </div>

              {/* Navigation Links */}
              <div className="space-y-1">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-gray-700 transition hover:bg-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <FiHome className="text-lg" />
                    <span>Home</span>
                  </div>

                  <FiChevronRight className="text-gray-400" />
                </Link>

                <Link
                  href="/books"
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-gray-700 transition hover:bg-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <FiBookOpen className="text-lg" />
                    <span>All Books</span>
                  </div>

                  <FiChevronRight className="text-gray-400" />
                </Link>

                <Link
                  href="/listed-books"
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-gray-700 transition hover:bg-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <FiBookOpen className="text-lg" />
                    <span>Listed Books</span>
                  </div>

                  <FiChevronRight className="text-gray-400" />
                </Link>

                <Link
                  href="/Read-Books"
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-gray-700 transition hover:bg-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <FiBookOpen className="text-lg" />
                    <span>Pages to Read</span>
                  </div>

                  <FiChevronRight className="text-gray-400" />
                </Link>
              </div>

              {/* Divider */}
              <div className="my-4 border-t border-gray-100" />

              {/* Auth Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button onClick={closeMenu} className="btn rounded-xl">
                  Sign Up
                </button>

                <button
                  onClick={closeMenu}
                  className="btn rounded-xl bg-green-700 text-white hover:bg-green-800"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
