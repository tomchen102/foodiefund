import Skeleton from "@/components/ui/skeleton";

export const Loading = () => {
  const rows = Array.from({ length: 9 });
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {rows.map((_, rowIndex) => (
        <div key={rowIndex} className="rounded-lg bg-white p-4 shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <Skeleton className="h-6 w-full" />
          </div>
          <div className="mb-4">
            <Skeleton className="h-4 w-[100px]" />
          </div>
          <div className="flex items-center space-x-4">
            <div className="mr-auto flex">
              <Skeleton className="h-6 w-[30px]" />
            </div>
            <div className="flex items-center space-x-2">
              <Skeleton className="h-6 w-[30px]" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
