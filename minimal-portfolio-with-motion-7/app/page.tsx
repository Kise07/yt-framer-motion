import { Container } from "@/app/components/container";
import { LandingBlogs } from "@/app/components/landing-blogs";
import { Projects } from "@/app/components/projects";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          Sebas
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I&apos;m a software engineer and designer with a passion for creating
          beautiful and functional user experiences. I specialize in front-end
          development, UI/UX design, and web development.
        </p>
        <Projects />
        <LandingBlogs />
      </Container>
    </div>
  );
}
