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
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <div className="prose mx-auto">{content}</div>
      </Container>
    </div>
  );
}
