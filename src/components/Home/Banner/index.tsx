"use client";
import Link from "next/link";
import { Suspense } from "react";

import { Button } from "@/components/ui/button";
import { useGetNews } from "@/hooks/useNews";

import NewInfo from "./NewInfo";
import NewInfoSkeleton from "./NewInfoSkeleton";
import { BannerPropsType } from "./types";

import "./css/embla.css";

const Banner = ({ queryParams, data }: BannerPropsType) => {
  const { data: newsData, isFetching } = useGetNews(queryParams);
  return (
    <section>
      <div className="relative h-[624px] w-full overflow-hidden">
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://storage.googleapis.com/fir-express-80358.appspot.com/images/48b107cd-e6c2-4337-9455-d3b93fa6c585.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=g7sjuCrnykNM2Zcvsh%2BouQDEjPCVwzzvcNHLTa%2BXw7K4dYK9HBpSQx3UaZ%2FWhdF8NMRANIMBxM%2FQXTKnNZZ8%2BkWUs1qGoZ0tFrOH6u6OD1YjxAxLtDFZZdNfEWPF10C6NzyxCD9lA7TfsL4mn8vUQ%2FHmQEcLV%2BJoxwJ3YgQ15szDCT%2FreKUO4VXTSRht9mdrGiM544r9Wn%2BEEHuFnExldqABB8TJ6KUPwKEe8Jlq8ss5EOoGHdF%2BuLWBv8oTVJAUa%2BQLdN8rYF8wbEhUlGc53CtO7ed8z4dghco9IXCMOjaWfJ1tejcpIaa9bi6zviAFvFY7mcilYLRWyY9QL4PwFw%3D%3D)",
          }}
        />
        <div className="absolute inset-0 h-full w-full bg-black opacity-40"></div>
        <div className="relative flex h-full flex-col items-center justify-center">
          <div className="container mx-auto">
            <div className="mb-[80px] mt-[360px] flex justify-center md:justify-start">
              <div className="rounded p-4 font-bold text-white">
                <h1 className="text-center text-3xl leading-none md:text-start md:text-5xl">眾資成城</h1>
                <p className="mt-1 text-2xl leading-snug md:mt-4">在你心愛的餐廳成為合夥人</p>
                <div className="mt-7 flex gap-2 text-2xl md:mt-10">
                  <Button className="w-1/2 px-5 py-4 text-lg md:w-auto" variant="transparent" asChild>
                    <Link href="/404">我要提案</Link>
                  </Button>
                  <Button className="w-1/2 px-5 py-4 text-lg md:w-auto" variant="secondary" asChild>
                    <Link href="/projects">我要贊助</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-11 flex items-center justify-center md:right-4">
            {data.map((item, index) => (
              <Button
                key={item.id}
                className={"embla__dot".concat(index === 0 ? "--selected embla__dot" : "")}
              ></Button>
            ))}
          </div>
        </div>
      </div>
      <Suspense fallback={<NewInfoSkeleton />}>
        {!isFetching && newsData ? <NewInfo newsData={newsData} /> : <NewInfoSkeleton />}
      </Suspense>
      <div className="container mt-6">
        <div className="border-b border-b-gray-200 text-center leading-[0rem]">
          <span className="px-6 leading-[0rem] text-gray-400">探索類別</span>
        </div>
        <div className="border-b pt-3 text-center text-lg font-bold md:text-xl">
          <Button className="h-full px-4 py-5 hover:bg-gray-200" variant="bannerTag" asChild>
            <Link href="/projects">台北</Link>
          </Button>
          <Button className="h-full px-4 py-5 hover:bg-gray-200" variant="bannerTag" asChild>
            <Link href="/projects">台中</Link>
          </Button>
          <Button className="h-full px-4 py-5 hover:bg-gray-200" variant="bannerTag" asChild>
            <Link href="/projects">台南</Link>
          </Button>
          <Button className="h-full px-4 py-5 hover:bg-gray-200" variant="bannerTag" asChild>
            <Link href="/projects">高雄</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
