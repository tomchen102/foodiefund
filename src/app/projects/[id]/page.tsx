import Image from "next/image";
import ExpandableContent from "./_components/ExpandableContent";

const projects = async () => {
  return (
    <>
      <ExpandableContent previewLength={154}>
        <div className="mb-6 md:mb-[60px]">
          <p className="mb-6 font-medium md:mb-[60px]">
            紀錄作為外送員,辛酸的部分常常來自於工作環境的不確定性。面對繁忙的交通、惡劣的天氣,以及突如其來的訂單取消,這些挑戰讓工作變得更加艱難。長時間的奔波和高壓的時間限制,常常讓人感到疲憊。但每當看到客戶滿意的微笑,這些辛苦的付出便化為了值得的回報。這份工作不僅考驗耐心和毅力，外送員該如何如何在困難中尋找成就感。
          </p>
          <Image
            src="https://storage.googleapis.com/fir-express-80358.appspot.com/images/e5275b0d-edfc-40c3-a26a-d104d01d452e.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=koD1rWCn3LG61t2nVKY0a%2FjKtYNgwff5vWXAdGP6PFyaH8g2TfO%2FQ7sCh5g28d9Ox5AtBTXt2SmOaOxYS1BC%2BUyodELSgLPCy5fQtllILG0tn3iTwiNArFa91RFDBkSGZWKqwtGOsy9hogYVrmZxYd3%2F3MRi1memkGh%2B5VQQz0eK4DoLtctE3%2FOvVpc3JHjRnsis7fNyNZth5mIw3jbUlQ0buz2sFllLn9vlBSqIUHu8xLQfDv8oAd1XRtYcRc6v7Nbff%2Fu7TExT2GrvgXUJABzzG7pvytCJgRFfZfZ3WlPQlAor6nc0CbPTQ%2FaWdG44Q%2BMECwvzplMluCnw6gjGYg%3D%3D"
            width={996}
            height={605}
            className="w-full"
            loading="lazy"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
        <div className="mb-6 md:mb-[60px]">
          <h4
            className="mx-auto mb-4 w-[97px] text-center text-2xl font-bold md:mb-10"
            style={{ backgroundImage: "linear-gradient(to top, #FFE5D4 20px, transparent 0%)" }}
          >
            1999
          </h4>
          <p>
            這一天創辦人在家寫Code,拿起一旁的咖啡喝了一口,越喝越有靈感,
            越寫越起勁,才發現原來咖啡這麼棒,最後放棄寫Code跑去開咖啡館了!
          </p>
        </div>
        <div className="mb-6 md:mb-[60px]">
          <h4
            className="mx-auto mb-4 w-[160px] text-center text-2xl font-bold md:mb-10"
            style={{ backgroundImage: "linear-gradient(to top, #FFE5D4 20px, transparent 0%)" }}
          >
            我們的理念
          </h4>
          <p>
            喵喵咖啡館相信咖啡具有無與倫比的力量,不僅能激發創意,還能拉近彼此的距離。在這裡,每一杯咖啡都是我們對於生活的熱愛與人際連結的體現。無論是與朋友共享一份早餐、在午餐時刻偷閒,還是僅僅來享受一杯熱騰騰的拿鐵,我們都希望每位顧客在這裡找到歸屬感。
          </p>
        </div>
        <div className="mb-6 md:mb-[60px]">
          <h4
            className="mx-auto mb-4 w-[328px] text-center text-2xl font-bold md:mb-10"
            style={{ backgroundImage: "linear-gradient(to top, #FFE5D4 20px, transparent 0%)" }}
          >
            為什麼我們需要您的支持？
          </h4>
          <p>
            我們正在計畫擴大喵喵咖啡館，將這份獨特的咖啡文化帶到更多的地方。我們希望通過這次群眾募資，籌集資金來打造一個溫馨且充滿活力的用餐空間，讓更多人能夠在忙碌的日常中找到一個放鬆與聯繫的地方。您的支持將幫助我們實現這個願景，並且讓喵喵咖啡館成為社區的心靈綠洲。
          </p>
        </div>
        <div>
          <h4
            className="mx-auto mb-4 w-[256px] text-center text-2xl font-bold md:mb-10"
            style={{ backgroundImage: "linear-gradient(to top, #FFE5D4 20px, transparent 0%)" }}
          >
            加入我們，共創美好
          </h4>
          <p>
            現在，我們邀請您成為喵喵咖啡館故事的一部分。每一份支持都將使我們更接近目標，為更多人帶來這份獨特的咖啡體驗。無論您是喜愛咖啡的愛好者，還是尋找一個溫馨社交空間的顧客，我們都歡迎您加入這個創新且充滿人情味的旅程。
          </p>
        </div>
      </ExpandableContent>
    </>
  );
};

export default projects;
