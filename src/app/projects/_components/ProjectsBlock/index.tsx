"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Badges from "@/components/Badges";
import { Icons } from "@/components/Icons";
import { Progress } from "@/components/ui/progress";
import { RecentProjectsListProps } from "@/types/RecentProjectsListProps";

const ProjectsBlock = ({ data }: RecentProjectsListProps) => {
  const currentPath = usePathname();
  return (
    <ul className="gap-6 md:grid md:grid-cols-2 xl:grid-cols-4">
      {data.map((item) => {
        const href = currentPath.includes("projects") ? `/projects/${item.id}` : `/projects/${item.id}`;
        return (
          <li className="relative mt-6 flex flex-col" key={item.id}>
            <Link href={href} className="group">
              <div className="flex h-full flex-col rounded-lg border border-solid border-gray-200 bg-white">
                <div className="relative h-full overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full rounded-tl-lg rounded-tr-lg duration-300 ease-in-out group-hover:scale-110"
                    width={376}
                    height={200}
                    priority
                  />
                  {item.projectType === "fundraising" && <Badges text="募資中" className="absolute left-3 top-3" />}
                  {item.projectType === "subscription" && <Badges text="訂閱式" className="absolute left-3 top-3" />}
                </div>
                <div className="flex h-full flex-col p-5">
                  <h3 className="group-hover:text-primary-primary-hover mb-2 text-lg font-bold group-hover:underline">
                    <span>{item.title}</span>
                  </h3>
                  <p className="mb-5 line-clamp-3 font-medium">{item.description}</p>
                  <div className="mt-auto flex items-center">
                    {item.projectType === "fundraising" && (
                      <>
                        <Icons.Location type="indicator" />
                        <span className="mr-auto font-bold text-gray">{item.place}</span>
                        <span className="font-bold text-primary-dark">{item.percentage} %</span>
                      </>
                    )}
                    {item.projectType === "subscription" && (
                      <div className="mr-auto flex items-center gap-3">
                        <div className="flex items-center">
                          <Icons.Location type="indicator" />
                          <span className="mr-auto font-bold text-gray">{item.place}</span>
                        </div>
                        <div className="flex items-center">
                          <Icons.Account type="indicator" />
                          <span className="">{item.subscriberCount} 人訂閱</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {item.projectType === "fundraising" && <Progress value={item.percentage} className="my-3" />}
                  <div className="flex items-center">
                    {item.projectType === "fundraising" && (
                      <span className="mr-auto text-xl font-bold text-secondary">NT$ {item.currentAmount}</span>
                    )}
                    {item.projectType === "fundraising" && (
                      <span className="font-bold">
                        倒數 <span className="text-primary-dark">{item.reciprocal}</span> 天
                      </span>
                    )}
                    {item.projectType === "subscription" && (
                      <div className="mr-auto mt-3 flex items-center gap-3">
                        <span className="text-xl font-bold text-primary-dark">NT$ {item.currentAmount}</span>
                        <span className="font-bold">/ 每月</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectsBlock;
