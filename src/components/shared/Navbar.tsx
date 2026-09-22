import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/book.ico";

const Navbar = () => {
  const link = (
    <>
      <li>
        <Link href={`/`}>Home</Link>
      </li>
      <li>
        <Link href={`/books`}>All Books</Link>
      </li>
      <li>
        <Link href={`/listed-books`}>Listed Books</Link>
      </li>
      <li>
        <Link href={`/Read-Books`}>Pages to Read</Link>
      </li>
    </>
  );

  return (
    <nav className="bg-base-100 shadow-md sticky z-50 top-0">
      <div className="navbar md:container md:mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <Link href={`/`} className="flex gap-2 btn-ghost text-xl">
            <Image src={logo} width={24} height={24} alt="logo" />
            <h1 className="font-bold hidden sm:block">Book Vibe</h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end gap-4">
          <button className="btn">Sign Up</button>
          <button className="btn">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
