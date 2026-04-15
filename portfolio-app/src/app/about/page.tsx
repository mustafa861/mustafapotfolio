export default function About() {
  return (
    <main className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Who I Am
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              I'm a dedicated developer with a passion for building elegant and
              efficient web applications. My journey in technology began with a
              fascination for how things work, which evolved into a career focused
              on creating meaningful digital experiences.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              I specialize in modern frontend and backend technologies, always
              striving to write clean, maintainable code that solves real-world
              problems.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Skills & Expertise
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 mb-2 px-3 py-1 rounded-full">
                JavaScript/TypeScript
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 mb-2 px-3 py-1 rounded-full">
                React/Next.js
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 mb-2 px-3 py-1 rounded-full">
                Node.js
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 mb-2 px-3 py-1 rounded-full">
                Python
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 mb-2 px-3 py-1 rounded-full">
                FastAPI
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 mb-2 px-3 py-1 rounded-full">
                Tailwind CSS
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 mb-2 px-3 py-1 rounded-full">
                MongoDB
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 mb-2 px-3 py-1 rounded-full">
                PostgreSQL
              </span>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  );
}