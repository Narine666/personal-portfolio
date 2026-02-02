import { notFound } from "next/navigation";

const posts = [
  {
    slug: "why-nextjs",
    title: "Why I Love Next.js",
    content: "This is my full experience with Next.js...",
    date: "2026-02-01",
  },
];

type Props = {
  params: {
    slug: string;
  };
};

export default function BlogPost({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound(); // 🔥 404
  }

  return (
    <article className="max-w-3xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-6">{post.date}</p>
      <p className="text-lg leading-relaxed">{post.content}</p>
    </article>
  );
}
