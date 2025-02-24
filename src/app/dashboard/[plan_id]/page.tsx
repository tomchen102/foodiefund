import AvatarCircle from "@/components/AvatarCircle";
import Badges from "@/components/Badges";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

import ProgressPlan from "../_components/ProgressPlan";

const plan_id = () => {
  return (
    <div className="bg-white">
      <ProgressPlan />
      <div className="mt-12 flex flex-col lg:mt-10 lg:flex-row">
        <div className="order-2 mt-4 flex flex-shrink-0 lg:order-1 lg:mr-6 lg:mt-0 lg:w-[23.28%] lg:flex-col">
          <div className="mr-4 w-full border bg-white p-4 lg:mb-6 lg:mr-0 lg:px-6 lg:py-4">
            <div className="mb-3 flex">
              <Icons.ThumbUpOffAlt type="indicator" className="text-primary-hover" />
              <span className="ml-2 flex-shrink-0 font-medium leading-6 text-gray">平均贊助金額</span>
            </div>
            <div className="flex items-center">
              <h4 className="text-lg">NT$ 10,500</h4>
              <span className="ml-2 text-gray">元</span>
            </div>
          </div>
          <div className="w-full border bg-white p-4 lg:px-6 lg:py-4">
            <div className="mb-3 flex">
              <Icons.Time type="indicator" className="text-primary-hover" />
              <span className="ml-2 font-medium leading-6 text-gray">執行時間</span>
            </div>
            <div className="flex items-center">
              <h4 className="text-lg">10</h4>
              <span className="mx-2 text-gray">天</span>
              <h4 className="text-lg">5</h4>
              <span className="ml-2 text-gray">小時</span>
            </div>
          </div>
        </div>
        <div className="order-1 w-full border bg-white px-4 pb-4 pt-4 lg:px-6 lg:pb-10">
          <h6>募資進度</h6>
          <div className="mb-1 mt-4">
            <span className="font-medium leading-6 text-gray">累積金額</span>
          </div>
          <div className="mb-3 lg:mb-8 lg:flex lg:items-center">
            <div className="mb-3 mr-auto lg:mb-0">
              <h4>NT$ 1,001,000</h4>
            </div>
            <span className="text-gray lg:ml-2">最後募資期限：2025/8/10</span>
          </div>
          <Progress value={50} type="backend" />
        </div>
      </div>
      <div className="my-4 grid grid-cols-2 gap-4 lg:my-6 lg:grid-cols-4 lg:gap-6">
        <div className="w-full border bg-white p-4 lg:px-6 lg:py-4">
          <div className="mb-3 flex">
            <Icons.Bag type="indicator" className="text-primary-hover" />
            <span className="ml-2 font-medium leading-6 text-gray">回購率</span>
          </div>
          <div className="flex items-center">
            <h4 className="text-lg">83.3</h4>
            <span className="ml-2 text-gray">%</span>
          </div>
        </div>
        <div className="w-full border bg-white p-4 lg:px-6 lg:py-4">
          <div className="mb-3 flex">
            <Icons.Coin type="indicator" className="text-primary-hover" />
            <span className="ml-2 font-medium leading-6 text-gray">平均捐款額</span>
          </div>
          <div className="flex items-center">
            <h4 className="text-lg">NT$ 20,000</h4>
            <span className="ml-2 text-gray">元</span>
          </div>
        </div>
        <div className="w-full border bg-white p-4 lg:px-6 lg:py-4">
          <div className="mb-3 flex">
            <Icons.ListAlt type="indicator" className="text-primary-hover" />
            <span className="ml-2 flex-shrink-0 font-medium leading-6 text-gray">累積訂單筆數</span>
          </div>
          <div className="flex items-center">
            <h4 className="text-lg">5</h4>
            <span className="ml-2 text-gray">筆</span>
          </div>
        </div>
        <div className="w-full border bg-white p-4 lg:px-6 lg:py-4">
          <div className="mb-3 flex">
            <Icons.KeyboardReturn type="indicator" className="text-primary-hover" />
            <span className="ml-2 flex-shrink-0 font-medium leading-6 text-gray">累積退款金額</span>
          </div>
          <div className="flex items-center">
            <h4 className="text-lg">NT$ 54,000</h4>
            <span className="ml-2 text-gray">元</span>
          </div>
        </div>
      </div>
      <div className="mb-6 border bg-white px-6 py-4">
        <div className="mb-3 flex lg:mb-5">
          <div className="mr-3">
            <h6>FOODIE 主題火腿餐廳</h6>
          </div>
          <div className="hidden lg:flex">
            <Badges text="台北" />
            <Badges text="咖啡廳" />
          </div>
          <div className="ml-auto">
            <Icons.Plan type="indicator" />
          </div>
        </div>
        <div className="mb-4 flex lg:hidden">
          <Badges text="台北" />
          <Badges text="咖啡廳" />
        </div>
        <div className="lg:flex">
          <ul className="border-b pb-5 lg:mr-5 lg:w-60 lg:border-b-0">
            <li className="mb-4 flex">
              <div className="mr-5 w-20">
                <span className="font-medium text-gray">提案人姓名</span>
              </div>
              <span className="font-medium">Mr 火腿</span>
            </li>
            <li className="mb-4 flex">
              <div className="mr-5 w-20">
                <span className="font-medium text-gray">聯絡信箱</span>
              </div>
              <span className="font-medium">abcd@gmail.com</span>
            </li>
            <li className="flex">
              <div className="mr-5 w-20">
                <span className="font-medium text-gray">聯絡電話</span>
              </div>
              <span className="font-medium">0987654321</span>
            </li>
          </ul>
          <div className="lg:border-l lg:pl-5">
            <div className="mb-2 pt-5 lg:pt-0">
              <span className="font-medium text-gray">專案簡介</span>
            </div>
            <div>
              <p>
                火腿主題餐廳是一家專注於各種火腿美食的特色餐廳，旨在為顧客提供豐富多樣的火腿料理體驗。餐廳的菜單圍繞著不同類型和風味的火腿設計，如西班牙伊比利亞火腿、意大利帕爾馬火腿和德國黑森林火腿等，搭配創意小吃、沙拉、三明治和主菜，滿足不同口味的需求。
              </p>
              <p>
                餐廳的氛圍通常會反映火腿的傳統和文化背景，例如使用木質元素、復古的裝飾品和暖色調的燈光來營造溫馨舒適的用餐環境。同時，餐廳可能還會設有開放式廚房或展示區，讓顧客可以觀賞到專業切割火腿的過程，增加互動性和趣味性。
              </p>
              <p>
                除了火腿料理，餐廳還提供多種搭配的葡萄酒和特色飲品，以提升整體用餐體驗。這類餐廳不僅適合火腿愛好者，也是尋求獨特美食體驗的顧客的理想選擇。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:gap-6">
        <div className="h-max-[705px] mb-4 w-full border bg-white p-4 lg:mb-0 lg:px-6 lg:py-4">
          <div className="mb-4 flex">
            <div className="mr-auto">
              <h6>近期贊助清單</h6>
            </div>
            <Button className="group text-gray" size="iconButton" variant="link">
              <span>查看更多</span>
              <Icons.ArrowRightFill dimension="s" className="text-gray" />
            </Button>
          </div>
          <ul>
            <li className="py-4">
              <div className="flex border-b border-[#D4D4D8] pb-4">
                <div className="mr-3 flex items-center">
                  <AvatarCircle src="https://github.com/shadcn.png" />
                </div>
                <div className="w-full">
                  <div className="mb-1 flex">
                    <span className="font-medium text-gray">陳先生</span>
                    <div className="ml-auto">
                      <Badges text="付款成功" className="mr-0" />
                    </div>
                  </div>
                  <div className="flex">
                    <span className="font-bold">NT$ 2,000</span>
                    <div className="ml-auto">
                      <span className="text-gray">2024/8/10 13:53</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="py-4">
              <div className="flex border-b border-[#D4D4D8] pb-4">
                <div className="mr-3 flex items-center">
                  <AvatarCircle src="https://github.com/shadcn.png" />
                </div>
                <div className="w-full">
                  <div className="mb-1 flex">
                    <span className="font-medium text-gray">兔子</span>
                    <div className="ml-auto">
                      <Badges text="退款中" className="mr-0" />
                    </div>
                  </div>
                  <div className="flex">
                    <span className="font-bold">NT$ 1,001,000</span>
                    <div className="ml-auto">
                      <span className="text-gray">2024/8/10 13:53</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="py-4">
              <div className="flex border-b border-[#D4D4D8] pb-4">
                <div className="mr-3 flex items-center">
                  <AvatarCircle src="https://github.com/shadcn.png" />
                </div>
                <div className="w-full">
                  <div className="mb-1 flex">
                    <span className="font-medium text-gray">火腿</span>
                    <div className="ml-auto">
                      <Badges text="付款成功" className="mr-0" />
                    </div>
                  </div>
                  <div className="flex">
                    <span className="font-bold">NT$ 1,001,000</span>
                    <div className="ml-auto">
                      <span className="text-gray">2024/8/10 13:53</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="py-4">
              <div className="flex border-b border-[#D4D4D8] pb-4">
                <div className="mr-3 flex items-center">
                  <AvatarCircle src="https://github.com/shadcn.png" />
                </div>
                <div className="w-full">
                  <div className="mb-1 flex">
                    <span className="font-medium text-gray">鴨子</span>
                    <div className="ml-auto">
                      <Badges text="退款成功" className="mr-0" />
                    </div>
                  </div>
                  <div className="flex">
                    <span className="font-bold">NT$ 1,001,000</span>
                    <div className="ml-auto">
                      <span className="text-gray">2024/8/10 13:53</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="py-4">
              <div className="flex border-b border-[#D4D4D8] pb-4">
                <div className="mr-3 flex items-center">
                  <AvatarCircle src="https://github.com/shadcn.png" />
                </div>
                <div className="w-full">
                  <div className="mb-1 flex">
                    <span className="font-medium text-gray">N7</span>
                    <div className="ml-auto">
                      <Badges text="退款成功" className="mr-0" />
                    </div>
                  </div>
                  <div className="flex">
                    <span className="font-bold">NT$ 1,001,000</span>
                    <div className="ml-auto">
                      <span className="text-gray">2024/8/10 13:53</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="py-4">
              <div className="flex pb-4">
                <div className="mr-3 flex items-center">
                  <AvatarCircle src="https://github.com/shadcn.png" />
                </div>
                <div className="w-full">
                  <div className="mb-1 flex">
                    <span className="font-medium text-gray">Lobinda</span>
                    <div className="ml-auto">
                      <Badges text="付款成功" className="mr-0" />
                    </div>
                  </div>
                  <div className="flex">
                    <span className="font-bold">NT$ 1,001,000</span>
                    <div className="ml-auto">
                      <span className="text-gray">2024/8/10 13:53</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="h-max-[705px] w-full border bg-white px-6 py-4">
          <div className="mb-6 flex">
            <div className="mr-auto">
              <h6>留言清單</h6>
            </div>
            <Button className="group text-gray" size="iconButton" variant="link">
              <span>查看更多</span>
              <Icons.ArrowRightFill dimension="s" className="text-gray" />
            </Button>
          </div>
          <ul>
            <li>
              <div className="w-full border-b border-[#D4D4D8] pb-4">
                <div className="mb-3 flex">
                  <span className="font-medium text-gray">陳先生</span>
                  <div className="ml-auto mr-4">
                    <Badges text="未讀" className="mr-0" />
                  </div>
                  <span className="text-gray">2024/8/10 13:53</span>
                </div>
                <div className="flex">
                  <p className="font-medium">您好可以提供有什麼火腿精緻菜單料理嗎</p>
                </div>
              </div>
            </li>
            <li>
              <div className="w-full border-b border-[#D4D4D8] py-4">
                <div className="mb-3 flex">
                  <span className="font-medium text-gray">N7</span>
                  <div className="ml-auto mr-4">
                    <Badges text="未讀" className="mr-0" />
                  </div>
                  <span className="text-gray">2024/8/10 13:53</span>
                </div>
                <div className="flex">
                  <p className="font-medium">
                    您好，我最近了解到你們餐廳正在進行募資，對於你們的理念和未來的計畫感到非常興趣。我想進一步了解一下，如果餐廳順利
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="w-full border-b border-[#D4D4D8] py-4">
                <div className="mb-3 flex">
                  <span className="font-medium text-gray">兔子</span>
                  <div className="ml-auto mr-4">
                    <Badges text="未讀" className="mr-0" />
                  </div>
                  <span className="text-gray">2024/8/10 13:53</span>
                </div>
                <div className="flex">
                  <p className="font-medium">什麼時候可以開幕，我要吃火腿</p>
                </div>
              </div>
            </li>
            <li>
              <div className="w-full py-4">
                <div className="mb-3 flex">
                  <span className="font-medium text-gray">Lobinda</span>
                  <div className="ml-auto">
                    <span className="text-gray">2024/8/10 13:53</span>
                  </div>
                </div>
                <div className="flex">
                  <p className="font-medium">
                    您好，我最近了解到你們餐廳正在進行募資，對於你們的理念和未來的計畫感到非常興趣。我想進一步了解一下，如果餐廳順利
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default plan_id;
