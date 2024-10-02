import { cn } from "@/lib/utils";
import { LiteralUnion } from "react-hook-form";

interface BadgesProps {
  text: LiteralUnion<"募資中" | "台北" | "訂閱式", string>;
  className?: string;
}
const Badges = ({ text, className }: BadgesProps) => {
  return (
    <span
      className={cn(
        `mr-3 inline-block rounded px-2 py-1 text-sm font-bold`,
        text === "訂閱式" ? "bg-[#40E0D0] text-[#0F514E]" : "bg-[#FFE5D4] text-secondary",
        className
      )}
    >
      {text}
    </span>
  );
};

export default Badges;
