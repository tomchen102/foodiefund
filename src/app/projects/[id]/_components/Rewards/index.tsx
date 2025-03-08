"use client";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useGetReward } from "@/hooks/useRewards";
import { useAuth } from "@/utils/providers/AuthProvider";

const Rewards = () => {
  const pathname = usePathname();
  const isProjectList = pathname.includes("/project-list");
  const { id } = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const { data } = useGetReward("frontend", "66fb66d32bebc04b1d517eb0");

  const handleDonateClick = () => {
    if (user) {
      router.push(`/projects/${id}/project-list/payment`);
    }
  };

  return (
    <>
      {isProjectList ? (
        <ul className="relative flex w-full gap-6">
          {data?.map((reward) => (
            <li key={reward.id} className="mb-5 w-[400px] flex-shrink-0 md:mb-8 md:min-w-[200px]">
              <Image
                src={reward.image as string}
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-full xl:h-[200px]"
                alt="Screenshots of the dashboard project showing desktop version"
                priority
              />
              <div className="border p-5">
                <h3 className="mb-2 text-lg">{reward.title}</h3>
                <div className="mb-2 flex">
                  <span className="mr-auto text-xl font-bold text-secondary">NT$ {reward.price}</span>
                  <span className="text-gray">已被贊助</span>
                  <span className="text-primary-dark">{reward.qty}</span>
                  <span className="text-gray">次</span>
                </div>
                <div className="mb-2">
                  <span className="font-bold text-gray">剩餘 {reward.remain_qty} 份</span>
                </div>
                <div className="prose mb-5 max-w-full break-words">
                  <div className="w-full overflow-hidden whitespace-normal break-words">
                    {parse(reward.content ?? "")}
                  </div>
                </div>
                <Button variant="donateNow" size="lg" asChild>
                  <Link href={`/projects/${id}/project-list/payment`} onClick={handleDonateClick}>
                    立即贊助
                  </Link>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {data?.map((reward) => (
            <li key={reward.id} className="mb-5 md:mb-8">
              <Image
                src={reward.image as string}
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-full xl:h-[200px]"
                alt="Screenshots of the dashboard project showing desktop version"
                priority
              />
              <div className="border p-5">
                <h3 className="mb-2 text-xl">{reward.title}</h3>
                <div className="mb-2 flex">
                  <span className="mr-auto text-xl font-bold text-secondary">NT$ {reward.price}</span>
                  <span className="text-gray">已被贊助</span>
                  <span className="text-primary-dark">
                    {reward.purchased_qty}/{reward.qty}
                  </span>
                  <span className="text-gray">次</span>
                </div>
                <div className="mb-2">
                  <span className="font-bold text-gray">剩餘 {reward.remain_qty} 份</span>
                </div>
                <div className="mb-5">
                  <p className="prose">{parse(reward.content ?? "")}</p>
                </div>
                <Button variant="donateNow" size="lg" asChild>
                  <Link href={`/projects/${id}/project-list/payment`} onClick={handleDonateClick}>
                    立即贊助
                  </Link>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Rewards;
