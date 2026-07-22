import { Container } from "@/app/components/container";
import { Heading } from "@/app/components/heading";
import { Subheading } from "@/app/components/subheading";
import { ContactForm } from "../components/contact-form";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-10 md:pt-20 md:pb-10">
        <Heading>Contact Me</Heading>
        <Subheading>
          I&apos;m open to relocate and looking for new opportunities. If
          you&apos;re interested in working together or just want to say hi,
          feel free to reach out!
        </Subheading>
        <ContactForm />
      </Container>
    </div>
  );
}
