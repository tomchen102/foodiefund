"use client";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ExperienceTalkListProps } from "@/types/ExperienceTalkListProps";

import { Icons } from "../Icons";

const MobileExperienceTalkCarousel = ({ data }: ExperienceTalkListProps) => {
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
              <li className="relative mb-4">
                <div className="clip-polygon bg-white p-3 pb-12">
                  <div className="mb-4">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full rounded-lg"
                      width={376}
                      height={200}
                      priority
                    />
                  </div>
                  <h3 className="mb-2 text-lg leading-6">{item.title}</h3>
                  <p className="pb-3">{item.description}</p>
                </div>
                <div className="absolute bottom-[-16px] left-6 flex w-full items-center">
                  <Image src={item.avatarUrl} alt={item.avatarAlt} className="mr-3" width={44} height={44} priority />
                  <div className="mr-auto">
                    <h4 className="font-bold">{item.avatarName}</h4>
                    <p className="text-gray">{item.avatarRole}</p>
                  </div>
                  <div className="mr-6 flex items-center">
                    <Icons.ViewFill dimension="s" className="text-gray-500" />
                    <p className="mr-3 text-gray-500">{item.views}人</p>
                    <Icons.FavoriteFill dimension="s" className="text-gray-500" />
                    <p className="text-gray">{item.favorites}人</p>
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

export default MobileExperienceTalkCarousel;
