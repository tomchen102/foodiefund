"use client";

import parse from "html-react-parser";
import Image from "next/image";
import { useParams } from "next/navigation";

import AnimatedContainer from "@/components/AnimatedContainer";
import { useGetUserNewsId } from "@/hooks/uesUserNews";

const DetailContent = () => {
  const params = useParams();
  const id = params.detail_id as string;
  const { data, isLoading, isError } = useGetUserNewsId(id, "frontend");
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error: Failed to load data.</div>;
  }

  return (
    <AnimatedContainer>
      <div className="pb-5">
        <div className="border p-6">
          <div className="mb-6">
            {typeof data.image === "string" && data.image && (
              <Image
                src={data.image}
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-full object-contain"
                alt={data.title}
                priority
              />
            )}
          </div>
          <h2 className="mb-2 text-lg font-bold md:text-2xl">計畫更新: {data.title}</h2>
          <div className="mb-3">
            <span className="text-gray">發佈日期：{data.publicAt}</span>
          </div>
          <div className="prose mb-2">{parse(data.content ?? "")}</div>
        </div>
      </div>
    </AnimatedContainer>
  );
};

export default DetailContent;
