"use client";

import { ProviderProps } from "@/types/ProviderType";
import { motion } from "framer-motion";

export default function AnimatedContainer({ children, className }: ProviderProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
