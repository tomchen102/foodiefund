import { LiteralUnion } from "react-hook-form";

import { cn } from "@/lib/utils";

interface BadgesProps {
  text: LiteralUnion<"募資中" | "台北" | "訂閱式" | "審核中", string>;
  className?: string;
}

const badgeStyles: Record<string, string> = {
  募資中: "bg-secondary-light text-secondary",
  台北: "bg-secondary-light text-secondary",
  訂閱式: "bg-primary-light text-primary-dark",
  審核中: "bg-[#F8D4D4] text-[#DC2626]",
};

const Badges = ({ text, className }: BadgesProps) => {
  return (
    <span className={cn(`mr-3 inline-block rounded-sm px-2 py-1 text-xs`, badgeStyles[text], className)}>{text}</span>
  );
};

export default Badges;
