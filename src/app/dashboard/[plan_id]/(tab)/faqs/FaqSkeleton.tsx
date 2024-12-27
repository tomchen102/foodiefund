import Skeleton from "@/components/ui/skeleton";

const FaqSkeleton = () => {
  return (
    <>
      <div className="mb-5 flex items-center justify-between">
        <Skeleton className="h-12 w-48" />
        <Skeleton className="h-9 w-32" />
      </div>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(12)].map((_, index) => (
          <li className="rounded-lg bg-white p-4 shadow-md" key={index}>
            <Skeleton className="mb-4 h-[calc(2*1.75rem)] w-full" />
            <Skeleton className="mb-4 h-[1.5rem] w-full" />
            <div className="flex items-center space-x-4">
              <div className="flex gap-3">
                <Skeleton className="h-9 w-[4.25rem]" />
                <Skeleton className="h-9 w-[4.25rem]" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FaqSkeleton;
