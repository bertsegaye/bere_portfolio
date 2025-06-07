import React from "react";

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  url: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding React Hooks",
    author: "John Doe",
    date: "June 1, 2025",
    excerpt:
      "React Hooks provide a powerful way to use state and other React features without writing a class...",
    url: "#",
  },
  {
    id: 2,
    title: "Getting Started with Tailwind CSS",
    author: "Jane Smith",
    date: "May 28, 2025",
    excerpt:
      "Tailwind CSS is a utility-first CSS framework packed with classes that can be composed to build any design...",
    url: "#",
  },
  {
    id: 3,
    title: "TypeScript in React Projects",
    author: "Alice Johnson",
    date: "May 20, 2025",
    excerpt:
      "Using TypeScript with React can help you catch bugs early and improve your development experience...",
    url: "#",
  },
];

const BlogPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Blog</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Latest news, tutorials, and updates from our team.
        </p>
      </header>

      <main className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                <a href={post.url}>{post.title}</a>
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                By <span className="font-medium">{post.author}</span> ·{" "}
                {post.date}
              </p>
              <p className="text-gray-700">{post.excerpt}</p>
            </div>
            <div className="mt-6">
              <a
                href={post.url}
                className="inline-block text-blue-600 hover:text-blue-800 font-medium"
              >
                Read More &rarr;
              </a>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
};

export default BlogPage;
