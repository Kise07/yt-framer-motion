"use client";
import { useAnimate, motion } from "motion/react";
import { useEffect } from "react";

export const AnimatedText = () => {
  const [scope, animate] = useAnimate();
  const text =
    "Welcome to F*** C***. The first rule of F*** C*** is that you don't talk about F*** C***. The second rule of F*** C*** is that you don't talk about F*** C***.";

  useEffect(() => {
    startAnimating();
  }, []);

  const startAnimating = () => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 1,
        ease: "easeInOut",
      },
    );
  };

  return (
    <div
      ref={scope}
      className="max-w-4xl mx-auto font-bold text-4xl text-white"
    >
      <motion.span
        style={{
          opacity: 0,
        }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </div>
  );
};
