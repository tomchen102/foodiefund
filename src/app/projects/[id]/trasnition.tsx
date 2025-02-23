"use client";

import AnimatedContainer from "@/components/AnimatedContainer";
import { ChildrenProps } from "@/types/ProviderType";

const Transition = ({ children, className }: ChildrenProps) => {
  return <AnimatedContainer className={className}>{children}</AnimatedContainer>;
};

export default Transition;
