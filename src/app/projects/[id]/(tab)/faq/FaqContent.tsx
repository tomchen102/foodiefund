"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useGetUserFaq } from "@/hooks/useUserFaq";

const FaqContent = () => {
  const { data, isLoading, isError } = useGetUserFaq("frontend");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error: Failed to load data.</div>;
  }

  return (
    <Accordion type="single" collapsible className="w-full">
      {data.map((item) => (
        <AccordionItem key={item.id} className="mb-5 border-l border-r border-t p-6" value={item.id}>
          <span className="mb-1 block text-gray">更新於 {item.updatedAt}</span>
          <AccordionTrigger className="hover:text-primary-dark hover:no-underline md:text-2xl">
            {item.questions}
          </AccordionTrigger>
          <AccordionContent className="md:text-xl">{item.answers}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqContent;
