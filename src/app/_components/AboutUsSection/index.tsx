import Image from "next/image";

const AboutUsSection = () => {
  return (
    <div className="container">
      <div className="mx-3 mb-[82px] flex flex-col-reverse items-center bg-[#D6F4F0] px-3 pt-8 md:mb-[160px] md:ml-auto md:w-[calc(100%-86px)] md:flex-row md:p-0 md:pl-8">
        <div className="-mb-[42px] w-full md:-mb-[60px] md:w-auto md:pt-20">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/foodiefund-7b103.appspot.com/o/about-us-2.jpg?alt=media&token=7b7091ca-d04b-40fb-99fd-3faba209ffb8"
            width={480}
            height={320}
            className="w-2/3 rounded-[20px] md:-mb-[28px] md:-ml-[86px] md:w-[480px]"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/foodiefund-7b103.appspot.com/o/about-us-1.jpg?alt=media&token=fef05202-1877-4e88-8bb8-7924446843f0"
            width={480}
            height={320}
            className="-mt-[60px] ml-auto w-2/3 rounded-[20px] md:ml-[22px] md:w-[480px]"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
        <article className="mb-6 flex-grow text-center font-bold text-[#0F514E] md:mb-0 md:max-w-[400px] md:p-[36px] md:text-left lg:max-w-[550px] lg:p-[72px]">
          <h2 className="mb-8 text-4xl">關於我們</h2>
          <p className="mb-8 text-sm font-medium text-[#09090B] md:text-base">
            歡迎來到我們的餐廳合夥人募資平台,一個致力於將美食愛好者與創新餐飲項目聯繫在一起的社區。
            在這裡,我們相信每一個出色的餐廳背後都有一個動人的故事和無限的潛力,
            而這些故事正是由像您這樣有熱情和眼光的投資者支持而成就的。
          </p>
          <p className="text-sm font-medium text-[#09090B] md:text-base">
            我們的平台提供多樣化的餐飲項目,從傳統美食到創意料理,從精品咖啡店到異國風情餐廳,滿足不同投資者的興趣和需求。
            我們的目標是創造一個互惠互利的生態系統,
            讓餐飲創業者獲得所需的資金和支持,讓投資者享受到成功的回報和獨特的餐飲體驗。
          </p>
        </article>
      </div>
    </div>
  );
};

export default AboutUsSection;
