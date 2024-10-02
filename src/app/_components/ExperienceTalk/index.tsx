import MobileCarousel from "@/app/_components/MobileCarousel";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { ExperienceTalkProps } from "./types";

const ExperienceTalk = ({ data }: ExperienceTalkProps) => {
  return (
    <section className="container px-3 pb-12 pt-8 md:pb-[120px] md:pt-20 xl:px-0">
      <div className="mb-3 flex md:mb-6">
        <h2 className="text-lg font-bold md:text-2xl">募資提案經驗談</h2>
        <Button className="ml-auto hidden items-center md:flex" variant="secondary" asChild>
          <Link href="/404">
            查看更多 <ChevronRightIcon className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <MobileCarousel data={data}></MobileCarousel>
      <ul className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <li key={item.id} className="relative">
            <div className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.15)]">
              <div className="clip-polygon mb-4 h-[440px] rounded-lg bg-[#E2E8E6] px-5 pt-5">
                <Image src={item.imageUrl} alt={item.title} className="mb-5 w-full" width={376} height={200} priority />
                <h3 className="mb-3 font-bold leading-6">{item.title}</h3>
                <p className="text-sm font-medium">{item.description}</p>
              </div>
            </div>

            <div className="absolute bottom-0 flex">
              <Image src={item.avatarUrl} alt={item.avatarAlt} className="ml-6 mr-3" width={44} height={44} priority />
              <div>
                <h4 className="mb-1 text-sm font-bold">{item.avatarName}</h4>
                <p className="text-sm text-[#71717A]">{item.avatarRole}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Button className="ml-auto mt-3 flex items-center md:hidden" variant="secondary" asChild>
        <Link href="/404">
          查看更多 <ChevronRightIcon className="ml-1 h-4 w-4" />
        </Link>
      </Button>
    </section>
  );
};

export default ExperienceTalk;
