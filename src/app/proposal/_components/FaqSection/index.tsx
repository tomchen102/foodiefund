import React from "react";

import { FaqData } from "../../type";

import FaqItem from "./FaqItem";

const faqItems: FaqData[] = [
  {
    question: "我的投資將如何使用？",
    answer:
      "您的投資將用於餐廳的裝修、設備購置、食材供應鏈的建立以及員工薪酬等方面。我們的目標是打造一個高品質的就餐環境，並提供頂級的美食體驗。",
    timestamp: "2024/08/10 13:53",
  },
  {
    question: "投資回報是什麼？",
    answer:
      "作為投資者，您將根據您的投資金額獲得餐廳盈利的分紅，並享有餐廳優先訂位權。此外，您還可以獲得其他獨家福利，如專屬菜單品嚐、餐廳特別活動的邀請等。",
    timestamp: "2024/08/10 13:53",
  },
  {
    question: "如果募資未達標怎麼辦？",
    answer:
      "如果募資未能達到目標，我們將退還您的全部投資款項。您的資金安全是我們的首要考量，我們會確保所有投資者都不會因此承擔任何損失。",
    timestamp: "2024/08/10 13:53",
  },
  {
    question: "餐廳何時開業？",
    answer:
      "餐廳的開業時間將取決於募資進度和裝修施工進展。目前我們預計開業時間為募資完成後的 6 至 8 個月。具體日期會隨著項目的推進而確定。",
    timestamp: "2024/08/10 13:53",
  },
  {
    question: "我如何參與餐廳的決策？",
    answer:
      "作為投資者，您將有機會參與餐廳的重大決策，例如菜單選擇、活動策劃等。我們會定期舉行投資者會議，確保您能夠對餐廳的未來發展方向提供建議和意見。",
    timestamp: "2024/08/10 13:53",
  },
];

const FaqSection = () => {
  return (
    <section className="bg-primary-light">
      <div className="container flex flex-col gap-5 py-10 md:gap-10 md:py-20">
        <div className="text-center text-xl font-bold md:text-4xl">問與答</div>
        <div className="mx-3 flex flex-col gap-6 md:mx-0">
          {faqItems.map((item) => (
            <FaqItem key={item.question} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
