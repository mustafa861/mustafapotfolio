export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          I'm a passionate developer showcasing my projects, skills, and thoughts.
          Explore my work, read my blog, and get in touch.
        </p>
        <div className="space-x-6">
          <a
            href="/about"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            About Me
          </a>
          <a
            href="/projects"
            className="inline-block px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            Projects
          </a>
        </div>
      </section>
    </main>
  );
}