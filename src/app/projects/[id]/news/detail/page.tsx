import Link from "next/link";

const detail = () => {
  return (
    <div className="pb-5">
      <div className="border p-6">
        <h2 className="mb-2 text-lg font-bold md:text-2xl">
          計畫更新:追加福利!【喵喵咖啡館】群眾募資活動將延長至9月1日!
        </h2>
        <div className="mb-3">
          <span className="text-gray">發佈日期：2024年10月11日 14:57</span>
        </div>
        <div className="mb-2">
          <p>
            感謝各位的熱烈支持 🎉
            【喵喵咖啡館】群眾募資活動自啟動以來,受到了廣大咖啡愛好者的熱情關注,目前支持金額已突破100萬!我們非常感動,也因此決定延長募資活動的期限,讓更多人有機會成為我們這個美食社區的一員。
          </p>
          <br />
          <p>
            ✨ 最新更新與福利內容: 募資期限延長至9月1日(02:00)!
            這意味著您有更多的時間來支持我們,並享受我們為您準備的專屬福利。 新增投資層級選項!
            為了感謝大家的熱情,我們新增了更靈活的投資層級,讓更多人能夠參與到這個充滿溫暖和美味的項目中。
            <br />
            <br />
            專屬優惠券:
            對於所有支持者,我們將發放專屬的咖啡優惠券,您可以在未來的咖啡館中使用,享受美味的咖啡和舒適的氛圍。
            邀請參觀實體咖啡館:
            我們將於9月初開放實體店的內部參觀活動,所有支持者均可參加,並提前品味我們精心準備的咖啡飲品。
            <br />
            <br />
            📅 時間不等人,快來支持我們吧!
            我們熱切期待與您一同實現這個夢想,讓【喵喵咖啡館】成為每一位咖啡愛好者的溫暖角落。
            <Link href="https://yourcrowdfundinglink.com">加入官方帳號</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default detail;
