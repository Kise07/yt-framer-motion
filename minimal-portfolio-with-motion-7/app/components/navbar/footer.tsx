import Link from "next/link";
import { Container } from "../container";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

export const Footer = () => {
  return (
    <Container className="flex justify-between border-t border-neutral-100 p-3">
      <p className="text-xs text-neutral-500">Build with love by Sebas</p>
      <div className="flex items-center justify-center gap-4">
        <Link href="https://x.com/kise07">
          <IconBrandX className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="https://linkedin.com/in/kise07">
          <IconBrandLinkedin className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="https://github.com/kise07">
          <IconBrandGithub className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
      </div>
    </Container>
  );
};
