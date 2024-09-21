import { Button } from "@/components/ui/button";

import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const ExperienceTalk = () => {
  const banners = [
    {
      id: 1,
      imageUrl:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/48b107cd-e6c2-4337-9455-d3b93fa6c585.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=g7sjuCrnykNM2Zcvsh%2BouQDEjPCVwzzvcNHLTa%2BXw7K4dYK9HBpSQx3UaZ%2FWhdF8NMRANIMBxM%2FQXTKnNZZ8%2BkWUs1qGoZ0tFrOH6u6OD1YjxAxLtDFZZdNfEWPF10C6NzyxCD9lA7TfsL4mn8vUQ%2FHmQEcLV%2BJoxwJ3YgQ15szDCT%2FreKUO4VXTSRht9mdrGiM544r9Wn%2BEEHuFnExldqABB8TJ6KUPwKEe8Jlq8ss5EOoGHdF%2BuLWBv8oTVJAUa%2BQLdN8rYF8wbEhUlGc53CtO7ed8z4dghco9IXCMOjaWfJ1tejcpIaa9bi6zviAFvFY7mcilYLRWyY9QL4PwFw%3D%3D",
      title: "Banner 1",
      description: "Description for Banner 1",
    },
    {
      id: 2,
      imageUrl:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/48b107cd-e6c2-4337-9455-d3b93fa6c585.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=g7sjuCrnykNM2Zcvsh%2BouQDEjPCVwzzvcNHLTa%2BXw7K4dYK9HBpSQx3UaZ%2FWhdF8NMRANIMBxM%2FQXTKnNZZ8%2BkWUs1qGoZ0tFrOH6u6OD1YjxAxLtDFZZdNfEWPF10C6NzyxCD9lA7TfsL4mn8vUQ%2FHmQEcLV%2BJoxwJ3YgQ15szDCT%2FreKUO4VXTSRht9mdrGiM544r9Wn%2BEEHuFnExldqABB8TJ6KUPwKEe8Jlq8ss5EOoGHdF%2BuLWBv8oTVJAUa%2BQLdN8rYF8wbEhUlGc53CtO7ed8z4dghco9IXCMOjaWfJ1tejcpIaa9bi6zviAFvFY7mcilYLRWyY9QL4PwFw%3D%3D",
      title: "Banner 2",
      description: "Description for Banner 2",
    },
  ];
  return (
    <section className="">
      <div className="relative h-[624px] w-full overflow-hidden">
        {/* 背景圖片 */}
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://storage.googleapis.com/fir-express-80358.appspot.com/images/48b107cd-e6c2-4337-9455-d3b93fa6c585.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=g7sjuCrnykNM2Zcvsh%2BouQDEjPCVwzzvcNHLTa%2BXw7K4dYK9HBpSQx3UaZ%2FWhdF8NMRANIMBxM%2FQXTKnNZZ8%2BkWUs1qGoZ0tFrOH6u6OD1YjxAxLtDFZZdNfEWPF10C6NzyxCD9lA7TfsL4mn8vUQ%2FHmQEcLV%2BJoxwJ3YgQ15szDCT%2FreKUO4VXTSRht9mdrGiM544r9Wn%2BEEHuFnExldqABB8TJ6KUPwKEe8Jlq8ss5EOoGHdF%2BuLWBv8oTVJAUa%2BQLdN8rYF8wbEhUlGc53CtO7ed8z4dghco9IXCMOjaWfJ1tejcpIaa9bi6zviAFvFY7mcilYLRWyY9QL4PwFw%3D%3D)",
          }}
        />
        <div className="absolute inset-0 h-full w-full bg-black opacity-40"></div>
        {/* 左下角文字 */}
        {/* 文字容器 */}
        <div className="relative flex h-full items-center justify-center">
          <div className="container mx-auto">
            <div className="mb-[80px] mt-[360px] flex justify-start">
              <div className="rounded p-4 font-bold text-white">
                <h1 className="text-48p leading-none">眾資成城</h1>
                <p className="mt-4 text-2xl leading-snug">
                  在你心愛的餐廳成為合夥人
                </p>
                <div className="mt-10 flex gap-2">
                  <Button
                    /*  className="ml-auto hidden items-center md:flex" */
                    className="border border-white bg-clip-content"
                    asChild
                  >
                    <Link href="/404" className="text-lg">
                      我要提案
                    </Link>
                  </Button>
                  <Button className="" variant="secondary" asChild>
                    <Link href="/404">我要贊助</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTalk;
