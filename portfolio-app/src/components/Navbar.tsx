import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MyPortfolio</span>
        </Link>
        <div className="flex md:order-2">
          <Link
            href="#"
            className="block mx-4 lg:mx-6 text-gray-800 hover:border-b-2 hover:border-blue-500 dark:text-white"
            aria-current="page"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block mx-4 lg:mx-6 text-gray-800 hover:border-b-2 hover:border-blue-500 dark:text-white"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="block mx-4 lg:mx-6 text-gray-800 hover:border-b-2 hover:border-blue-500 dark:text-white"
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="block mx-4 lg:mx-6 text-gray-800 hover:border-b-2 hover:border-blue-500 dark:text-white"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block mx-4 lg:mx-6 text-gray-800 hover:border-b-2 hover:border-blue-500 dark:text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}