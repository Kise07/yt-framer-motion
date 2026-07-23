import { Container } from "@/app/components/container";
import { LandingBlogs } from "@/app/components/landing-blogs";
import { Projects } from "@/app/components/projects";
import { Heading } from "@/app/components/heading";
import { Subheading } from "@/app/components/subheading";
import { projects } from "@/app/constants/projects";
import { Testimonials } from "@/app/components/testimonials";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-10 md:pt-20 md:pb-10">
        <Heading>Tyler Durden</Heading>
        <Subheading>
          I&apos;m a software engineer and designer with a passion for creating
          beautiful and functional user experiences. I specialize in front-end
          development, UI/UX design, and web development.
        </Subheading>
        <Projects projects={projects.slice(0, 3)} />
        <LandingBlogs />
        <Testimonials />
      </Container>
    </div>
  );
}
