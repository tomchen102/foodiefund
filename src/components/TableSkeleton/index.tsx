import React from "react";
import { TableSkeletonProps } from "./types";
import Skeleton from "../ui/skeleton";

const TableSkeleton = ({ columns }: TableSkeletonProps) => {
  const rows = Array.from({ length: 10 });

  return (
    <div className="mt-10">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {rows.map((_, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((_, colIndex) => (
                <td key={colIndex} className="whitespace-nowrap px-6 py-4">
                  <Skeleton className="h-6 w-full" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;
