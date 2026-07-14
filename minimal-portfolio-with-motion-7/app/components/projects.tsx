"use client";
import Image from "next/image";
import { motion } from "motion/react";

export const Projects = () => {
  const projects = [
    {
      title: "Macbook Mockup",
      src: "https://images.unsplash.com/photo-1782297040435-349d43efbf98?q=80&w=1642&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Fey.com Macbook Scroll",
      href: "#",
    },
    {
      title: "Faceless",
      src: "https://images.unsplash.com/photo-1618385796573-57eedca3a522?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Fey.com Macbook Scroll",
      href: "#",
    },
    {
      title: "Finger typing",
      src: "https://plus.unsplash.com/premium_photo-1733514433350-464cf01ca828?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Fey.com Macbook Scroll",
      href: "#",
    },
    {
      title: "Touch tools",
      src: "https://plus.unsplash.com/premium_photo-1733514433422-413d9a3db3e0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Fey.com Macbook Scroll",
      href: "#",
    },
  ];
  return (
    <div className="py-10">
      <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
        I love building web apps and products that can impact millions of
        people.
      </p>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
              ease: "easeInOut",
            }}
            key={project.title}
            className="group relative mb-4"
          >
            <Image
              src={project.src}
              alt={project.title}
              height={300}
              width={300}
              className="h-72 w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
            />
            <h2 className="z-20 mt-2 font-bold tracking-tight text-neutral-500 dark:text-neutral-400">
              {project.title}
            </h2>
            <p className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-400">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
