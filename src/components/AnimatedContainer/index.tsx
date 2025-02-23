"use client";

import { motion } from "framer-motion";

import { ChildrenProps } from "@/types/ProviderType";

const AnimatedContainer = ({ children, ...props }: ChildrenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContainer;
