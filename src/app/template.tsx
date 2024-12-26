"use client";

import AnimatedContainer from "@/components/AnimatedContainer";
import { ProviderProps } from "@/types/ProviderType";

const Template = ({ children, className }: ProviderProps) => {
  return <AnimatedContainer className={className}>{children}</AnimatedContainer>;
};

export default Template;
