"use client";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import Rewards from "../@Rewards/page";

const RewardsBar = () => {
  return (
    <div className="container w-full">
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="mb-8 bg-gray-100">
          <p className="py-2 text-center">左右捲動看看更多選項</p>
        </div>
        <Rewards />
        <ScrollBar orientation="horizontal" className="hover:cursor-pointer" />
      </ScrollArea>
    </div>
  );
};

export default RewardsBar;
