import Image from "next/image";

import { Icons } from "@/components/Icons";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { Brand, ComparisonTableProps } from "../../type";

const MobileTable = ({ brand, headMap }: ComparisonTableProps) => {
  const keys: Array<keyof Omit<Brand, "logoUrl">> = ["area", "fee"];

  return (
    <Table className="w-full border border-gray-200 md:hidden">
      <TableHeader>
        <TableRow>
          {["", ...keys.map((key) => headMap[key])].map((title, index) => (
            <TableHead key={index} className="h-[5.5rem] w-1/3 border border-gray-200 bg-gray-100 text-center">
              {title}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {brand.map((row, index) => (
          <TableRow key={index} className="h-[5.5rem]">
            <TableCell className={index > 0 ? "bg-gray-200" : "bg-primary-dark"}>
              <Image src={row.logoUrl} alt="Cropped Image" width={80} height={20} className="m-auto" />
            </TableCell>
            {keys.map((key) => (
              <TableCell
                key={key}
                className={
                  index > 0
                    ? "border border-gray-200 text-center"
                    : "border border-gray-200 bg-primary-light text-center"
                }
              >
                {key === "fee" ? (
                  row[key] ? (
                    <Icons.Check type="indicator" className="m-auto" />
                  ) : (
                    ""
                  )
                ) : (
                  row[key as keyof typeof row]
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MobileTable;
