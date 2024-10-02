import Badges from "@/components/Badges";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { MdOutlineCalendarMonth, MdPersonOutline } from "react-icons/md";

const projects = () => {
  return (
    <div className="container xl:px-0 xl:pb-[120px] xl:pt-20">
      <div className="lg:flex">
        <div className="h-60 bg-[url('https://storage.googleapis.com/fir-express-80358.appspot.com/images/1ec19f5f-6e26-45dd-b1d1-2277de8248f2.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=Q16xulxexuuA4xIPC%2FE%2BRdZID4swLMTFbqeB38az%2F0Sq8sW4pri7uZK88R1UGBkdHbmuJgYIQbcej%2FHPcjl8P9UcMAefwfsahG41aEyCg3YM%2BYrEvINK9JeXMCN2JRcmMr%2BRkiQrqWVkI78OnvA187B87u4GiBGnqxbhezXDXdjuPJEUAWMClrlsodA1hRqlWFLYtEIYSb9rm9OPRd5EiLV1mb7XlAEHHUvB7JxpTYCiYPdJtgRmxetoG74Uf%2BVz65ysNg6iHEba%2FTmNSG6h0hCax4M21GL%2FZfNY6E7aoY7ojGGreeH4JoV%2Fot%2BBah4%2BjrYV1xJCQ3tALNVsOPIcaw%3D%3D')] bg-cover bg-center lg:mr-10 lg:h-[550px] lg:w-[550px] lg:bg-[url('https://storage.googleapis.com/fir-express-80358.appspot.com/images/74960e77-27bb-4145-9c74-70c5c5b3c207.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=PXtAq0TxkxLZMbGU1xWId8nHIEr9XEVfESbkhydEs0zzFn5x1rMLcDzUMRk%2BMyUkVSCtCow%2F8he37%2F8gbfU9NFGH7gUaoBQatqFQZwGwm4HuNXjPK5oVoxRA5IJRoV4k%2FvDyq3g51wmsC55mIqDxV5cWWPfaJMIKi3LFgKlKwXeNoN%2FqVeTE3OqbjvcGkRBV%2FylbgEqTgnG4keVpwzS2%2BhFIezUxUOWDyY23b%2FbMNLV9a9vXDvDWFsvcdeB0GkAW842rz5%2F9crT%2BJTKTnp6A2ViONMLMR743oUNA1597Cu9ZaIProsdR8nQfb7m97kNvyg81lfvh9oBBaL4c8ql7%2Fw%3D%3D')]"></div>
        <section className="container m-0 px-3 pt-4 lg:w-[706px] lg:p-0">
          <div className="flex h-full flex-col">
            <div>
              <Badges text="台北" />
              <Badges text="咖啡廳" />
            </div>
            <h1 className="my-3 text-2xl font-bold lg:text-4xl">喵喵咖啡廳</h1>
            <p className="mb-6 text-sm font-medium lg:mb-auto lg:text-base">
              喵喵咖啡館在於創辦人在台北時創立,我們的理念很簡單-提供優質的食物和咖啡,
              咖啡具有使人們停下來和彼此互動的能力。人與人之間的聯繫就是我們在這裡的原因,有時我們意識到這就像兩個拿鐵一樣簡單。
              享用咖啡,早餐或午餐,我們隨時為您服務!
            </p>
            <div className="mb-6 lg:mb-10 lg:flex lg:items-center">
              <div className="mb-1 flex h-[30px] items-center lg:mb-0 lg:mr-5">
                <MdPersonOutline size={20} className="mr-1 inline-block" />
                <span className="mr-1 text-sm font-medium text-[#71717A]">提案人</span>
                <span className="text-sm font-medium text-[#0F514E]">
                  <Link href="#">兔寶寶溜滑梯</Link>
                </span>
              </div>
              <div className="flex h-[30px] items-center">
                <MdOutlineCalendarMonth size={20} className="mr-1 inline-block" />
                <span className="mr-1 text-sm font-medium text-[#71717A]">開始於</span>
                <span className="text-sm font-medium text-[#0F514E]">
                  <time dateTime="2024/08/08 22:06">2024/08/08 22:06</time>
                </span>
              </div>
            </div>
            <div className="mb-7 lg:mb-10 lg:flex lg:gap-6">
              <div className="lg:w-[426px]">
                <div className="flex">
                  <span className="mr-auto font-medium leading-6 text-[#71717A]">目標 NT$ 3,000,000</span>
                  <span className="text-sm font-bold text-[#0F514E]">30%</span>
                </div>
                <Progress value={33} className="my-5" />
                <div className="mb-6">
                  <span className="text-2xl font-bold text-secondary lg:text-[30px] lg:leading-9">NT$ 123,456</span>
                </div>
              </div>
              <div className="flex gap-4 lg:w-[256px]">
                <div className="flex flex-grow flex-col items-center rounded-lg border p-2 lg:py-[14px]">
                  <span className="mb-3 block text-sm font-medium text-[#27272A] lg:mb-5 lg:text-base">募資倒數</span>
                  <span className="block text-2xl font-bold text-[#0F514E] lg:text-[30px] lg:leading-9">15 天</span>
                </div>
                <div className="flex flex-grow flex-col items-center rounded-lg border p-2 lg:py-[14px]">
                  <span className="mb-3 block text-sm font-medium text-[#27272A] lg:mb-5 lg:text-base">贊助人數</span>
                  <span className="block text-2xl font-bold text-[#0F514E] lg:text-[30px] lg:leading-9">661人</span>
                </div>
              </div>
            </div>
            <div className="mb-8 lg:mb-0">
              <Button variant="donateNow" size="lg" asChild>
                <Link href="#">立即贊助</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default projects;
