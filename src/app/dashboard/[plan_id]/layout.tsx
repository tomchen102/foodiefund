import { ProviderProps } from "@/types/ProviderType";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import LayoutContent from "./content";

const navMenu = {
  projectNav: [
    { title: "金華火腿主題咖啡屋", hrefUrl: "#" },
    { title: "喵喵咖啡廳", hrefUrl: "#" },
    { title: "龍蝦盛宴", hrefUrl: "#" },
  ],
};

export default async function ProjectsLayout(props: ProviderProps) {
  const { children } = props;

  return (
    <>
      <div className="container">
        <div className="lg:grid lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-3"></div>
          <div className="lg:pt-10">
            <DropdownMenu>
              <DropdownMenuTrigger className="mr-4 flex w-full items-center justify-start gap-2 border border-solid border-gray-200 bg-[#fff] px-3 py-3 focus-visible:outline-none md:min-w-60">
                <span className="mr-auto text-sm md:ml-1">金華火腿主題咖啡屋</span>
                <ChevronDownIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {navMenu.projectNav.map((item, index) => {
                  return (
                    <Link href={item.hrefUrl} key={index}>
                      <DropdownMenuItem className="border border-solid border-gray-200 hover:!bg-primary-light md:min-w-60">
                        {item.title}
                      </DropdownMenuItem>
                    </Link>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <LayoutContent>{children}</LayoutContent>
      </div>
    </>
  );
}
