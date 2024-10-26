"use client";
import Image from "next/image";

const aboutUs = () => {
  return (
    <div className="font-medium">
      <div className="container lg:mt-[60px]">
        <section className="relative mb-12 lg:mb-[166px]">
          <div className="h-[250px] bg-[url('https://firebasestorage.googleapis.com/v0/b/foodiefund-7b103.appspot.com/o/aboutUsPage-banner.jpg?alt=media&token=e841b6b4-0274-458f-8fbc-881fe56509d3')] bg-cover lg:flex lg:h-auto lg:bg-none">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/foodiefund-7b103.appspot.com/o/aboutUsPage-banner.jpg?alt=media&token=e841b6b4-0274-458f-8fbc-881fe56509d3"
              width={996}
              height={605}
              className="h-[250px] w-full opacity-0 lg:ml-auto lg:h-auto lg:w-3/4 lg:opacity-100"
              loading="lazy"
              alt="Screenshots of the dashboard project showing desktop version"
            />
            <div className="lg:pt-32"></div>
          </div>
          <div className="mx-3 -mt-24 rounded-lg border bg-white/90 p-5 shadow-md lg:absolute lg:bottom-0 lg:-mb-12 lg:mt-0 lg:w-1/2 lg:p-10">
            <h1 className="mb-4 text-2xl font-bold text-tertiary md:text-3xl lg:mb-8">關於我們</h1>
            <p className="mb-4 lg:mb-8">
              歡迎來到我們的餐廳合夥人募資平台,一個致力於將美食愛好者與創新餐飲項目聯繫在一起的社區。
              在這裡,我們相信每一個出色的餐廳背後都有一個動人的故事和無限的潛力,
              而這些故事正是由像您這樣有熱情和眼光的投資者支持而成就的。
            </p>
            <p>
              我們的平台提供多樣化的餐飲項目,從傳統美食到創意料理,從精品咖啡店到異國風情餐廳,滿足不同投資者的興趣和需求。
              我們的目標是創造一個互惠互利的生態系統,
              讓餐飲創業者獲得所需的資金和支持,讓投資者享受到成功的回報和獨特的餐飲體驗。
            </p>
          </div>
        </section>

        <section className="mx-3 mb-12 md:mb-[120px]">
          <h2 className="mb-4 text-center text-2xl font-semibold md:mb-6 md:text-3xl">我們的使命</h2>
          <p className="mb-7 text-center text-lg md:mb-10">
            我們的使命是促進餐飲行業的創新與發展，讓更多有潛力的餐飲項目成為現實。我們致力於：
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="py-5 text-center md:py-10">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/foodiefund-7b103.appspot.com/o/mission-1.png?alt=media&token=6e83c9fc-6094-4942-be7b-cb37e956626f"
                width={160}
                height={160}
                className="mx-auto mb-4 h-auto w-40 md:mb-8"
                loading="lazy"
                alt="Screenshots of the dashboard project showing desktop version"
              />
              <h3 className="mb-2 text-xl font-bold">連接平台</h3>
              <p className="text-sm md:text-base">為您創造連接，展示我們的項目的平台。</p>
            </div>
            <div className="py-5 text-center md:py-10">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/foodiefund-7b103.appspot.com/o/mission-2.png?alt=media&token=65593d12-584b-401e-90e0-b7688dd96166"
                width={160}
                height={160}
                className="mx-auto mb-4 h-auto w-40 md:mb-8"
                loading="lazy"
                alt="Screenshots of the dashboard project showing desktop version"
              />
              <h3 className="mb-2 text-xl font-bold">多元化的項目選擇</h3>
              <p className="text-sm md:text-base">我們的平臺會為您提供不同類型的優質項目。</p>
            </div>
            <div className="py-5 text-center md:py-10">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/foodiefund-7b103.appspot.com/o/mission-3.png?alt=media&token=14add371-907e-4a8c-98cc-e1f3114f6f6e"
                width={160}
                height={160}
                className="mx-auto mb-4 h-auto w-40 md:mb-8"
                loading="lazy"
                alt="Screenshots of the dashboard project showing desktop version"
              />
              <h3 className="mb-2 text-xl font-bold">專業的開發支持</h3>
              <p className="text-sm md:text-base">我們的專業團隊將為您提供全方位的支持。</p>
            </div>
          </div>
        </section>

        <section className="mx-3 mb-12 md:mb-[120px]">
          <h2 className="mb-4 text-center text-2xl font-semibold md:text-3xl">為什麼選擇我們</h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="mb-6 text-center">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/foodiefund-7b103.appspot.com/o/why-1.png?alt=media&token=6cfe0f27-051e-459a-ba94-8d48118746cf"
                width={320}
                height={320}
                className="mx-auto mb-4 h-auto w-80"
                loading="lazy"
                alt="Screenshots of the dashboard project showing desktop version"
              />
              <h3 className="mb-1 text-xl font-bold md:mb-2">多元化的項目選擇</h3>
              <p className="text-sm md:text-base">
                我們的平台涵蓋了不同風格和地區的餐飲項目，讓您輕鬆找到適合的投資機會。
              </p>
            </div>
            <div className="mb-6 text-center">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/foodiefund-7b103.appspot.com/o/why-2.png?alt=media&token=ff724767-dac2-4589-a4d8-9a14139370fd"
                width={320}
                height={320}
                className="mx-auto mb-4 h-auto w-80"
                loading="lazy"
                alt="Screenshots of the dashboard project showing desktop version"
              />
              <h3 className="mb-1 text-xl font-bold md:mb-2">專業的團隊支持</h3>
              <p className="text-sm md:text-base">
                我們的專家團隊將為每一個項目提供專業指導和支援,確保項目的成功發展。
              </p>
            </div>
            <div className="text-center">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/foodiefund-7b103.appspot.com/o/why-3.png?alt=media&token=6ec2be23-673a-4d4a-b197-3f8c468731e5"
                width={320}
                height={320}
                className="mx-auto mb-4 h-auto w-80"
                loading="lazy"
                alt="Screenshots of the dashboard project showing desktop version"
              />
              <h3 className="mb-1 text-xl font-bold md:mb-2">透明和安全</h3>
              <p className="text-sm md:text-base">我們提供透明的訊息和安全的交易環境,讓投資者安心地參與募資過程。</p>
            </div>
          </div>
        </section>
      </div>
      <section className="mb-8 bg-[#98E4DA]">
        <div className="mx-auto max-w-4xl p-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex h-[148px] bg-[#98E4DA] bg-[url('https://firebasestorage.googleapis.com/v0/b/foodiefund-7b103.appspot.com/o/feature-1.png?alt=media&token=89f0ca70-552b-4e7d-b7fa-ac3c7f5adef0')] bg-cover bg-center bg-no-repeat p-4 bg-blend-multiply">
              <h3 className="m-auto text-center text-[18px] font-bold text-white md:text-2xl">社區與合作</h3>
            </div>
            <div className="flex h-[148px] bg-[#98E4DA] bg-[url('https://firebasestorage.googleapis.com/v0/b/foodiefund-7b103.appspot.com/o/feature-2.png?alt=media&token=84e0f8e4-1183-4e56-b87e-edbaa8f13430')] bg-cover bg-center bg-no-repeat p-4 bg-blend-multiply">
              <h3 className="m-auto text-center text-[18px] font-bold text-white md:text-2xl">透明與信任</h3>
            </div>
            <div className="flex h-[148px] bg-[#98E4DA] bg-[url('https://firebasestorage.googleapis.com/v0/b/foodiefund-7b103.appspot.com/o/feature-3.png?alt=media&token=51f8fa21-2a34-4c94-97af-d2ddcedf99f2')] bg-cover bg-center bg-no-repeat p-4 bg-blend-multiply">
              <h3 className="m-auto text-center text-[18px] font-bold text-white md:text-2xl">創新與成長</h3>
            </div>
            <div className="flex h-[148px] bg-[#98E4DA] bg-[url('https://firebasestorage.googleapis.com/v0/b/foodiefund-7b103.appspot.com/o/feature-4.png?alt=media&token=d33138a5-bf95-4fa6-b18e-0640e78cc5fd')] bg-cover bg-center bg-no-repeat p-4 bg-blend-multiply">
              <h3 className="m-auto text-center text-[18px] font-bold text-white md:text-2xl">美食與熱情</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto my-[88px] flex max-w-4xl items-center p-3 text-center">
        <div className="mx-auto flex flex-col items-center">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/foodiefund-7b103.appspot.com/o/quote-2.png?alt=media&token=f1186c0d-45d6-4fd8-979c-bb25b125a417"
            width={32}
            height={32}
            className="mr-auto h-auto w-8 md:-mb-2 md:w-[60px]"
            loading="lazy"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <span className="px-8 text-xl font-bold md:px-[50px] md:text-4xl md:leading-[52px]">
            加入我們，成為改變的推動者，<br></br>與我們一起探索無限的可能性!
          </span>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/foodiefund-7b103.appspot.com/o/quote-1.png?alt=media&token=beb0d4c5-1d26-4e88-8921-d9fba6009014"
            width={32}
            height={32}
            className="ml-auto h-auto w-8 md:-mt-2 md:w-[60px]"
            loading="lazy"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </section>
    </div>
  );
};

export default aboutUs;
