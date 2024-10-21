"use client";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Badges from "@/components/Badges";
import { TfiLocationPin } from "react-icons/tfi";
import { Progress } from "@/components/ui/progress";
import { RecentProjectsListProps } from "@/types/RecentProjectsListProps";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
                      <Badges text="募資中" className="absolute left-3 top-3" />
                    </div>
                    <div className="p-5">
                      <h3 className="mb-2 font-bold">
                        <Link scroll={true} href={href} className="hover:text-tertiary hover:underline">
                          {item.title}
                        </Link>
                      </h3>
                      <p className="mb-5 text-sm font-medium">{item.description}</p>
                      <div className="flex">
                        <TfiLocationPin size={20} className="mr-1" />
                        <span className="mr-auto text-sm font-bold text-gray">{item.place}</span>
                        <span className="text-sm font-bold text-tertiary">{item.percentage} %</span>
                      </div>
                      <Progress value={item.percentage} className="my-5" />
                      <div className="flex">
                        <span className="mr-auto text-xl font-bold text-secondary">NT$ {item.targetAmount}</span>
                        <span className="text-sm font-medium">倒數 {item.reciprocal} 天</span>
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
