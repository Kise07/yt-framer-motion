import { Container } from "@/app/components/container";
import { Projects } from "@/app/components/projects";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          Projects
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I&apos;m Sebas, a software engineer and designer with a passion for
          creating beautiful and functional user experiences. I specialize in
          front-end development, UI/UX design, and web development. With a keen
          eye for detail and a love for clean, maintainable code, I build
          applications that are not only visually appealing but also performant
          and accessible. When I&apos;m not coding, you&apos;ll find me
          exploring new design trends, experimenting with animation, or diving
          into the latest web technologies.
        </p>
        <Projects />
      </Container>
    </div>
  );
}
