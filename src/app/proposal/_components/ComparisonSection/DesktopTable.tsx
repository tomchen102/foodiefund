import Image from "next/image";

import { Icons } from "@/components/Icons";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { Brand, ComparisonTableProps } from "../../type";

const DesktopTable = ({ brand, headMap }: ComparisonTableProps) => {
  const keys: Array<keyof Omit<Brand, "logoUrl">> = ["area", "fee"];

  return (
    <Table className="hidden border border-gray-200 md:table">
      <TableHeader>
        <TableRow className="h-[5.5rem]">
          <TableHead className="bg-gray-100"></TableHead>
          {brand.map((item, index) => (
            <TableHead key={index} className={index > 0 ? "bg-gray-200" : "bg-primary-dark"}>
              <Image src={item.logoUrl} alt="Cropped Image" width={126} height={32} className="m-auto" />
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {keys.map((key) => (
          <TableRow key={key} className="h-[5.5rem]">
            <TableHead className="bg-gray-100 text-center text-black">{headMap[key]}</TableHead>
            {brand.map((item, index) => (
              <TableCell
                key={index}
                className={
                  index > 0
                    ? "border border-gray-200 text-center"
                    : "border border-gray-200 bg-primary-light text-center"
                }
              >
                {key === "fee" ? (
                  item[key] ? (
                    <Icons.Check type="indicator" className="m-auto" />
                  ) : (
                    <Icons.Close className="m-auto" />
                  )
                ) : (
                  item[key as keyof typeof item]
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DesktopTable;
