import { cn } from "@/lib/utils";
import { ProviderProps } from "@/types/ProviderType";

const SectionPadding = ({ children, className }: ProviderProps) => {
  return <section className={cn("pb-8 pt-6 lg:mt-[100px] lg:gap-6 lg:pb-[120px]", className)}>{children}</section>;
};

export default SectionPadding;
