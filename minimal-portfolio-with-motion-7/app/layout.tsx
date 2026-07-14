import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";

const inter = Inter({ weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Freelancer Portfolio website template - Aceternity UI Pro",
  description:
    "A perfect portfolio website template that showcase your skills, minimal and smooth microinteractions, perfect for developers and designers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} bg-neutral-100 antialiased dark:bg-neutral-700`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
