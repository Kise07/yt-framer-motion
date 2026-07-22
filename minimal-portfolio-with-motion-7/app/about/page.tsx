import { Container } from "@/app/components/container";
import { Collage } from "../components/collage";
import { Timeline } from "../components/timeline";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          About Me
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
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I love to travel and explore new cultures, which often inspires my
          design. I&apos;m always looking for new challenges and opportunities
          to grow as a developer and designer. If you&apos;d like to collaborate
          or just want to say hi, feel free to reach out!
        </p>
        <Collage />
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          Here is the timeline of my journey so far, highlighting the key
          milestones and experiences that have shaped me into the professional I
          am today.
        </p>
        <Timeline />
      </Container>
    </div>
  );
}
