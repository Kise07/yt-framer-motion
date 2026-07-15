import { Container } from "@/app/components/container";
import { Metadata } from "next";
import { getBlogs } from "../utils/mdx";
import { Link } from "next-view-transitions";

export const metadata: Metadata = {
  title: "All blogs - Sebas",
  description:
    "All my general wisdom and thoughts about software engineering, design, and life.",
};

export default async function blogspage() {
  const allBlogs = await getBlogs();

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          All blogs
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I&apos;m a software engineer and designer with a passion for creating
          beautiful and functional user experiences. I specialize in front-end
          development, UI/UX design, and web development.
        </p>
        <div className="flex flex-col gap-4 py-10">
          {allBlogs.map((blog, idx) => (
            <Link key={idx} href={`/blog/${blog.slug}`}>
              <div className="flex items-center justify-between">
                <h2 className="text-primary text-base font-bold tracking-tight">
                  {blog.title}
                </h2>
                <p className="text-secondary text-sm md:text-sm">
                  {new Date(blog.date).toLocaleDateString("en-us", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
              <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm">
                {truncate(blog.description || "", 150)}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
