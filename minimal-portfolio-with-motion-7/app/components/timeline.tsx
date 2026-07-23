"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";
import { IconCircleCheckFilled } from "@tabler/icons-react";

type Data = {
  title: string;
  content: {
    title: string;
    description?: string;
  }[];
};

export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  const data: Data[] = [
    {
      title: "2024",
      content: [
        {
          title: "Software Engineer",
          description:
            "Tech Corp • Building scalable web applications with React, Next.js, and TypeScript.",
        },
        {
          title: "Lead Frontend Developer",
          description:
            "Freelance • Led a team of 3 developers to deliver a SaaS dashboard for a fintech startup.",
        },
      ],
    },
    {
      title: "2023",
      content: [
        {
          title: "Full Stack Developer",
          description:
            "TechCorp Inc • Developed REST APIs and integrated third-party services like Stripe and AWS.",
        },
        {
          title: "Open Source Contributor",
          description:
            "GitHub • Contributed to popular open source projects including Next.js and Tailwind CSS.",
        },
      ],
    },
    {
      title: "2022",
      content: [
        {
          title: "Frontend Developer",
          description:
            "StartupXYZ • Developed responsive UI components and improved page load performance by 40%.",
        },
      ],
    },
    {
      title: "2021",
      content: [
        {
          title: "UI/UX Designer",
          description:
            "Design Studio • Designed intuitive user interfaces and created design systems for client projects.",
        },
        {
          title: "Freelance Web Developer",
          description:
            "Self-employed • Built 10+ websites for small businesses using modern web technologies.",
        },
      ],
    },
    {
      title: "2020",
      content: [
        {
          title: "Web Development Intern",
          description:
            "Digital Agency • Assisted in building marketing websites and learned modern web technologies.",
        },
        {
          title: "Computer Science Degree",
          description:
            "University of Technology • Graduated with honors, focusing on software engineering and human-computer interaction.",
        },
      ],
    },
    {
      title: "2019",
      content: [
        {
          title: "Teaching Assistant",
          description:
            "University of Technology • Mentored students in introductory programming courses.",
        },
      ],
    },
  ];

  return (
    <div ref={ref} className="py-10">
      {data.map((year, index) => (
        <div key={year.title} className="mb-4">
          <motion.h2
            initial={{
              filter: `blur(10px)`,
              opacity: 0,
            }}
            animate={{
              filter: isInView ? `blur(0px)` : `blur(10px)`,
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.1 * index,
            }}
            className="shadow-aceternity mb-2 w-fit rounded-md px-2 py-0.5 font-bold text-black"
          >
            {year.title}
          </motion.h2>

          <div className="flex flex-col gap-4">
            {year.content.map((item, idx) => (
              <div key={item.title} className="pl-4">
                <Step isInView={isInView} idx={idx}>
                  <motion.h3
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.2 * idx,
                    }}
                    className="text-neutral-600"
                  >
                    {item.title}
                  </motion.h3>
                  {item.description && (
                    <motion.p
                      initial={{
                        opacity: 0,
                        y: -10,
                      }}
                      animate={{
                        opacity: isInView ? 1 : 0,
                        y: isInView ? 0 : -10,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 0.3 * idx,
                      }}
                      className="pt-1 text-sm text-neutral-400"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </Step>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Step = ({
  className,
  children,
  isInView,
  idx,
}: {
  className?: string;
  children: React.ReactNode;
  isInView: boolean;
  idx: number;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : -10,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.2 * idx,
      }}
      className={cn("flex items-start gap-2", className)}
    >
      <IconCircleCheckFilled className="mt-1 h-4 w-4 text-neutral-500" />
      <div className="flex flex-col">{children}</div>
    </motion.div>
  );
};
