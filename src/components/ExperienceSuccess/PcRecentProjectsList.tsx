"use client";
import Image from "next/image";
import Link from "next/link";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carouselWithDot";
import { Progress } from "@/components/ui/progress";
import { ExpierieceSuccessListProp } from "@/types/ExpierieceSuccessListProps";

import { Icons } from "../Icons";

import { ProgressOrg } from "./_components/progress";

const PcRecentProjectsList = ({ data }: ExpierieceSuccessListProp) => {
  return (
    <ul className="hidden md:block">
      <Carousel className="shadow-card-shadow">
        <CarouselContent className="w-[600px]">
          {data.map((item) => (
            <CarouselItem key={item.id} className="relative">
              <li className="relative">
                <Link href="" className="group">
                  <div className="flex min-w-[550px] flex-row items-center overflow-hidden rounded border border-gray-200 bg-white shadow hover:bg-gray-100">
                    <div className="h-[243px] overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={256}
                        height={256}
                        className="h-full w-[256px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                        priority
                      />
                    </div>
                    <div className="px-5">
                      <h3 className="mb-2 text-lg group-hover:underline">{item.title}</h3>
                      <p className="mb-5">{item.description}</p>
                      <div className="flex items-center">
                        <Icons.Location type="indicator" />
                        <span className="mr-auto text-gray">{item.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Icons.RestaurantFill type="indicator" />
                        <span className="mr-auto text-gray">{item.tag}</span>
                      </div>
                      <div>
                        <div className="relative my-3 flex items-center">
                          <Progress value={item.total} className="w-[calc(100%-1rem)]" />
                          <Icons.CheckCircleFill className="absolute -right-2 text-secondary" />
                        </div>
                      </div>
                      <div className="flex items-center justify-end gap-3">
                        <span className="font-bold">30天 成功募資</span>
                        <span className="text-xl font-bold text-secondary">
                          NT$ {Intl.NumberFormat("en-US").format(item.total)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="relative my-5">
        <ProgressOrg value={20} className="w-full bg-white" />
      </div>
    </ul>
  );
};

export default PcRecentProjectsList;
