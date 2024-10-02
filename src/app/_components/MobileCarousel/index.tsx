"use client";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { MobileCarouselProps } from "./types";

const MobileCarousel = ({ data }: MobileCarouselProps) => {
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
                <div className="clip-polygon bg-[#E2E8E6] p-3 pb-12">
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
                  <h3 className="mb-2 text-lg font-bold leading-6">{item.title}</h3>
                  <p className="pb-3 text-sm font-medium">{item.description}</p>
                </div>
                <div className="absolute bottom-[-16px] left-6 flex items-center">
                  <Image src={item.avatarUrl} alt={item.avatarAlt} className="mr-3" width={44} height={44} priority />
                  <div>
                    <h4 className="text-sm font-bold">{item.avatarName}</h4>
                    <p className="text-sm text-[#71717A]">{item.avatarRole}</p>
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
