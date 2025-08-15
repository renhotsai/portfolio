"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionWrapProps { 
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

const MotionWrap = ({ children, className, delay = 0, as = 'div' }: MotionWrapProps) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const MotionComponent = motion[as];

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1, margin: '0px 0px -100px 0px' }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      variants={variants}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};

export default MotionWrap;
