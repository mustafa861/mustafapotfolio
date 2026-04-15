export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with product catalog, shopping cart, and payment integration.",
      image: "/projects/ecommerce.jpg",
      tags: ["React", "Node.js", "MongoDB", "Redux"],
      url: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and user authentication.",
      image: "/projects/taskmanager.jpg",
      tags: ["Next.js", "Firebase", "TypeScript"],
      url: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current conditions and forecasts.",
      image: "/projects/weather.jpg",
      tags: ["Vue.js", "API Integration", "CSS Grid"],
      url: "#",
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A custom blogging platform with markdown support and SEO optimization.",
      image: "/projects/blogplatform.jpg",
      tags: ["Python", "FastAPI", "PostgreSQL"],
      url: "#",
    },
  ];

  return (
    <main className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
          My Projects
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-800 text-xs font-medium me-1 mb-1 px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}