import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Faq = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem className="border-l border-r border-t p-6 md:mb-5" value="item-1">
        <span className="mb-1 block text-gray">更新於 2024/08/10 13:53</span>
        <AccordionTrigger className="pt-0 hover:text-tertiary hover:no-underline md:text-2xl">
          Q: 什麼是群眾募資餐廳?
        </AccordionTrigger>
        <AccordionContent className="md:text-xl">
          A:
          群眾募資餐廳是一個通過社區和支持者共同出資建立的餐廳項目。這種模式允許餐廳創始人與喜愛美食和獨特餐飲體驗的投資者合作,將他們的願景變為現實。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="border-l border-r border-t p-6 md:mb-5" value="item-2">
        <span className="mb-1 block text-gray">更新於 2024/08/10 13:53</span>
        <AccordionTrigger className="hover:text-tertiary hover:no-underline md:text-2xl">
          Q: 我需要投資多少？
        </AccordionTrigger>
        <AccordionContent className="md:text-xl">
          A:
          投資金額將根據您的意願和計劃的需求來確定。我們提供多種投資選項，從小額投資到較大金額的參與，旨在讓每位投資者都能找到適合自己的方案。詳細金額和對應的投資回報可以在我們的募資頁面上查看。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="border-l border-r border-t p-6 md:mb-5" value="item-3">
        <span className="mb-1 block text-gray">更新於 2024/08/10 13:53</span>
        <AccordionTrigger className="hover:text-tertiary hover:no-underline md:text-2xl">
          Q: 我的投資將如何使用？
        </AccordionTrigger>
        <AccordionContent className="md:text-xl">
          A:
          您的投資將用於餐廳的裝修、設備購置、食材供應鏈的建立以及員工薪酬等方面。我們的目標是打造一個高品質的就餐環境，並提供頂級的美食體驗。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="border-l border-r border-t p-6 md:mb-5" value="item-4">
        <span className="mb-1 block text-gray">更新於 2024/08/10 13:53</span>
        <AccordionTrigger className="hover:text-tertiary hover:no-underline md:text-2xl">
          Q: 投資回報是什麼？
        </AccordionTrigger>
        <AccordionContent className="md:text-xl">
          A:
          作為投資者，您將根據您的投資金額獲得餐廳盈利的分紅，並享有餐廳優先訂位權。此外，您還可能獲得其他獨家福利，如專屬菜單品嚐、餐廳特別活動的邀請等。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="border-l border-r border-t p-6 md:mb-5" value="item-5">
        <span className="mb-1 block text-gray">更新於 2024/08/10 13:53</span>
        <AccordionTrigger className="hover:text-tertiary hover:no-underline md:text-2xl">
          Q: 如果募資未達標怎麼辦？
        </AccordionTrigger>
        <AccordionContent className="md:text-xl">
          A:
          如果募資未能達到目標，我們將退還您的全部投資款項。您的資金安全是我們的首要考量，我們會確保所有投資者都不會因此承擔任何損失。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="border-l border-r border-t p-6 md:mb-5" value="item-6">
        <span className="mb-1 block text-gray">更新於 2024/08/10 13:53</span>
        <AccordionTrigger className="hover:text-tertiary hover:no-underline md:text-2xl">
          Q: 餐廳何時開業？
        </AccordionTrigger>
        <AccordionContent className="md:text-xl">
          A:
          餐廳的開業時間將取決於募資進度和裝修施工進展。目前我們預計開業時間為募資完成後的6至8個月。具體日期會隨著項目的推進而確定。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="border-l border-r border-t p-6 md:mb-5" value="item-7">
        <span className="mb-1 block text-gray">更新於 2024/08/10 13:53</span>
        <AccordionTrigger className="hover:text-tertiary hover:no-underline md:text-2xl">
          Q: 我如何參與餐廳的決策？
        </AccordionTrigger>
        <AccordionContent className="md:text-xl">
          A:
          作為投資者，您將有機會參與餐廳的重大決策，例如菜單選擇、活動策劃等。我們會定期舉行投資者會議，確保您能夠對餐廳的未來發展方向提供建議和意見。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="border-l border-r border-t p-6 md:mb-5" value="item-8">
        <span className="mb-1 block text-gray">更新於 2024/08/10 13:53</span>
        <AccordionTrigger className="hover:text-tertiary hover:no-underline md:text-2xl">
          Q: 我如何了解最新進展？
        </AccordionTrigger>
        <AccordionContent className="md:text-xl">
          A:
          我們將通過電子郵件、投資者專屬網站和定期舉行的投資者會議，向您更新餐廳項目的最新進展。您可以隨時查詢募資狀況、施工進展和開業準備情況。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="border-l border-r border-t p-6 md:mb-5" value="item-9">
        <span className="mb-1 block text-gray">更新於 2024/08/10 13:53</span>
        <AccordionTrigger className="hover:text-tertiary hover:no-underline md:text-2xl">
          Q: 群眾募資餐廳的風險是什麼？
        </AccordionTrigger>
        <AccordionContent className="md:text-xl">
          A:
          群眾募資餐廳與其他投資項目一樣，存在一定風險，包括市場需求變化、經營管理挑戰和餐飲行業的競爭等。我們建議您在投資前充分考慮這些風險，並與專業顧問進行諮詢。
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Faq;
