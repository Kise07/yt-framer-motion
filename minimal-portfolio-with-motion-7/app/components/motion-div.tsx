"use client";

import { MotionProps, motion } from "motion/react";

export const MotionDiv = (
  props: MotionProps & { children?: React.ReactNode },
) => {
  return <motion.div {...props} />;
};
