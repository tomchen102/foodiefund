import { LiteralUnion } from "react-hook-form";

import { cn } from "@/lib/utils";

interface BadgesProps {
  text: LiteralUnion<"募資中" | "台北" | "訂閱式", string>;
  className?: string;
}
const Badges = ({ text, className }: BadgesProps) => {
  return (
    <span
      className={cn(
        `mr-3 inline-block rounded-sm px-2 py-1 font-bold`,
        text === "訂閱式" ? "bg-primary-light text-primary-dark" : "bg-secondary-light text-secondary",
        className
      )}
    >
      {text}
    </span>
  );
};

export default Badges;
