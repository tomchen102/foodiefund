"use client";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
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
                <div className="overflow-hidden rounded bg-white">
                  <div className="relative h-[256px] overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full object-cover"
                      width={376}
                      height={200}
                      priority
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 text-lg">{item.title}</h3>
                    <p className="mb-5 font-medium">{item.description}</p>
                    <div className="flex items-center">
                      <Icons.Location type="indicator" />
                      <span className="text-gray">{item.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Icons.RestaurantFill type="indicator" />
                      <span className="text-gray">{item.tag}</span>
                    </div>
                    <div>
                      <div className="relative my-5 flex items-center">
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
              </li>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </ul>
  );
};

export default MobileCarousel;
