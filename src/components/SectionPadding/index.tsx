import { cn } from "@/lib/utils";
import { SectionPaddingProps } from "@/types/ProviderType";

const SectionPadding = ({ children, className, container, adminContainer }: SectionPaddingProps) => {
  return (
    <section
      className={cn(
        "pb-8 pt-6 lg:gap-6 lg:pb-[120px] lg:pt-[100px]",
        container ? "container px-3 xl:px-0" : "",
        adminContainer ? "lg:py-10" : "",
        className
      )}
    >
      {children}
    </section>
  );
};

export default SectionPadding;
