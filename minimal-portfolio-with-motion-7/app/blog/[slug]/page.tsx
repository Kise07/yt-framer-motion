import { Container } from "@/app/components/container";
import { getSingleBlog, getBlogFrontmatterBySlug } from "@/app/utils/mdx";
import { Metadata } from "next";
import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const frontmatter = await getBlogFrontmatterBySlug(slug);

  if (!frontmatter) {
    return { title: "Blog not found" };
  }

  return {
    title: frontmatter.title + " - Sebas",
    description: frontmatter.description,
  };
}

export default async function SingleBlogPage({ params }: Props) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blog");
  }

  const { content, frontmatter } = blog;

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-10 md:pt-20 md:pb-10">
        <img
          src={frontmatter.image}
          alt={frontmatter.title}
          className="mx-auto mb-20 max-h-96 w-full max-w-2xl rounded-2xl shadow-xl"
        />
        <div className="prose mx-auto">{content}</div>
      </Container>
    </div>
  );
}
