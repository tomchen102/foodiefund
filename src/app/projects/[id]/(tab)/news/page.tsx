import parse from "html-react-parser";
import Link from "next/link";

import { userNewsApi } from "@/api/services/userNews";
import { buttonVariants } from "@/components/ui/button";
import { UserNewsListArrayResponseSchema } from "@/schema/UserNewsSchema";
import { safeParseResponse } from "@/utils/zodUtils";

const getData = async (projectId: string) => {
  const response = await userNewsApi.getAll("frontend", projectId);
  const data = safeParseResponse(UserNewsListArrayResponseSchema, response.data);
  return {
    data,
    revalidate: 86400,
  };
};

const News = async () => {
  const projectId = "66fb66d32bebc04b1d517eb0";
  const { data } = await getData(projectId);
  return (
    <div>
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
                <span className="text-gray">發佈日期：{item.publicAt}</span>
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
    </div>
  );
};

export default News;
