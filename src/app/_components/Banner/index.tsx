import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import Link from "next/link";
import { ExperienceTalkProps } from "./types";
import "./css/embla.css";

const Banner = ({ data }: ExperienceTalkProps) => {
  return (
    <section className="">
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
                  <Button
                    className="w-1/2 border border-white bg-clip-content px-5 py-4 text-lg md:w-auto"
                    variant="secondary"
                    asChild
                  >
                    <Link href="/404">我要提案</Link>
                  </Button>
                  <Button className="w-1/2 px-5 py-4 text-lg md:w-auto" variant="secondary" asChild>
                    <Link href="/404">我要贊助</Link>
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
      <div className="container flex items-start justify-start font-bold">
        <div className="z-10 -mt-8 flex w-full flex-col items-start rounded-tl-3xl border bg-white px-5 py-4 hover:cursor-pointer md:w-1/2 md:border-none">
          <h2 className="text-2xl font-bold text-secondary">最新消息</h2>
          <div className="flex w-full items-center md:justify-between">
            <p className="mt-2 text-xl hover:underline">過年 本站要休息 2/7~2/16 | 加入會員 打九折 只到今天起 </p>
            <ArrowRightIcon className="ml-1 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;