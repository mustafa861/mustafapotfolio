import Link from "next/link";

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 13",
    excerpt: "Learn how to build modern web applications with the latest Next.js features including the App Router and Server Components.",
    date: "March 10, 2026",
    slug: "getting-started-with-nextjs-13",
    image: "/blog/nextjs13.jpg",
    tags: ["Next.js", "React", "Web Development"],
  },
  {
    id: 2,
    title: "Building RESTful APIs with FastAPI",
    excerpt: "A comprehensive guide to creating efficient and scalable APIs using FastAPI and Python.",
    date: "February 25, 2026",
    slug: "building-restful-apis-with-fastapi",
    image: "/blog/fastapi.jpg",
    tags: ["Python", "FastAPI", "API Development"],
  },
  {
    id: 3,
    title: "Tailwind CSS: From Basics to Advanced",
    excerpt: "Master Tailwind CSS for rapid UI development with practical examples and best practices.",
    date: "January 15, 2026",
    slug: "tailwind-css-basics-to-advanced",
    image: "/blog/tailwindcss.jpg",
    tags: ["CSS", "Tailwind", "Frontend"],
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Blog
        </h1>
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-800 text-xs font-medium me-1 mb-1 px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="/blog"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Posts
          </a>
        </div>
      </div>
    </main>
  );
}