"use client";
import Badges from "@/components/Badges";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineCalendarMonth, MdPersonOutline } from "react-icons/md";
import { TiHeartFullOutline } from "react-icons/ti";
import { ProjectSummaryDataProps } from "./types";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from "next-share";

const ProjectSummary = ({ ...ProjectSummaryData }: ProjectSummaryDataProps) => {
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
          loading="lazy"
        />
        <Image
          src={ProjectSummaryData.imageUrlSm}
          width={100}
          height={240}
          alt="喵喵咖啡廳"
          className="w-full bg-cover bg-center md:hidden"
          loading="lazy"
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
              <MdPersonOutline size={20} className="mr-1 inline-block" />
              <span className="mr-1 text-sm font-medium text-gray">提案人</span>
              <span className="text-sm font-medium text-tertiary hover:underline">
                <Link href="#">{ProjectSummaryData.proposer}</Link>
              </span>
            </div>
            <div className="flex h-[30px] items-center">
              <MdOutlineCalendarMonth size={20} className="mr-1 inline-block" />
              <span className="mr-1 text-sm font-medium text-gray">開始於</span>
              <span className="text-sm font-medium text-tertiary">
                <time dateTime="2024/08/08 22:06">{ProjectSummaryData.startDate}</time>
              </span>
            </div>
          </div>
          <h1 className="my-3 text-2xl font-bold lg:text-4xl">{ProjectSummaryData.title}</h1>
          <p className="mb-6 text-sm font-medium lg:mb-auto lg:text-base">{ProjectSummaryData.description}</p>
          <div className="mb-7 lg:mb-10 lg:flex">
            <div className="mr-6 lg:w-[426px]">
              <div className="flex">
                <span className="mr-auto font-medium leading-6 text-gray">
                  目標 NT$ {ProjectSummaryData.targetAmount}
                </span>
                <span className="text-sm font-bold text-tertiary">{ProjectSummaryData.progress} %</span>
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
                <span className="mb-3 block text-sm font-medium text-[#27272A] lg:mb-5 lg:text-base">募資倒數</span>
                <span className="block text-2xl font-bold text-tertiary lg:text-[30px] lg:leading-9">
                  {ProjectSummaryData.endDate} 天
                </span>
              </div>
              <div className="w-1/2 rounded-lg border p-2 text-center lg:py-[14px]">
                <span className="mb-3 block text-sm font-medium text-[#27272A] lg:mb-5 lg:text-base">贊助人數</span>
                <span className="block text-2xl font-bold text-tertiary lg:text-[30px] lg:leading-9">
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
              <div className="fixed bottom-0 left-0 right-0 z-10 flex justify-center border-t bg-white p-4 lg:relative lg:justify-start lg:border-t-0 lg:p-0">
                <Button className="mr-5" variant="donateNow" size="lg" asChild>
                  <Link href="#">立即贊助</Link>
                </Button>
                <Button className="flex-shrink-0" variant="secondary" size="icon">
                  <TiHeartFullOutline size={24} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSummary;
