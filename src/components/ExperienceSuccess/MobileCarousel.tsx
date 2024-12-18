"use client";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";

import { ExpierieceSuccessListProp } from "@/types/ExpierieceSuccessListProps";
import { Icons } from "../Icons";

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
              <li className="relative h-full">
                <div className="rounded-lg bg-white">
                  <div className="relative h-[256px] overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full rounded-tl-lg rounded-tr-lg object-cover"
                      width={376}
                      height={200}
                      priority
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 text-base">{item.title}</h3>
                    <p className="mb-5 text-sm font-medium">{item.description}</p>
                    <div className="flex items-center">
                      <Icons.Location dimension="s" className="size-8 text-gray-500" />
                      <span className="mr-auto text-sm font-bold text-gray-500">{item.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Icons.Restaurant dimension="s" className="size-8 text-gray-500" />
                      <span className="mr-auto text-sm font-bold text-gray-500">{item.tag}</span>
                    </div>
                    <div>
                      <div className="relative my-5 flex items-center">
                        <Progress value={item.total} className="w-[calc(100%-1rem)]" />
                        <Icons.CheckCircleFill dimension="s" className="absolute -right-2 text-secondary" />
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
