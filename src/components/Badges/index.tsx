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
        `mr-3 inline-block rounded border-transparent px-2 py-1 text-sm font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2`,
        text === "訂閱式"
          ? "bg-[#40E0D0] text-tertiary hover:bg-[#40E0D0]/80 hover:text-tertiary/80"
          : "bg-[#FFE5D4] text-secondary hover:bg-[#FFE5D4]/80 hover:text-secondary/80",
        className
      )}
    >
      {text}
    </span>
  );
};

export default Badges;
