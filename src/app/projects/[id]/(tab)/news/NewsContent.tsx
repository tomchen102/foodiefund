"use client";
import { format } from "date-fns";
import parse from "html-react-parser";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { useGetUserNews } from "@/hooks/uesUserNews";

const NewsContent = () => {
  const { data, isLoading, isError } = useGetUserNews("frontend");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error: Failed to load data.</div>;
  }
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id} className="pb-5">
          <div className="border p-6">
            <h2 className="mb-2 text-lg font-bold md:text-2xl">
              <Link href={`news/${item.id}`} className="hover:text-primary-dark">
                {item.title}
              </Link>
            </h2>
            <div className="mb-2">
              <span className="text-gray">發佈日期：{format(new Date(item.publicAt!), "yyyy-MM-dd")}</span>
            </div>
            <div className="prose mb-2">{parse(item.intro ?? "")}</div>
            <div className="ml-[-12px]">
              <Link href={`news/${item.id}`} className={buttonVariants({ variant: "link" })}>
                閱讀更多
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NewsContent;
