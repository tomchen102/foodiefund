import { LiteralUnion } from "react-hook-form";

import { cn } from "@/lib/utils";

interface BadgesProps {
  text: LiteralUnion<
    "募資中" | "台北" | "訂閱式" | "審核中" | "咖啡廳" | "付款成功" | "退款中" | "退款成功" | "未讀",
    string
  >;
  className?: string;
}

const badgeStyles: Record<string, string> = {
  募資中: "bg-secondary-light text-secondary",
  台北: "bg-secondary-light text-secondary",
  訂閱式: "bg-primary-light text-primary-dark",
  審核中: "bg-[#F8D4D4] text-[#DC2626]",
  咖啡廳: "bg-secondary-light text-secondary",
  付款成功: "bg-[#e6f4f0] text-[#059669] border-[#82CBB4] border",
  退款中: "bg-[#FBE9E9] text-[#DC2626] border-[#F8D4D4] border",
  退款成功: "bg-[#E6F3F9] text-[#0284C7] border-[#80C1E3] border",
  未讀: "bg-[#FBE9E9] text-[#DC2626] border-[#F8D4D4] border",
};

const Badges = ({ text, className }: BadgesProps) => {
  return (
    <span className={cn(`mr-3 inline-block rounded-sm px-2 py-1 text-xs`, badgeStyles[text], className)}>{text}</span>
  );
};

export default Badges;
