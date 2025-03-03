"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { useState } from "react";

import { Icons } from "@/components/Icons";

import { FaqItemProps } from "../../type";

const FaqItem = ({ item }: FaqItemProps) => {
  const [open, setOpen] = useState("");

  return (
    <Accordion.Root type="single" value={open} onValueChange={setOpen} collapsible className="rounded bg-white">
      <Accordion.Item value="item-1">
        <Accordion.Trigger className="flex w-full items-center justify-between px-10 py-6">
          <div className="flex gap-8">
            <div className="text-3xl font-bold text-primary-dark">Q</div>
            <div className="text-lg font-bold text-primary-dark">{item.question}</div>
          </div>
          {open === "item-1" ? (
            <Icons.CollapseFill className="text-primary-hover" />
          ) : (
            <Icons.ExpendFill className="text-primary-hover" />
          )}
        </Accordion.Trigger>
        <Accordion.Content className="mx-10 overflow-hidden border-t py-6 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          <div className="flex gap-8">
            <div className="text-3xl font-bold text-primary-hover">A</div>
            <div>
              <div>{item.answer}</div>
              <div className="text-gray-400">更新於{item.timestamp}</div>
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default FaqItem;
