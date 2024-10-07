import { Button } from "@/components/ui/button";
import Image from "next/image";
import ExpandableContent from "./_components/ExpandableContent";

const projects = async () => {
  return (
    <div className="container px-3 pb-8 pt-6 xl:px-0 xl:pt-0">
      <div className="lg:grid lg:grid-cols-12 lg:gap-6 lg:pb-[120px] xl:mt-[100px]">
        <div className="mb-8 lg:col-span-9">
          <ExpandableContent previewLength={200}>
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
        </div>
        <div className="lg:col-span-3">
          <ul>
            <li className="mb-5 md:mb-8">
              <Image
                src="https://storage.googleapis.com/fir-express-80358.appspot.com/images/e84a603e-94ce-4955-aec1-57030925caf0.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=PYRZrOEf2DhIKnxV4IpWXrlIG1ms%2FfsYo%2FDFc5KJWDkTRadTSwDZHz7WKNuGQqzCF5Swgd8jl4M9uOmR62IoLtn5I50sq5Z8wZrP5YkHTnizbjS1%2Bte5S1egt2%2B5eNYFXTQ3861NLSScD%2F%2BoyNgYOkRU%2BpPs9JkmsEz0B9zhH5u%2BUCGoM8hZbOk%2FbQFjj%2FrigbY4ub9lwbWlJ8%2BNC8uQCc5Kdpniibh%2B8Sbb5MEc0ujkTVc0f1aWxfCZzl9eo%2BaXOVOKtS4ojjVVcL0MFdla5wFwS6YXOYVgLueuJ61gze%2F0D%2FSftMLSlei6Ij70xSp9j8s4%2F6LAJfFCABOKjo8MYA%3D%3D"
                width={306}
                height={200}
                className="h-auto w-full xl:h-[200px]"
                alt="Screenshots of the dashboard project showing desktop version"
                loading="lazy"
              />
              <div className="border p-5">
                <h3 className="mb-2 font-bold">【限量單品】布偶貓托特包</h3>
                <div className="mb-2 flex">
                  <span className="mr-auto text-xl font-bold text-secondary">NT$ 6,666</span>
                  <span className="text-sm font-medium text-gray">已被贊助</span>
                  <span className="text-sm font-medium text-[#0F514E]">24/25</span>
                  <span className="text-sm font-medium text-gray">次</span>
                </div>
                <div className="mb-2">
                  <span className="text-sm font-bold text-gray">剩餘 1 份</span>
                </div>
                <div className="mb-5">
                  <p className="text-sm font-medium">【限量單品】</p>
                  <p className="text-sm font-medium">「容量大！又方便！簡單又樸素讓你出門不怕滑倒！ 」</p>
                  <p className="text-sm font-medium">規格 : 約21x23x15cm(把手11cm)/厚帆</p>
                </div>
                <Button variant="donateNow" size="lg">
                  立即贊助
                </Button>
              </div>
            </li>
            <li className="mb-5 md:mb-8">
              <Image
                src="https://storage.googleapis.com/fir-express-80358.appspot.com/images/d85d3add-863c-414b-a68c-2e2867035fc7.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=WLGOtvhCALB16Cvbt%2FJ7Qjs3r9DjlbdM1xpvMKPNskP38pCkr3LsNANPTLGXDLdfv3RVAQiZo6VRLE%2B3V3kZB0kKWSzKFo%2BxgTbvKg5PYf7F3PBxzoqxxmkQ3Mn7hyvxL9SPtDpJne9aW%2FsycIs7fyy85XZzOxMKpTzOw4o3%2B54pmYSqpCzJQJu2FYqe10kYzZDjf1X3Je5IoUzCzSEDPaU56VEAb7YrNShzB0skkRdk443oRzKryCSXd%2BixJPvO%2FxvxYm7LOvB77lTq1fXiTT56hvN6N90DdCKZACBBMoJHyKBk%2FMZkC5rGy20IR9RVVl5ftuctp03wInFm9nF2zA%3D%3D"
                width={306}
                height={200}
                className="h-auto w-full xl:h-[200px]"
                alt="Screenshots of the dashboard project showing desktop version"
                loading="lazy"
              />
              <div className="border p-5">
                <h3 className="mb-2 font-bold">【限量單品】布偶貓托特包</h3>
                <div className="mb-2 flex">
                  <span className="mr-auto text-xl font-bold text-secondary">NT$ 6,666</span>
                  <span className="text-sm font-medium text-gray">已被贊助</span>
                  <span className="text-sm font-medium text-[#0F514E]">24/25</span>
                  <span className="text-sm font-medium text-gray">次</span>
                </div>
                <div className="mb-2">
                  <span className="text-sm font-bold text-gray">剩餘 1 份</span>
                </div>
                <div className="mb-5">
                  <p className="text-sm font-medium">【限量單品】</p>
                  <p className="text-sm font-medium">「容量大！又方便！簡單又樸素讓你出門不怕滑倒！ 」</p>
                  <p className="text-sm font-medium">規格 : 約21x23x15cm(把手11cm)/厚帆</p>
                </div>
                <Button variant="donateNow" size="lg">
                  立即贊助
                </Button>
              </div>
            </li>
            <li>
              <Image
                src="https://storage.googleapis.com/fir-express-80358.appspot.com/images/df262d64-4ecb-4f6c-9c8f-2f0cb79e09b0.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=GlgbjbN7zWBpvmw%2BK7xp6qLOaTWKSdQtKdGTS0Zm5EF1TaqXl2lWO6A9EML2aOp0Ye6uN5FSr0HKYuVrdv5wmYEDivjdAwUeaRSyF0RD2nGS67TlqVP%2FSKVpjs7QMO1PDd2elyIOgSKtg8GpJRQCGRYZA4oNmAVE%2FOhLgAL8%2B1v1fYpAf0HiDaYZSiY21FSZB%2BwQUxy3hnNtY3VCEqal%2BEt940jsAeBYIQ9%2Bb4kmb%2B26SfKh%2FNw3D8VetnyiT6WBfMt5vTnAZCI%2Bb%2FVa0f9JkBg6qLAgFynWP2hUIQCVR3hJSvjgnBnEtDNZmrQnwmSpk%2BsObS8oeusgIZFiqd77Wg%3D%3D"
                width={306}
                height={200}
                className="h-auto w-full xl:h-[200px]"
                alt="Screenshots of the dashboard project showing desktop version"
                loading="lazy"
              />
              <div className="border p-5">
                <h3 className="mb-2 font-bold">【限量單品】布偶貓托特包</h3>
                <div className="mb-2 flex">
                  <span className="mr-auto text-xl font-bold text-secondary">NT$ 6,666</span>
                  <span className="text-sm font-medium text-gray">已被贊助</span>
                  <span className="text-sm font-medium text-[#0F514E]">24/25</span>
                  <span className="text-sm font-medium text-gray">次</span>
                </div>
                <div className="mb-2">
                  <span className="text-sm font-bold text-gray">剩餘 1 份</span>
                </div>
                <div className="mb-5">
                  <p className="text-sm font-medium">【限量單品】</p>
                  <p className="text-sm font-medium">「容量大！又方便！簡單又樸素讓你出門不怕滑倒！ 」</p>
                  <p className="text-sm font-medium">規格 : 約21x23x15cm(把手11cm)/厚帆</p>
                </div>
                <Button variant="donateNow" size="lg">
                  立即贊助
                </Button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default projects;
