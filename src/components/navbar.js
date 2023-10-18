"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
          {/* Sign Up and Login buttons */}
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

          {/* Mobile menu button */}
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

        {/* Mobile navigation links */}
        <div className={`items-center justify-between w-full md:hidden ${mobileMenuVisible ? "block" : "hidden"}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50">
            <li>
              <Link href="/">
                <p className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100">About</p>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <p className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100">Blog</p>
              </Link>
            </li>
            <li>
              <Link href="/map">
                <p className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100">Map</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100">Contact</p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop navigation links */}
        <div className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/">
                <p className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100">About</p>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <p className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100">Blog</p>
              </Link>
            </li>
            <li>
              <Link href="/map">
                <p className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100">Map</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100">Contact</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
