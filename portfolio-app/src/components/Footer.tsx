export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </p>
        <div className="mt-4 space-x-4">
          <a
            href="#"
            className="hover:text-gray-400"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="hover:text-gray-400"
          >
            GitHub
          </a>
          <a
            href="#"
            className="hover:text-gray-400"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}