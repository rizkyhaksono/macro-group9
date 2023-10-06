import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="bg-primary dark:bg-primary">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0">
              <Image src="/logo.png" alt="GreenSaver Logo" className="h-8 mr-3 bg-white rounded p-1" width={30} height={30} />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">GreenSaver</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="/about" className="mr-4 hover:underline md:mr-6 text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/blog" className="mr-4 hover:underline md:mr-6 text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="/map" className="mr-4 hover:underline md:mr-6 text-white">
                  Map
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 " />
          <span className="block text-sm text-white sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="#" className="hover:underline">
              GreenSaver™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
