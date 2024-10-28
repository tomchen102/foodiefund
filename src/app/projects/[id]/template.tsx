"use client";

import AnimatedContainer from "@/components/AnimatedContainer";
import { ProviderProps } from "@/types/ProviderType";

export default function Template({ children, className }: ProviderProps) {
  return <AnimatedContainer className={className}>{children}</AnimatedContainer>;
}
