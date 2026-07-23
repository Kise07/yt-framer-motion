import Marquee from "react-fast-marquee";
import { SectionHeading } from "./section-heading";
export const Testimonials = () => {
  const data = [
    {
      quote: `Kise is so talented and creative. He has a great eye for design and is always willing to go the extra mile to make sure his work is perfect. I highly recommend him!`,
      name: "Elon Musk",
      avatar:
        "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: `Working with Kise was an absolute pleasure. He delivered our e-commerce platform ahead of schedule and the conversion rate increased by 35% after launch. His technical skills are outstanding.`,
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    },
    {
      quote: `Kise transformed our outdated website into a modern, fast, and beautiful platform. His attention to detail and understanding of UX principles is remarkable. Will definitely work with him again.`,
      name: "Michael Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    },
    {
      quote: `The best developer I've ever worked with. Kise not only writes clean code but also thinks critically about the product. He suggested improvements we hadn't even considered. Truly exceptional.`,
      name: "Emily Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop",
    },
    {
      quote: `Kise built our company's internal dashboard from scratch. It's intuitive, fast, and our team loves using it. His ability to understand complex requirements and deliver simple solutions is impressive.`,
      name: "David Kim",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    },
  ];
  return (
    <div className="py-10">
      <SectionHeading className="pb-4" delay={0.8}>
        People love my work
      </SectionHeading>
      <div className="flex [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <Marquee speed={20} pauseOnHover className="py-4">
          {data.map((item, idx) => (
            <TestimonialCard key={`testimonials-${idx}`} {...item} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

const TestimonialCard = ({
  quote,
  name,
  avatar,
}: {
  quote: string;
  name: string;
  avatar: string;
}) => {
  return (
    <div className="shadow-aceternity mx-4 flex h-59 w-full max-w-60 flex-col justify-between gap-4 rounded-xl p-4 transition duration-300 hover:shadow-md">
      <p className="text-sm text-neutral-700">{quote}</p>
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="size-4 rounded-full object-cover"
        />
        <p className="text-sm text-neutral-500">{name}</p>
      </div>
    </div>
  );
};
