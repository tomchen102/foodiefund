import React from "react";
import AboutUs from "./_components/AboutUs"; // Updated import path
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "關於我們 | 眾資成城-在你心愛的餐廳成為合夥人",
  description:
    "歡迎來到我們的餐廳合夥人募資平台,一個致力於將美食愛好者與創新餐飲項目聯繫在一起的社區。在這裡,我們相信每一個出色的餐廳背後都有一個動人的故事和無限的潛力,而這些故事正是由像您這樣有熱情和眼光的投資者支持而成就的。我們的平台提供多樣化的餐飲項目,從傳統美食到創意料理,從精品咖啡店到異國風情餐廳,滿足不同投資者的興趣和需求。我們的目標是創造一個互惠互利的生態系統,讓餐飲創業者獲得所需的資金和支持,讓投資者享受到成功的回報和獨特的餐飲體驗。",
  keywords: "眾資成城, 餐廳, 合夥人, 群眾募資, 美食",
  openGraph: {
    title: "關於我們 | 眾資成城-在你心愛的餐廳成為合夥人",
    description:
      "歡迎來到我們的餐廳合夥人募資平台,一個致力於將美食愛好者與創新餐飲項目聯繫在一起的社區。在這裡,我們相信每一個出色的餐廳背後都有一個動人的故事和無限的潛力,而這些故事正是由像您這樣有熱情和眼光的投資者支持而成就的。我們的平台提供多樣化的餐飲項目,從傳統美食到創意料理,從精品咖啡店到異國風情餐廳,滿足不同投資者的興趣和需求。我們的目標是創造一個互惠互利的生態系統,讓餐飲創業者獲得所需的資金和支持,讓投資者享受到成功的回報和獨特的餐飲體驗。",
    url: "https://foodiefund.vercel.app/aboutUs",
    type: "website",
    siteName: "眾資成城",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/foodiefund-7b103.appspot.com/o/aboutUsPage-banner.jpg?alt=media&token=e841b6b4-0274-458f-8fbc-881fe56509d3",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "關於我們 | 眾資成城-在你心愛的餐廳成為合夥人",
    description:
      "歡迎來到我們的餐廳合夥人募資平台,一個致力於將美食愛好者與創新餐飲項目聯繫在一起的社區。在這裡,我們相信每一個出色的餐廳背後都有一個動人的故事和無限的潛力,而這些故事正是由像您這樣有熱情和眼光的投資者支持而成就的。我們的平台提供多樣化的餐飲項目,從傳統美食到創意料理,從精品咖啡店到異國風情餐廳,滿足不同投資者的興趣和需求。我們的目標是創造一個互惠互利的生態系統,讓餐飲創業者獲得所需的資金和支持,讓投資者享受到成功的回報和獨特的餐飲體驗。",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/foodiefund-7b103.appspot.com/o/aboutUsPage-banner.jpg?alt=media&token=e841b6b4-0274-458f-8fbc-881fe56509d3",
      },
    ],
  },
  appleWebApp: {
    title: "關於我們 | 眾資成城-在你心愛的餐廳成為合夥人",
    startupImage: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/foodiefund-7b103.appspot.com/o/aboutUsPage-banner.jpg?alt=media&token=e841b6b4-0274-458f-8fbc-881fe56509d3",
      },
    ],
  },
};

const AboutUsPage = () => {
  return <AboutUs />;
};

export default AboutUsPage;
