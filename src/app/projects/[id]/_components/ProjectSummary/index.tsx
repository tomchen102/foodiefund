"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from "next-share";
import React from "react";

import Badges from "@/components/Badges";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

import { ProjectSummaryDataProps } from "./types";

const ProjectSummary = ({ ...ProjectSummaryData }: ProjectSummaryDataProps) => {
  const pathname = usePathname();
  const isProjectList = pathname.includes("/projects/") && pathname.includes("/project-list");
  return (
    <section
      className="container lg:grid lg:gap-0 lg:px-3 lg:pb-[100px] lg:pt-[100px] xl:px-0"
      style={{ gridTemplateColumns: "42.4% 3.1% 54.5%" }}
    >
      <div>
        <Image
          src={ProjectSummaryData.imageUrlLg}
          width={550}
          height={550}
          alt="喵喵咖啡廳"
          className="hidden w-full bg-cover bg-center object-cover md:block lg:h-[550px]"
          priority
        />
        <Image
          src={ProjectSummaryData.imageUrlSm}
          width={100}
          height={240}
          alt="喵喵咖啡廳"
          className="w-full bg-cover bg-center md:hidden"
          priority
        />
      </div>
      <div className="w-10"></div>
      <div className="container m-0 px-3 pt-4 lg:p-0">
        <div className="flex h-full flex-col">
          <div className="mb-3">
            <Badges text={ProjectSummaryData.location} />
            <Badges text={ProjectSummaryData.restaurantType} />
          </div>
          <div className="lg:flex lg:items-center">
            <div className="mb-1 flex h-[30px] items-center lg:mb-0 lg:mr-5">
              <Icons.Account type="indicator" />
              <span className="mr-1 text-gray">提案人</span>
              <span className="text-primary-dark hover:underline">
                <Link href="#">{ProjectSummaryData.proposer}</Link>
              </span>
            </div>
            <div className="flex h-[30px] items-center">
              <Icons.Calendar type="indicator" />
              <span className="mr-1 text-gray">開始於</span>
              <span className="text-primary-dark">
                <time dateTime="2024/08/08 22:06">{ProjectSummaryData.startDate}</time>
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <h1 className="my-3 text-2xl font-bold lg:text-4xl">{ProjectSummaryData.title}</h1>

            {ProjectSummaryData.activeType == "A" && <Badges text="群眾募資" className="ml-2 h-1/2 text-xl" />}
            {ProjectSummaryData.activeType == "Z" && <Badges text="訂閱式" className="ml-2 h-1/2 text-xl" />}
          </div>
          <p className="mb-6 lg:mb-auto">{ProjectSummaryData.description}</p>
          <div className="mb-7 lg:mb-10 lg:flex">
            <div className="mr-6 lg:w-[426px]">
              <div className="flex">
                <span className="mr-auto leading-6 text-gray">目標 NT$ {ProjectSummaryData.targetAmount}</span>
                <span className="font-bold text-primary-dark">{ProjectSummaryData.progress} %</span>
              </div>
              <Progress value={ProjectSummaryData.progress} className="my-5" />
              <div className="mb-6 lg:mb-0">
                <span className="text-2xl font-bold text-secondary lg:text-[30px] lg:leading-9">
                  NT$ {ProjectSummaryData.currentAmount}
                </span>
              </div>
            </div>
            <div className="flex flex-shrink-0 gap-4 lg:w-[256px]">
              <div className="w-1/2 rounded-lg border p-2 text-center lg:py-[14px]">
                <span className="mb-3 block lg:mb-5">募資倒數</span>
                <span className="block text-2xl font-bold text-primary-dark lg:text-[30px] lg:leading-9">
                  {ProjectSummaryData.endDate} 天
                </span>
              </div>
              <div className="w-1/2 rounded-lg border border-gray-200 p-2 text-center lg:py-[14px]">
                <span className="mb-3 block lg:mb-5">贊助人數</span>
                <span className="block text-2xl font-bold text-primary-dark lg:text-[30px] lg:leading-9">
                  {ProjectSummaryData.numberOfBackers}人
                </span>
              </div>
            </div>
          </div>
          <div className="mb-8 lg:mb-0">
            <div className="flex flex-col">
              <ul className="mb-5 flex gap-3">
                <li>
                  <FacebookShareButton
                    className="hover:bg-gray-500"
                    url={`https://foodiefund.vercel.app/projects/${ProjectSummaryData.id}`}
                    title={ProjectSummaryData.title}
                    quote={ProjectSummaryData.description}
                    hashtag={`#群眾募資 ${ProjectSummaryData.title} #${ProjectSummaryData.proposer} #${ProjectSummaryData.restaurantType} #${ProjectSummaryData.location}`}
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                </li>
                <li>
                  <LineShareButton
                    url={`https://foodiefund.vercel.app/projects/${ProjectSummaryData.id}`}
                    title={ProjectSummaryData.title}
                  >
                    <LineIcon size={32} round />
                  </LineShareButton>
                </li>
                <li>
                  <TwitterShareButton
                    url={`https://foodiefund.vercel.app/projects/${ProjectSummaryData.id}`}
                    title={ProjectSummaryData.title}
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                </li>
              </ul>
              {isProjectList ? null : (
                <div className="fixed bottom-0 left-0 right-0 z-10 flex justify-center gap-3 border-t bg-white p-4 lg:relative lg:justify-start lg:border-t-0 lg:p-0">
                  <Button className="w-full" variant="secondary" asChild>
                    <Link href={`/projects/${ProjectSummaryData.id}/project-list`}>立即贊助</Link>
                  </Button>
                  <Button className="flex-shrink-0" variant="secondary" size="icon">
                    <Icons.FavoriteFill mode="dark" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSummary;
