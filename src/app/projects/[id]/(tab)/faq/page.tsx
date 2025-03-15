import { userFaqApi } from "@/api/services/userFaq";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UserFaqListArrayResponseSchema } from "@/schema/UserFaqSchema";
import { safeParseResponse } from "@/utils/zodUtils";

export const revalidate = false;

const getData = async (projectId: string) => {
  const response = await userFaqApi.getAll("frontend", projectId);
  const data = safeParseResponse(UserFaqListArrayResponseSchema, response.data);
  return {
    data,
  };
};

const Faq = async () => {
  const projectId = "66fb66d32bebc04b1d517eb0";
  const { data } = await getData(projectId);
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

export default Faq;
