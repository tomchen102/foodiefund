import { Skeleton } from "@/components/ui/skeleton";

const NewInfoSkeleton = () => {
  return (
    <div className="container flex items-start justify-start font-bold">
      <div className="z-10 -mt-8 flex w-full flex-col items-start rounded-tl-3xl border-0 bg-white px-5 py-4 hover:cursor-pointer md:w-1/2">
        <h2 className="text-2xl font-bold text-secondary">
          <Skeleton className="h-8 w-24" />
        </h2>
        <div className="flex w-full items-center md:justify-between">
          <Skeleton className="mt-2 h-9 w-[608px]" />
        </div>
      </div>
    </div>
  );
};

export default NewInfoSkeleton;
