"use client";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Badges from "@/components/Badges";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import { RecentProjectsListProps } from "@/types/RecentProjectsListProps";

import { Icons } from "../Icons";

const MobileRecentProjectsCarousel = ({ data }: RecentProjectsListProps) => {
  const currentPath = usePathname();
  return (
    <ul className="block md:hidden">
      <Carousel
        className="shadow-card-shadow"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {data.map((item) => {
            const href = currentPath.includes("projects") ? `/projects/${item.id}` : `/projects/${item.id}`;
            return (
              <CarouselItem key={item.id} className="relative">
                <li className="relative">
                  <div className="rounded-lg border border-solid border-gray-200 bg-white">
                    <div className="relative">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full rounded-tl-lg rounded-tr-lg"
                        width={376}
                        height={200}
                        priority
                      />
                      <Badges
                        text={item.projectType === "fundraising" ? "募資中" : "訂閱式"}
                        className="absolute left-3 top-3"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="mb-2 text-base">
                        <Link href={href} className="hover:text-primary-dark hover:underline">
                          {item.title}
                        </Link>
                      </h3>
                      <p className="mb-5 line-clamp-3">{item.description}</p>
                      <div className="flex items-center">
                        {item.projectType === "fundraising" && <Icons.Location />}
                        {item.projectType === "fundraising" && (
                          <span className="mr-auto font-bold text-gray-500">{item.place}</span>
                        )}
                        {item.projectType === "fundraising" && (
                          <span className="font-bold text-primary-dark">{item.percentage} %</span>
                        )}
                        {item.projectType === "subscription" && (
                          <div className="mr-auto flex items-center gap-3">
                            <div className="flex items-center">
                              <Icons.Location />
                              <span className="font-bold text-gray-500">{item.place}</span>
                            </div>
                            <div className="flex items-center">
                              <Icons.Account />
                              <span className="">{item.subscriberCount} 人訂閱</span>
                            </div>
                          </div>
                        )}
                      </div>
                      {item.projectType === "fundraising" && <Progress value={item.percentage} className="my-5" />}
                      <div className="flex">
                        {item.projectType === "fundraising" && (
                          <span className="mr-auto text-xl font-bold text-secondary">NT$ {item.currentAmount}</span>
                        )}
                        {item.projectType === "fundraising" && (
                          <span className="">
                            倒數 <span className="text-primary-dark">{item.reciprocal}</span> 天
                          </span>
                        )}
                        {item.projectType === "subscription" && (
                          <div className="mr-auto mt-3 flex items-center gap-3">
                            <span className="text-xl font-bold text-primary-dark">NT$ {item.currentAmount}</span>
                            <span className="">/ 每月</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </ul>
  );
};

export default MobileRecentProjectsCarousel;
