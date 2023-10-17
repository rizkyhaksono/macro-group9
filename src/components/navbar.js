"use client";

import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";

export default function Navbar() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <nav className="fixed w-full z-20 top-0 left-0 border-b border-gray-300 bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <Image src="/logo.png" alt="GreenSaver Logo" className="h-8 mr-3" width={30} height={30} />
        </a>
        <div className="flex md:order-2">
          <Link href="/signup">
            <button type="button" className="py-2 px-4 mr-2 text-sm font-medium text-primary focus:outline-none bg-white rounded-lg border hover:bg-gray-300 hover:text-secondary focus:ring-4 focus:ring-gray-200">
              Sign Up
            </button>
          </Link>
          <Link href="/login">
            <button type="button" className="py-2 px-4 mr-2 text-sm font-medium text-white focus:outline-none bg-primary rounded-lg border border-primary hover:bg-secondary hover:text-white focus:ring-4 focus:ring-gray-200">
              Login
            </button>
          </Link>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            onClick={toggleMobileMenu}
            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${
              mobileMenuVisible ? "active" : ""
            }`}
            aria-controls="navbar-sticky"
            aria-expanded={mobileMenuVisible}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ${mobileMenuVisible ? "md:flex" : ""}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/about"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-primary dark:text-white dark:hover:text-primary md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:primary dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/map"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-primary dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Map
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-primary dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
