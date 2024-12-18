import { newsResponseArraySchemaType } from "@/api/services/news/types";
import { Icons } from "@/components/Icons";

const NewInfo = ({ newsData }: { newsData: newsResponseArraySchemaType }) => {
  return (
    <div className="container flex items-start justify-start font-bold">
      <div className="z-10 -mt-8 flex w-full flex-col items-start gap-2 rounded-tl-3xl border-0 bg-white px-5 py-4 hover:cursor-pointer md:w-1/2">
        <h2 className="text-2xl font-bold text-secondary">最新消息</h2>
        <div className="flex w-full items-center md:justify-between">
          {newsData?.map((item) => (
            <p key={item._id} className="text-xl hover:text-primary-dark hover:underline">
              {item.title}
            </p>
          ))}
          <Icons.ArrowRight dimension="s" className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default NewInfo;
