"use client";
import { useParams } from "next/navigation";

import Badges from "@/components/Badges";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { useGetPlan } from "@/hooks/usePlan";

const MessageList = () => {
  const params = useParams();
  const id = params.plan_id as string;
  const { data } = useGetPlan(id ?? "");
  if (!data?.comments.length) return null;
  return (
    <div className="h-max-[705px] w-full border bg-white px-6 py-4">
      <div className="mb-6 flex">
        <div className="mr-auto">
          <h6>留言清單</h6>
        </div>
        <Button className="group text-gray" size="iconButton" variant="link">
          <span>查看更多</span>
          <Icons.ArrowRightFill dimension="s" className="text-gray" />
        </Button>
      </div>
      <ul>
        {data?.comments.map((comment, index) => (
          <li key={comment.id}>
            <div className={`w-full py-4 ${index !== data.comments.length - 1 ? "border-b border-[#D4D4D8]" : ""}`}>
              <div className="mb-3 flex">
                <span className="font-medium text-gray">{comment.name}</span>
                <div className="ml-auto mr-4">
                  <Badges text="未讀" className="mr-0" />
                </div>
                <span className="text-gray">{comment.createdAt}</span>
              </div>
              <div className="flex">
                <p className="font-medium">{comment.content}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
