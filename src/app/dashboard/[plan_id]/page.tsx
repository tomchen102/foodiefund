import AvatarCircle from "@/components/AvatarCircle";
import Badges from "@/components/Badges";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

import ProgressPlan from "../_components/ProgressPlan";

const plan_id = () => {
  return (
    <div className="bg-[#fdfbf8]">
      <ProgressPlan />
      <div className="mt-12 flex flex-col lg:mt-10 lg:flex-row">
        <div className="order-2 mt-4 flex flex-shrink-0 lg:order-1 lg:mr-6 lg:mt-0 lg:w-[23.28%] lg:flex-col">
          <div className="mr-4 w-full border bg-white p-4 lg:mb-6 lg:mr-0 lg:px-6 lg:py-4">
            <div className="mb-3 flex">
              <Icons.ThumbUpOffAlt type="indicator" className="text-[#079A91]" />
              <span className="ml-2 flex-shrink-0 font-medium leading-6 text-[#71717A]">平均贊助金額</span>
            </div>
            <div className="flex items-center">
              <h4 className="text-lg">NT$ 10,500</h4>
              <span className="ml-2 text-[#71717A]">元</span>
            </div>
          </div>
          <div className="w-full border bg-white p-4 lg:px-6 lg:py-4">
            <div className="mb-3 flex">
              <Icons.Time type="indicator" className="text-[#079A91]" />
              <span className="ml-2 font-medium leading-6 text-[#71717A]">執行時間</span>
            </div>
            <div className="flex items-center">
              <h4 className="text-lg">10</h4>
              <span className="mx-2 text-[#71717A]">天</span>
              <h4 className="text-lg">5</h4>
              <span className="ml-2 text-[#71717A]">小時</span>
            </div>
          </div>
        </div>
        <div className="order-1 w-full border bg-white px-6 pb-10 pt-4">
          <h6>募資進度</h6>
          <div className="mb-1 mt-4">
            <span className="font-medium leading-6 text-[#71717A]">累積金額</span>
          </div>
          <div className="mb-8 flex items-center">
            <div className="mr-auto">
              <h4>NT$ 1,001,000</h4>
            </div>
            <span className="ml-2 text-[#71717A]">最後募資期限：2025/8/10</span>
          </div>
          <Progress value={50} type="backend" />
        </div>
      </div>
      <div className="my-4 grid grid-cols-2 gap-4 lg:my-6 lg:grid-cols-4 lg:gap-6">
        <div className="w-full border bg-white p-4 lg:px-6 lg:py-4">
          <div className="mb-3 flex">
            <Icons.Bag type="indicator" className="text-[#079A91]" />
            <span className="ml-2 font-medium leading-6 text-[#71717A]">回購率</span>
          </div>
          <div className="flex items-center">
            <h4 className="text-lg">83.3</h4>
            <span className="ml-2 text-[#71717A]">%</span>
          </div>
        </div>
        <div className="w-full border bg-white p-4 lg:px-6 lg:py-4">
          <div className="mb-3 flex">
            <Icons.Coin type="indicator" className="text-[#079A91]" />
            <span className="ml-2 font-medium leading-6 text-[#71717A]">平均捐款額</span>
          </div>
          <div className="flex items-center">
            <h4 className="text-lg">NT$ 20,000</h4>
            <span className="ml-2 text-[#71717A]">元</span>
          </div>
        </div>
        <div className="w-full border bg-white p-4 lg:px-6 lg:py-4">
          <div className="mb-3 flex">
            <Icons.ListAlt type="indicator" className="text-[#079A91]" />
            <span className="ml-2 flex-shrink-0 font-medium leading-6 text-[#71717A]">累積訂單筆數</span>
          </div>
          <div className="flex items-center">
            <h4 className="text-lg">5</h4>
            <span className="ml-2 text-[#71717A]">筆</span>
          </div>
        </div>
        <div className="w-full border bg-white p-4 lg:px-6 lg:py-4">
          <div className="mb-3 flex">
            <Icons.KeyboardReturn type="indicator" className="text-[#079A91]" />
            <span className="ml-2 flex-shrink-0 font-medium leading-6 text-[#71717A]">累積退款金額</span>
          </div>
          <div className="flex items-center">
            <h4 className="text-lg">NT$ 54,000</h4>
            <span className="ml-2 text-[#71717A]">元</span>
          </div>
        </div>
      </div>
      <div className="mb-6 border bg-white px-6 py-4">
        <div className="mb-5 flex">
          <div className="mr-3">
            <h6>FOODIE 主題火腿餐廳</h6>
          </div>
          <div>
            <Badges text="台北" />
            <Badges text="咖啡廳" />
          </div>
          <div className="ml-auto">
            <Icons.Plan type="indicator" />
          </div>
        </div>
        <div className="flex">
          <ul className="mr-5 w-60">
            <li className="mb-4 flex">
              <div className="mr-5 w-20">
                <span className="font-medium text-[#71717A]">提案人姓名</span>
              </div>
              <span className="font-medium">Mr 火腿</span>
            </li>
            <li className="mb-4 flex">
              <div className="mr-5 w-20">
                <span className="font-medium text-[#71717A]">聯絡信箱</span>
              </div>
              <span className="font-medium">abcd@gmail.com</span>
            </li>
            <li className="flex">
              <div className="mr-5 w-20">
                <span className="font-medium text-[#71717A]">聯絡電話</span>
              </div>
              <span className="font-medium">0987654321</span>
            </li>
          </ul>
          <div className="border-l pl-5">
            <div className="mb-2">
              <span className="font-medium text-[#71717A]">專案簡介</span>
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
      <div className="flex gap-6">
        <div className="h-max-[705px] w-full border bg-white px-6 py-4">
          <div className="mb-4 flex">
            <div className="mr-auto">
              <h6>近期贊助清單</h6>
            </div>
            <Button className="group text-[#71717A]" size="iconButton" variant="link">
              <span>查看更多</span>
              <Icons.ArrowRightFill dimension="s" className="text-[#71717A]" />
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
                    <span className="font-medium text-[#71717A]">陳先生</span>
                    <div className="ml-auto">
                      <Badges text="付款成功" className="mr-0" />
                    </div>
                  </div>
                  <div className="flex">
                    <span className="font-bold">NT$ 2,000</span>
                    <div className="ml-auto">
                      <span className="text-[#71717A]">2024/8/10 13:53</span>
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
                    <span className="font-medium text-[#71717A]">兔子</span>
                    <div className="ml-auto">
                      <Badges text="退款中" className="mr-0" />
                    </div>
                  </div>
                  <div className="flex">
                    <span className="font-bold">NT$ 1,001,000</span>
                    <div className="ml-auto">
                      <span className="text-[#71717A]">2024/8/10 13:53</span>
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
                    <span className="font-medium text-[#71717A]">火腿</span>
                    <div className="ml-auto">
                      <Badges text="付款成功" className="mr-0" />
                    </div>
                  </div>
                  <div className="flex">
                    <span className="font-bold">NT$ 1,001,000</span>
                    <div className="ml-auto">
                      <span className="text-[#71717A]">2024/8/10 13:53</span>
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
                    <span className="font-medium text-[#71717A]">鴨子</span>
                    <div className="ml-auto">
                      <Badges text="退款成功" className="mr-0" />
                    </div>
                  </div>
                  <div className="flex">
                    <span className="font-bold">NT$ 1,001,000</span>
                    <div className="ml-auto">
                      <span className="text-[#71717A]">2024/8/10 13:53</span>
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
                    <span className="font-medium text-[#71717A]">N7</span>
                    <div className="ml-auto">
                      <Badges text="退款成功" className="mr-0" />
                    </div>
                  </div>
                  <div className="flex">
                    <span className="font-bold">NT$ 1,001,000</span>
                    <div className="ml-auto">
                      <span className="text-[#71717A]">2024/8/10 13:53</span>
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
                    <span className="font-medium text-[#71717A]">Lobinda</span>
                    <div className="ml-auto">
                      <Badges text="付款成功" className="mr-0" />
                    </div>
                  </div>
                  <div className="flex">
                    <span className="font-bold">NT$ 1,001,000</span>
                    <div className="ml-auto">
                      <span className="text-[#71717A]">2024/8/10 13:53</span>
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
            <Button className="group text-[#71717A]" size="iconButton" variant="link">
              <span>查看更多</span>
              <Icons.ArrowRightFill dimension="s" className="text-[#71717A]" />
            </Button>
          </div>
          <ul>
            <li>
              <div className="w-full border-b border-[#D4D4D8] pb-4">
                <div className="mb-3 flex">
                  <span className="font-medium text-[#71717A]">陳先生</span>
                  <div className="ml-auto mr-4">
                    <Badges text="未讀" className="mr-0" />
                  </div>
                  <span className="text-[#71717A]">2024/8/10 13:53</span>
                </div>
                <div className="flex">
                  <p className="font-medium">您好可以提供有什麼火腿精緻菜單料理嗎</p>
                </div>
              </div>
            </li>
            <li>
              <div className="w-full border-b border-[#D4D4D8] py-4">
                <div className="mb-3 flex">
                  <span className="font-medium text-[#71717A]">N7</span>
                  <div className="ml-auto mr-4">
                    <Badges text="未讀" className="mr-0" />
                  </div>
                  <span className="text-[#71717A]">2024/8/10 13:53</span>
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
                  <span className="font-medium text-[#71717A]">兔子</span>
                  <div className="ml-auto mr-4">
                    <Badges text="未讀" className="mr-0" />
                  </div>
                  <span className="text-[#71717A]">2024/8/10 13:53</span>
                </div>
                <div className="flex">
                  <p className="font-medium">什麼時候可以開幕，我要吃火腿</p>
                </div>
              </div>
            </li>
            <li>
              <div className="w-full py-4">
                <div className="mb-3 flex">
                  <span className="font-medium text-[#71717A]">Lobinda</span>
                  <div className="ml-auto">
                    <span className="text-[#71717A]">2024/8/10 13:53</span>
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
