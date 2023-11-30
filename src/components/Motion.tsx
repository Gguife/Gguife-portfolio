import { main } from "../lib/Variants";
import { motion } from "framer-motion";
import React from "react";

interface MotionProps {
  children: React.ReactNode;
  className?: string;
  id: string;
}

const Motion = ({ children, className, id }: MotionProps) => {
  const shouldUseMotion = window.innerWidth > 500;

  return shouldUseMotion ? (
    <motion.div
      id={id}
      variants={main}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  ) : (
    <div id={id} className={className}>
      {children}
    </div>
  );
};

export default Motion;
