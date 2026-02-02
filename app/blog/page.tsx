import Link from "next/link";

const posts = [
  {
    slug: "why-nextjs",
    title: "Why I Love Next.js",
    description: "My experience learning Next.js",
    date: "2026-02-01",
  },
  {
    slug: "tailwind-tips",
    title: "Tailwind CSS Mastery",
    description: "How to build faster with utility classes",
    date: "2026-02-02",
  },
];

export default function BlogPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-black uppercase tracking-tight mb-20">
        Archive
      </h1>

      <div className="space-y-16">
        {posts.map((post) => (
          <article key={post.slug} className="border-b pb-8">
            <p className="text-xs opacity-40 mb-2">{post.date}</p>

            <h2 className="text-3xl font-bold mb-4">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:underline"
              >
                {post.title}
              </Link>
            </h2>

            <p className="opacity-60 max-w-xl">
              {post.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
