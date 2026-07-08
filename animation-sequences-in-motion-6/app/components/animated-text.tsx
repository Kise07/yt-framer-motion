"use client";
import { useAnimate, motion, stagger } from "motion/react";
import { useEffect } from "react";

export const AnimatedText = () => {
  const [scope, animate] = useAnimate();
  const text =
    "Welcome to F*** C***. The first rule of F*** C*** is that you don't talk about F*** C***. The second rule of F*** C*** is that you don't talk about F*** C***.";

  // useEffect(() => {
  //   startAnimating();
  // }, []);

  const startAnimating = () => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 0.5,
        ease: "easeInOut",
        delay: stagger(0.02),
      },
    );
  };

  return (
    <div
      ref={scope}
      className="max-w-2xl mx-auto font-bold text-4xl text-white"
    >
      <button
        onClick={startAnimating}
        className="bg-neutral-800 px-4 py-2 rounded-md cursor-pointer active:scale-110 transition dureation-200"
      >
        What is FC?
      </button>
      {text.split(" ").map((word, index) => (
        <motion.span
          style={{
            opacity: 0,
            filter: "blur(10px)",
            y: 10,
          }}
          key={word + index}
          className="inline-block"
        >
          {word} &nbsp;
        </motion.span>
      ))}
    </div>
  );
};
