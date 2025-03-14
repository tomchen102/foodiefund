import parse from "html-react-parser";
import Image from "next/image";

import { userNewsApi } from "@/api/services/userNews";
import AnimatedContainer from "@/components/AnimatedContainer";
import { UserNewsDetailResponseSchema } from "@/schema/UserNewsSchema";
import { safeParseResponse } from "@/utils/zodUtils";

const getData = async (projectId: string, id: string) => {
  const response = await userNewsApi.getById("frontend", projectId, id);
  const data = safeParseResponse(UserNewsDetailResponseSchema, response.data);

  return {
    data,
    revalidate: 86400,
  };
};

interface DetailProps {
  params: {
    detail_id: string;
  };
}

const Detail = async ({ params }: DetailProps) => {
  const projectId = "66fb66d32bebc04b1d517eb0";
  const { detail_id } = await params;
  console.log(detail_id);

  const { data } = await getData(projectId, detail_id);

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

export default Detail;
