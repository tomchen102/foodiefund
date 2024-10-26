import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const News = () => {
  return (
    <ul>
      <li className="pb-5">
        <div className="border p-6">
          <h2 className="mb-2 text-lg font-bold md:text-2xl">
            <Link scroll={true} href="news/detail" className="hover:text-tertiary">
              計畫更新:追加福利!【喵喵咖啡館】群眾募資活動將延長至9月1日!
            </Link>
          </h2>
          <div className="mb-2">
            <span className="text-gray">發佈日期：2024年10月11日 14:57</span>
          </div>
          <div className="mb-2">
            <p>
              摘要: 感謝大家的熱烈支持
              🎉【喵喵咖啡館】的群眾募資活動反應熱烈,目前已突破100萬支持金額!為了回饋大家的熱情,我們決定將募資活動延長至9月1日,讓更多咖啡愛好者有機會參與進來!☕️
              詳細的福利與更新內容請繼續閱讀!
            </p>
          </div>
          <div className="ml-[-12px]">
            <Link scroll={true} href="news/detail" className={buttonVariants({ variant: "link" })}>
              閱讀更多
            </Link>
          </div>
        </div>
      </li>
      <li className="pb-5">
        <div className="border p-6">
          <h2 className="mb-2 text-lg font-bold md:text-2xl">
            <Link scroll={true} href="news/detail" className="hover:text-tertiary">
              追加福利！【喵喵咖啡館】群眾募資活動將延長至9月1日！
            </Link>
          </h2>
          <div className="mb-2">
            <span className="text-gray">發佈日期：2024年10月11日 14:57</span>
          </div>
          <div className="mb-2">
            <p>
              感謝大家對【喵喵咖啡館】的熱烈支持，現已決定將群眾募資活動延長至9月1日！我們希望能夠讓更多咖啡愛好者參與這個充滿愛與咖啡香的夢想項目。在延長期間，所有支持者都將獲得專屬的咖啡優惠券，讓您在未來的咖啡館內享受美味的咖啡和愜意的時光。📅
              時間有限，快來支持我們吧！
            </p>
          </div>
          <div className="ml-[-12px]">
            <Link scroll={true} href="news/detail" className={buttonVariants({ variant: "link" })}>
              閱讀更多
            </Link>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default News;
