import Skeleton from "@/components/ui/skeleton";

const FaqCardSkeleton = ({ items = 9 }: { items?: number }) => {
  return (
    <>
      {[...Array(items)].map((_, index) => (
        <li className="rounded-lg bg-white p-4 shadow-md" key={index}>
          <Skeleton className="mb-4 h-[calc(2*1.75rem)] w-full" />
          <Skeleton className="mb-4 h-[1.5rem] w-full" />
          <div className="flex items-center space-x-4">
            <div className="mr-auto flex gap-3">
              <Skeleton className="mb-4 h-9 w-[4.25rem]" />
              <Skeleton className="mb-4 h-9 w-[4.25rem]" />
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default FaqCardSkeleton;
