"use client";
import { Progress } from "@/components/ui/progress";
import { ProgressOrg } from "./_components/progress";
import { MdOutlineRestaurant } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { FaCheckCircle } from "react-icons/fa";

import { ExpierieceSuccessListProp } from "@/types/ExpierieceSuccessListProps";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carouselWithDot";
import Image from "next/image";
const PcRecentProjectsList = ({ data }: ExpierieceSuccessListProp) => {
  return (
    <ul className="hidden md:block">
      <Carousel className="shadow-card-shadow">
        <CarouselContent className="w-[600px]">
          {data.map((item) => (
            <CarouselItem key={item.id} className="relative">
              <li className="relative">
                <a href="" className="group">
                  <div className="flex min-w-[550px] flex-row items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100">
                    <div className="h-[243px] overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={256}
                        height={256}
                        className="-py-5 h-full w-[256px] rounded-lg object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                        priority
                      />
                    </div>
                    <div className="px-5 py-5">
                      <h3 className="mb-2 font-bold group-hover:underline">{item.title}</h3>
                      <p className="mb-5 text-sm font-medium">{item.description}</p>
                      <div className="flex text-gray">
                        <TfiLocationPin size={20} className="mr-1" />
                        <span className="mr-auto text-sm font-bold text-gray">{item.address}</span>
                      </div>
                      <div className="mt-2 flex text-gray">
                        <MdOutlineRestaurant size={20} className="mr-1" />
                        <span className="mr-auto text-sm font-bold text-gray">{item.tag}</span>
                      </div>
                      <div>
                        <div className="relative my-5">
                          <Progress value={item.total} className="w-full" />
                          <FaCheckCircle
                            size={20}
                            className="absolute right-0 top-1/2 -translate-y-1/2 transform bg-white text-secondary"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="mx-3 text-sm font-bold">30天 成功募資</span>
                        <span className="ml-auto text-xl font-bold text-secondary">
                          NT$ {Intl.NumberFormat("en-US").format(item.total)}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
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
