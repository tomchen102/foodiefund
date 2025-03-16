import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import RecentProjectsBlock from "@/components/RecentProjectsBlock";
import { buttonVariants } from "@/components/ui/button";
import { getOrderPaymentSuccessful } from "@/mock/getOrderPaymentSuccessful";
import { getRecentProjectsBlockData } from "@/mock/getRecentProjectsBlockData";
const PaymentSuccessful = async () => {
  const data = await getRecentProjectsBlockData();
  const orderPaymentSuccessfulData = await getOrderPaymentSuccessful();

  const formatPrice = (price: number) => {
    return price
      .toLocaleString("zh-TW", {
        style: "currency",
        currency: "TWD",
        maximumFractionDigits: 0,
      })
      .replace("$", "$ ");
  };

  return (
    <div>
      <div className="container">
        <div className="mx-auto mb-[60px] w-[200px] bg-white lg:w-80">
          <div className="text-center">
            <Image
              src="https://storage.googleapis.com/fir-express-80358.appspot.com/images/324048af-fae9-408c-877b-9197a3b30417.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=agH8k7r8WsRTOVwgKsB2AScNb7rYcqxZqdtR9tEpiHIFFGK%2BNdnKs6dlLO6go4M0xgp4kY9Fx%2FFbBWPLSBG4avRU5CmYNTayRVrbzdK4dKzJIfKdh6aW%2BcClOEg4APLLdYt3Csp9%2Bc3qqhbHMKzy08BRf%2BQWS2pkxhg4STL1qZs7N1d%2B48jagOu2gnGF5fbM7eVPx%2B0SfySjuQVsE%2BFztmb5ouD0smt1OdpiiCdrwpIIS01EbJFhNywVIj8xHnuY9DJUvbXLbavbkv1AMsRrElLe75cwCy1YczgRNuwVoUXVurUZkQ2lAgLU7rRdpa8sAOaUlKsHvmcZccbbsiZT%2BA%3D%3D"
              width={320}
              height={240}
              className="h-[150px] w-full bg-cover bg-center object-cover md:lg:h-[240px]"
              loading="lazy"
              alt="付款成功"
            />
            <h5 className="mb-2 text-center text-black">付款成功!</h5>
            {orderPaymentSuccessfulData.map((item) => {
              return (
                <p key={item.order.id} className="mb-5 text-gray-500 lg:mb-10">
                  訂單編號： {item.order.order_no}
                </p>
              );
            })}
            <div className="text-center">
              <Link href="/projects" className={buttonVariants({ variant: "default", size: "lg" })}>
                返回清單
              </Link>
            </div>
          </div>
        </div>
        <div className="px-3 md:flex md:p-0">
          <div className="mb-4 flex w-full flex-col overflow-hidden rounded-lg border border-gray-200 md:mr-10 md:h-full md:w-1/3">
            <div className="h-12 w-full bg-[#f4f4f5] p-3 font-bold text-gray md:p-4">訂單資訊</div>
            <div className="flex bg-[#FFFFFF] p-3 md:p-5">
              <div className="mr-5 md:mr-10">
                <p className="mb-4 text-sm text-gray md:text-base">訂購人</p>
                <p className="mb-4 text-sm text-gray md:text-base">訂購日期</p>
                <p className="mb-4 text-sm text-gray md:text-base">聯絡人</p>
                <p className="mb-4 text-sm text-gray md:text-base">收件地址</p>
                <p className="mb-4 text-sm text-gray md:text-base">電話</p>
                <p className="mb-4 text-sm text-gray md:text-base">傳真</p>
                <p className="mb-4 text-sm text-gray md:text-base">統一編號</p>
                <p className="mb-4 text-sm text-gray md:text-base">訂單編號</p>
                <p className="mb-4 text-sm text-gray md:text-base">備註</p>
              </div>

              {orderPaymentSuccessfulData.map((item) => {
                return (
                  <div key={item.order.id}>
                    <p className="mb-4 text-sm font-bold md:text-base">{item.order.customer.name}</p>
                    <p className="mb-4 text-sm font-bold md:text-base">
                      {format(parseISO(item.order.order_date), "yyyy-MM-dd")}
                    </p>
                    <p className="mb-4 text-sm font-bold md:text-base">
                      {item.order.order_shippingInfo.contact_person}
                    </p>
                    <p className="mb-4 text-sm font-bold md:text-base">{item.order.order_shippingInfo.address}</p>
                    <p className="mb-4 text-sm font-bold md:text-base">{item.order.order_shippingInfo.phone}</p>
                    <p className="mb-4 text-sm font-bold md:text-base">
                      {item.order.order_shippingInfo.fax ? item.order.order_shippingInfo.fax : "-"}
                    </p>
                    <p className="mb-4 text-sm font-bold md:text-base">
                      {item.order.order_shippingInfo.tax_id ? item.order.order_shippingInfo.tax_id : "-"}
                    </p>
                    <p className="mb-4 text-sm font-bold md:text-base">{item.order.order_no}</p>
                    <p className="mb-4 text-sm font-bold md:text-base">
                      {item.order.order_shippingInfo.remark ? item.order.order_shippingInfo.remark : "-"}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mb-20 flex w-full flex-col overflow-hidden rounded-lg border border-gray-200 md:hidden">
            <div className="h-12 w-full bg-[#F4F4F5] p-3 font-bold text-gray">訂單內容</div>
            {orderPaymentSuccessfulData.map((item) => {
              return (
                <div key={item.order.id} className="flex flex-col bg-[#FFFFFF]">
                  {item.order_products.map((orderItem) => {
                    return (
                      <div key={orderItem.product_id} className="flex px-5 py-4">
                        <Image
                          src={orderItem.image}
                          width={80}
                          height={80}
                          className="mr-4 h-[80px] w-[80px] bg-cover bg-center object-cover"
                          loading="lazy"
                          alt={orderItem.title}
                        />
                        <div className="flex flex-col">
                          <div className="mb-1 font-bold">{orderItem.title}</div>
                          <div className="mb-1 text-gray">顏色：花色</div>
                          <div className="flex">
                            <div className="mr-[6px]">X{orderItem.quantity}</div>
                            <div className="w-full text-right font-bold">NT{formatPrice(orderItem.price)}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="px-5 pb-5">
                    <hr className="mb-6" />
                    <div className="mb-6">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-gray">折扣碼</span>
                        <span className="font-bold text-[#DC2626]">-{formatPrice(item.order.discount)}</span>
                      </div>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-gray">商品小計</span>
                        <span className="font-bold">{formatPrice(item.order.subtotal)}</span>
                      </div>

                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-gray">運費</span>
                        <span className="font-bold">{formatPrice(item.order.shipping_fee)}</span>
                      </div>
                    </div>
                    <hr className="mb-6" />
                    <div className="flex items-center justify-between">
                      <span className="text-gray">總計</span>
                      <span className="font-bold">NT{formatPrice(item.order.total_amount)}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mb-20 hidden w-full flex-col overflow-hidden rounded-lg border border-gray-200 md:block md:w-2/3">
            <div className="flex items-center justify-center">
              <div className="w-8/12">
                <div className="h-14 w-full bg-[#F4F4F5] px-5 py-4 font-bold text-gray">訂單內容</div>
              </div>
              <div className="w-2/12 text-center">
                <div className="h-14 w-full bg-[#F4F4F5] px-5 py-4 font-bold text-gray">數量</div>
              </div>
              <div className="w-3/12 text-center">
                <div className="h-14 w-full bg-[#F4F4F5] px-5 py-4 font-bold text-gray">小計</div>
              </div>
            </div>
            {orderPaymentSuccessfulData.map((item) => {
              return (
                <div key={item.order.id} className="bg-[#FFFFFF]">
                  {item.order_products.map((orderItem) => {
                    return (
                      <div key={orderItem.product_id} className="flex items-center justify-center">
                        <div className="w-8/12">
                          <div className="flex flex-col">
                            <div className="flex p-5">
                              <Image
                                src={orderItem.image}
                                width={100}
                                height={100}
                                className="mr-8 h-[100px] w-[100px] bg-cover bg-center object-cover"
                                loading="lazy"
                                alt={orderItem.title}
                              />
                              <div className="flex w-full flex-col justify-center">
                                <div className="mb-2 font-bold">{orderItem.title}</div>
                                <div className="text-gray">顏色：花色</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-2/12 text-center">
                          <span>{orderItem.quantity}</span>
                        </div>
                        <div className="w-3/12 pr-5 text-right">
                          <span className="font-bold">NT{formatPrice(orderItem.price)}</span>
                        </div>
                      </div>
                    );
                  })}
                  <div className="px-5 pb-5">
                    <hr className="mb-6" />
                    <div className="mb-6">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-gray">折扣碼</span>
                        <span className="font-bold text-[#DC2626]">-{formatPrice(item.order.discount)}</span>
                      </div>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-gray">商品小計</span>
                        <span className="font-bold">{formatPrice(item.order.subtotal)}</span>
                      </div>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-gray">運費</span>
                        <span className="font-bold">{formatPrice(item.order.shipping_fee)}</span>
                      </div>
                    </div>
                    <hr className="mb-6" />
                    <div className="flex items-center justify-between">
                      <span className="text-gray">總計</span>
                      <span className="font-bold">NT{formatPrice(item.order.total_amount)}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="container bg-primary-light px-3 py-10">
          <div className="text-center">
            <h5 className="mb-3 font-bold text-black">分享您的支持，讓更多人參與！</h5>
            <p className="mb-5 text-gray-500">
              感謝您的支持，您的訂單已成功完成！
              <br />
              現在，邀請您將這份美好的經驗分享給您的親朋好友，一起支持我們的專案或餐廳。
            </p>
          </div>
          <div className="mb-3 flex items-center bg-[#FFFFFF] p-3">
            <Image
              src="https://storage.googleapis.com/fir-express-80358.appspot.com/images/231c7ad1-a451-417b-a6cb-77eeb08d4b53.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=UIy3NXadfk51Chsv25RJsC217jt%2FWTy0dlfC%2B8ljdKll%2Bg8eK3%2FyuvqtPnOdeFpLZTszTgrjZ7dQ9ItpfGEGV1pDDQzjeV27d6DE4N9UQLqGfz9%2BTl%2FdUv5X6zu5IOp82JvxwY%2Bp%2BZLQA37gzz%2BVRlxvVqW9m9vBWl%2BB6FquPnonjWIOiZfJWEFZBHIHKjAlohA1wlp7gbfIVuW33rP%2FTcYBztCnfEN4eHbE8%2Fg0SBwWbbTf%2Bj1Nil%2BAtbq279%2Bfpmh2m2KHjKSDVMRczsh8kSBcGwN7FPtJk3rWuSJtpuqYuGs9NekbjRcSt7yJ0pvQ%2BYPj%2BbwI5YIm5rplU5DDAA%3D%3D"
              width={60}
              height={60}
              className="mr-3 h-[60px] w-[60px] bg-cover bg-center object-cover"
              loading="lazy"
              alt="告訴朋友"
            />
            <div className="w-full">
              <h5 className="mb-1 font-bold text-black">告訴朋友</h5>
              <p className="text-gray-500">
                訂單已發送到您的電子信箱
                <br />
                pigloveh101@gmail.com
              </p>
            </div>
          </div>
          <div className="mb-3 flex items-center bg-[#FFFFFF] p-3">
            <Image
              src="https://storage.googleapis.com/fir-express-80358.appspot.com/images/9e8e2667-2ce3-4baf-a3f2-7e8160fd36ff.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=QLueJ%2BTXHN8ZiBInK2lgh9EhF13w2SrIzhqAqvfXnqytPgttmKsX4iy74SHN7tGG2uUf7Wcg5BOR9z%2B9hev4kLQrK0l7BlG1pYvENjuApjajBY%2Bniq3sAOWiiwkCcJaXQOKOQba%2Fpyd0OYf0RIjF%2BrUzzxpBp%2FDvKmvzeGZju83N8YMJUZ9zEBKtcDwKiv270KWTMSiQUIa7EKEfOY5XyDSHms5i5DHAvY%2BrsbGAezNpwnHMnGHovJtYQPd6pLNw%2BYfU8U4Gy529S3RYyTq7uomJom6XbcFKU0FoJuM4U%2FNAUxtytKYrCeq7YQgCDjE7HNOosmFcY4R2vvxHHVZaFg%3D%3D"
              width={60}
              height={60}
              className="mr-3 h-[60px] w-[60px] bg-cover bg-center object-cover"
              loading="lazy"
              alt="在社群平台分享"
            />
            <div className="w-full">
              <h5 className="mb-1 font-bold text-black">在社群平台分享</h5>
              <p className="text-gray-500">
                透過 Facebook、Instagram 或 Twitter 分享您的訂單和支持，
                <br />
                標記我們並使用專屬的 #眾資成城 標籤，我們期待看到您的分享！
              </p>
            </div>
          </div>
          <div className="flex items-center bg-[#FFFFFF] p-3">
            <Image
              src="https://storage.googleapis.com/fir-express-80358.appspot.com/images/3ea8014d-4419-4532-869c-0f4022becaef.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=qaTW5YnMwk8dG3%2BFnAxjlFXDaMX9r2yNLC%2B7dAC%2BKq2tWTjNf0JEvXvPaAPH%2FkiKr9Am%2FsPJaVdRmpk8x%2FmdrkJlWSAm9%2FDqm9DleKPp4WxOmo3ypmb3c3ZrzxKGBVp%2Be8p%2FN2ppis8Z8aW7TaWGgYPVvpL4BcyvEcRFMb%2FNJUDn35oYYmR5%2FneTdCivNWuHv2FjvCABQpyOlWY4fuaydBi%2BIr2JxQKKDBdit6VL%2BU1O0Z8fh5yv5T6J0mVu4MFCKWTWjL9AdEVN7UfC5mOQZw0CKb0uT3Oz3y%2BcLbp0egL0BNmf2umkGCkuXGmJKJc8XxzfZvg77OQDl0i5jkWJcQ%3D%3D"
              width={60}
              height={60}
              className="mr-3 h-[60px] w-[60px] bg-cover bg-center object-cover"
              loading="lazy"
              alt="加入社群，發現更多驚喜"
            />
            <div className="w-full">
              <h5 className="mb-1 font-bold text-black">加入社群，發現更多驚喜</h5>
              <p className="mb-3 text-gray-500">
                追蹤我們的社群平台，獲取最新專案進度、會員專屬活動和更多美食故事！
                <br />
                每一次分享，都是對我們最大的鼓勵！
              </p>
              <div className="flex">
                <Image
                  src="https://storage.googleapis.com/fir-express-80358.appspot.com/images/f36c360a-e104-456b-906f-a380f9c1d305.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=IZEiNcSMMboLxrSVUOUpyh0IQMpAgrwactcSIx%2BtuU0DfDIEzqChZuGEgaM0hBgoXq603dPwtNktEWaQwXwNq%2BqzBk5BUeT%2FXe5xwVj31YrUdAbsKeorVtgad49RqFcu%2BxjfRH2yzXZ8B8KeCoice1XDX08nnYpEGKwCgLP8Oe%2BBoX7mPsrgKibnSYRKe5hpey2b6pb6JKHeKx6aaPkZ0rLKvpHv%2FI2cPEhtlgLxrKOUIwGJF1xD8jsm%2FBd6A3fdJ5gOrna5qcW7Pamk90fCmSynyxxLZjhfNx21ZCPeLhyjIQeUm3bPrdqxd4vVLMOANOcys4Sm8sT%2FxsreO3KJlg%3D%3D"
                  width={28}
                  height={28}
                  className="mr-2 h-[28px] w-[28px] bg-cover bg-center object-cover"
                  loading="lazy"
                  alt="Facebook"
                />
                <Image
                  src="https://storage.googleapis.com/fir-express-80358.appspot.com/images/98ebb502-22e1-4464-b389-99afee301e5f.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=NtLmMXYh72L%2Bdt5NX6pXxFx5j6wdYoVBJZUPDgzoy5BifK75GDpKDQOfJkRlETpbwNdwmauerpOKy6lhVv05oHT%2BrH5oMKeruHC2EX8MS3516WxG8QDr61CROwJbkojNySiJKKtsbKdBf4QDDsI5i1Doq3KHRXAgBm1xydgRZPH5Vijzd8YbSWGmzJw8Hw4UAEgvYrb87DGd4aPBJSrmA2npg8OVGlxTl5wgG9jlN1or65M85jygEPF1gj14OWunVc3f7XXIkurrrl0O9NlwQ%2FXJMWioH1jJEGpEZ0k7IFPuW8QVn4t5Y0cTFlUwJsQRtxWDyFmxF2%2BdiecY34ILFQ%3D%3D"
                  width={28}
                  height={28}
                  className="mr-2 h-[28px] w-[28px] bg-cover bg-center object-cover"
                  loading="lazy"
                  alt="Instagram"
                />
                <Image
                  src="https://storage.googleapis.com/fir-express-80358.appspot.com/images/2b6cc9ab-decb-4414-b6ba-9307eb643475.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=slcKcB6%2BggsmMJ3iXlOv3sv5qu1oLGHMWcLNzfHsUt1C4jRMb%2F2tCCFup9pCMTQd5HsgWzE5W71DFh2gtqoPmeWRSObfpzs6j3ZSy7%2BNN2aspED7ixBRhVyVFstQGZKQhsjX801ns5sZanHgLiiKnvMEETVS3N67Gfh7AVebqitjxk05mPRigtmnGXUAsEv54rDzl49ExlEoJSs7lrJu54SQV6OrdUfB61FWGkRjHaRDMSFeWzh9Cdgqdl%2F4TtFcqyY5bDF7DykZ9L5aAbrKGcjsp9wMmPXoedEmpsWvyjY%2BXPvfcijKIpOsP%2BzB1rJevuVP19pQa8ZCiR4dNemT4Q%3D%3D"
                  width={28}
                  height={28}
                  className="h-[28px] w-[28px] bg-cover bg-center object-cover"
                  loading="lazy"
                  alt="Line"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container px-3 py-10">
          <div className="text-center text-xl font-bold text-black">其他專案</div>
          <RecentProjectsBlock className="bg-white" data={data} gridType="four" />
        </div>
      </div>

      <div className="hidden md:block md:bg-white">
        <div className="absolute h-[612px] rounded-e-[500px] bg-primary-light md:w-[1278px]"></div>
        <div className="container relative px-3 py-20">
          <div className="mb-10 text-center">
            <h5 className="mb-5 text-2xl font-bold text-black">分享您的支持，讓更多人參與！</h5>
            <p className="mb-1 text-gray-500">感謝您的支持，您的訂單已成功完成！</p>
            <p className="text-gray-500">現在，邀請您將這份美好的經驗分享給您的親朋好友，一起支持我們的專案或餐廳。</p>
          </div>
          <div className="mb-6 flex">
            <div className="mr-6 flex w-full items-center bg-[#FFFFFF] p-6">
              <Image
                src="https://storage.googleapis.com/fir-express-80358.appspot.com/images/231c7ad1-a451-417b-a6cb-77eeb08d4b53.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=UIy3NXadfk51Chsv25RJsC217jt%2FWTy0dlfC%2B8ljdKll%2Bg8eK3%2FyuvqtPnOdeFpLZTszTgrjZ7dQ9ItpfGEGV1pDDQzjeV27d6DE4N9UQLqGfz9%2BTl%2FdUv5X6zu5IOp82JvxwY%2Bp%2BZLQA37gzz%2BVRlxvVqW9m9vBWl%2BB6FquPnonjWIOiZfJWEFZBHIHKjAlohA1wlp7gbfIVuW33rP%2FTcYBztCnfEN4eHbE8%2Fg0SBwWbbTf%2Bj1Nil%2BAtbq279%2Bfpmh2m2KHjKSDVMRczsh8kSBcGwN7FPtJk3rWuSJtpuqYuGs9NekbjRcSt7yJ0pvQ%2BYPj%2BbwI5YIm5rplU5DDAA%3D%3D"
                width={84}
                height={84}
                className="mr-4 h-[84px] w-[84px] bg-cover bg-center object-cover"
                loading="lazy"
                alt="告訴朋友"
              />
              <div className="w-full">
                <h5 className="mb-2 text-lg font-bold text-black">告訴朋友</h5>
                <p className="text-gray-500">訂單已發送到您的電子信箱 pigloveh101@gmail.com</p>
              </div>
            </div>
            <div className="flex w-full items-center bg-[#FFFFFF] p-6">
              <Image
                src="https://storage.googleapis.com/fir-express-80358.appspot.com/images/9e8e2667-2ce3-4baf-a3f2-7e8160fd36ff.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=QLueJ%2BTXHN8ZiBInK2lgh9EhF13w2SrIzhqAqvfXnqytPgttmKsX4iy74SHN7tGG2uUf7Wcg5BOR9z%2B9hev4kLQrK0l7BlG1pYvENjuApjajBY%2Bniq3sAOWiiwkCcJaXQOKOQba%2Fpyd0OYf0RIjF%2BrUzzxpBp%2FDvKmvzeGZju83N8YMJUZ9zEBKtcDwKiv270KWTMSiQUIa7EKEfOY5XyDSHms5i5DHAvY%2BrsbGAezNpwnHMnGHovJtYQPd6pLNw%2BYfU8U4Gy529S3RYyTq7uomJom6XbcFKU0FoJuM4U%2FNAUxtytKYrCeq7YQgCDjE7HNOosmFcY4R2vvxHHVZaFg%3D%3D"
                width={84}
                height={84}
                className="mr-4 h-[84px] w-[84px] bg-cover bg-center object-cover"
                loading="lazy"
                alt="在社群平台分享"
              />
              <div className="w-full">
                <h5 className="mb-2 text-lg font-bold text-black">在社群平台分享</h5>
                <p className="text-gray-500">
                  透過 Facebook、Instagram 或 Twitter 分享您的訂單和支持，
                  <br />
                  標記我們並使用專屬的 #眾資成城 標籤，我們期待看到您的分享！
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center bg-[#FFFFFF] p-6">
            <Image
              src="https://storage.googleapis.com/fir-express-80358.appspot.com/images/3ea8014d-4419-4532-869c-0f4022becaef.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=qaTW5YnMwk8dG3%2BFnAxjlFXDaMX9r2yNLC%2B7dAC%2BKq2tWTjNf0JEvXvPaAPH%2FkiKr9Am%2FsPJaVdRmpk8x%2FmdrkJlWSAm9%2FDqm9DleKPp4WxOmo3ypmb3c3ZrzxKGBVp%2Be8p%2FN2ppis8Z8aW7TaWGgYPVvpL4BcyvEcRFMb%2FNJUDn35oYYmR5%2FneTdCivNWuHv2FjvCABQpyOlWY4fuaydBi%2BIr2JxQKKDBdit6VL%2BU1O0Z8fh5yv5T6J0mVu4MFCKWTWjL9AdEVN7UfC5mOQZw0CKb0uT3Oz3y%2BcLbp0egL0BNmf2umkGCkuXGmJKJc8XxzfZvg77OQDl0i5jkWJcQ%3D%3D"
              width={84}
              height={84}
              className="mr-4 h-[84px] w-[84px] bg-cover bg-center object-cover"
              loading="lazy"
              alt="加入社群，發現更多驚喜"
            />
            <div className="mr-4 w-full">
              <h5 className="mb-2 text-lg font-bold text-black">加入社群，發現更多驚喜</h5>
              <p className="text-gray-500">
                追蹤我們的社群平台，獲取最新專案進度、會員專屬活動和更多美食故事！
                <br />
                每一次分享，都是對我們最大的鼓勵！
              </p>
            </div>
            <div className="flex">
              <Image
                src="https://storage.googleapis.com/fir-express-80358.appspot.com/images/f36c360a-e104-456b-906f-a380f9c1d305.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=IZEiNcSMMboLxrSVUOUpyh0IQMpAgrwactcSIx%2BtuU0DfDIEzqChZuGEgaM0hBgoXq603dPwtNktEWaQwXwNq%2BqzBk5BUeT%2FXe5xwVj31YrUdAbsKeorVtgad49RqFcu%2BxjfRH2yzXZ8B8KeCoice1XDX08nnYpEGKwCgLP8Oe%2BBoX7mPsrgKibnSYRKe5hpey2b6pb6JKHeKx6aaPkZ0rLKvpHv%2FI2cPEhtlgLxrKOUIwGJF1xD8jsm%2FBd6A3fdJ5gOrna5qcW7Pamk90fCmSynyxxLZjhfNx21ZCPeLhyjIQeUm3bPrdqxd4vVLMOANOcys4Sm8sT%2FxsreO3KJlg%3D%3D"
                width={32}
                height={32}
                className="mr-3 h-[32px] w-[32px] bg-cover bg-center object-cover"
                loading="lazy"
                alt="Facebook"
              />
              <Image
                src="https://storage.googleapis.com/fir-express-80358.appspot.com/images/98ebb502-22e1-4464-b389-99afee301e5f.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=NtLmMXYh72L%2Bdt5NX6pXxFx5j6wdYoVBJZUPDgzoy5BifK75GDpKDQOfJkRlETpbwNdwmauerpOKy6lhVv05oHT%2BrH5oMKeruHC2EX8MS3516WxG8QDr61CROwJbkojNySiJKKtsbKdBf4QDDsI5i1Doq3KHRXAgBm1xydgRZPH5Vijzd8YbSWGmzJw8Hw4UAEgvYrb87DGd4aPBJSrmA2npg8OVGlxTl5wgG9jlN1or65M85jygEPF1gj14OWunVc3f7XXIkurrrl0O9NlwQ%2FXJMWioH1jJEGpEZ0k7IFPuW8QVn4t5Y0cTFlUwJsQRtxWDyFmxF2%2BdiecY34ILFQ%3D%3D"
                width={32}
                height={32}
                className="mr-3 h-[32px] w-[32px] bg-cover bg-center object-cover"
                loading="lazy"
                alt="Instagram"
              />
              <Image
                src="https://storage.googleapis.com/fir-express-80358.appspot.com/images/2b6cc9ab-decb-4414-b6ba-9307eb643475.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=slcKcB6%2BggsmMJ3iXlOv3sv5qu1oLGHMWcLNzfHsUt1C4jRMb%2F2tCCFup9pCMTQd5HsgWzE5W71DFh2gtqoPmeWRSObfpzs6j3ZSy7%2BNN2aspED7ixBRhVyVFstQGZKQhsjX801ns5sZanHgLiiKnvMEETVS3N67Gfh7AVebqitjxk05mPRigtmnGXUAsEv54rDzl49ExlEoJSs7lrJu54SQV6OrdUfB61FWGkRjHaRDMSFeWzh9Cdgqdl%2F4TtFcqyY5bDF7DykZ9L5aAbrKGcjsp9wMmPXoedEmpsWvyjY%2BXPvfcijKIpOsP%2BzB1rJevuVP19pQa8ZCiR4dNemT4Q%3D%3D"
                width={32}
                height={32}
                className="mr-6 h-[32px] w-[32px] bg-cover bg-center object-cover"
                loading="lazy"
                alt="Line"
              />
            </div>
          </div>
        </div>
        <div className="relative bg-white">
          <div className="container py-20">
            <div className="text-center text-2xl font-bold text-black">其他專案</div>
            <RecentProjectsBlock className="bg-white" data={data} gridType="four" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
