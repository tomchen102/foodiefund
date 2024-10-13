"use client";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { TfiLocationPin } from "react-icons/tfi";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineRestaurant } from "react-icons/md";
import { Progress } from "@/components/ui/progress";

import { ExpierieceSuccessListProp } from "@/types/ExpierieceSuccessListProps";

const MobileCarousel = ({ data }: ExpierieceSuccessListProp) => {
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
          {data.map((item) => (
            <CarouselItem key={item.id} className="relative">
              <li className="relative">
                <div className="rounded-lg bg-white">
                  <div className="relative">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full rounded-tl-lg rounded-tr-lg"
                      width={376}
                      height={200}
                      priority
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 font-bold">{item.title}</h3>
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
              </li>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </ul>
  );
};

export default MobileCarousel;
