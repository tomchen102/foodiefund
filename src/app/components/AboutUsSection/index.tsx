
import Image from "next/image";
import React from "react";


const AboutUsSection = () => {
  return (
 
    <div className="container">

      <div className="bg-[#D6F4F0] flex md:flex-row flex-col-reverse items-center md:mb-[160px] md:w-[calc(100%-86px)] md:ml-auto mx-3 px-3 md:pl-8 pt-8 md:p-0 mb-[82px]">
        <div className="md:-mb-[60px] md:pt-20 w-full md:w-auto -mb-[42px]">
          <Image
                src="https://firebasestorage.googleapis.com/v0/b/foodiefund-7b103.appspot.com/o/about-us-2.jpg?alt=media&token=7b7091ca-d04b-40fb-99fd-3faba209ffb8"

                
                width={480}
                height={320}
                className="rounded-[20px] md:-ml-[86px] md:-mb-[28px] w-2/3 md:w-[480px]"
                alt="Screenshots of the dashboard project showing desktop version"
              />
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/foodiefund-7b103.appspot.com/o/about-us-1.jpg?alt=media&token=fef05202-1877-4e88-8bb8-7924446843f0"
                
                width={480}
                height={320}
                className="rounded-[20px] md:ml-[22px] w-2/3 md:w-[480px] ml-auto -mt-[60px]"
                alt="Screenshots of the dashboard project showing desktop version"
              />
        </div>
        <article className="mb-6 md:mb-0 text-center md:text-left lg:max-w-[550px] lg:p-[72px] md:max-w-[400px] md:p-[36px] flex-grow font-bold text-[#0F514E]">
          <h2 className="text-4xl mb-8">關於我們</h2>
          <p className=" mb-8 text-sm md:text-base font-medium text-[#09090B]">歡迎來到我們的餐廳合夥人募資平台,一個致力於將美食愛好者與創新餐飲項目聯繫在一起的社區。
            在這裡,我們相信每一個出色的餐廳背後都有一個動人的故事和無限的潛力,
            而這些故事正是由像您這樣有熱情和眼光的投資者支持而成就的。</p>
            <p className=" text-sm md:text-base font-medium text-[#09090B]">我們的平台提供多樣化的餐飲項目,從傳統美食到創意料理,從精品咖啡店到異國風情餐廳,滿足不同投資者的興趣和需求。
            我們的目標是創造一個互惠互利的生態系統,
            讓餐飲創業者獲得所需的資金和支持,讓投資者享受到成功的回報和獨特的餐飲體驗。</p>
        </article>
      </div>
    </div>


  
  );
};

export default AboutUsSection;
