"use client";

import { ProviderProps } from "@/types/ProviderType";
import { motion } from "framer-motion";

const AnimatedContainer = ({ children, ...props }: ProviderProps) => {
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
