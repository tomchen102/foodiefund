"use client";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ITableData } from "./page";
import { Switch } from "@/components/ui/switch";

export const createColumns = (
  handleEdit: (item: ITableData) => void,
  handleDelete: (item: ITableData) => void
): ColumnDef<ITableData>[] => [
  {
    accessorKey: "id",
    header: "編號",
  },
  {
    accessorKey: "isActive",
    header: "是否開啟",
    cell: ({ row }) => {
      const item = row?.original;
      return <Switch checked={item.isActive}></Switch>;
    },
  },
  {
    accessorKey: "publicAt",
    header: "發表時間",
    cell: ({ row }) => {
      const date = new Date(row.getValue("publicAt"));
      return <div className="lowercase">{date.toLocaleDateString()}</div>;
    },
  },
  {
    accessorKey: "title",
    header: "標題",
  },
  {
    id: "actions",
    header: "操作",
    enableHiding: false,
    cell: ({ row }) => {
      const item = row.original;
      return (
        <div>
          <Button className="mr-3 text-primary" variant="outline" onClick={() => handleEdit(item)}>
            <Pencil1Icon />
          </Button>
          <Button variant="outline" className="text-red-500" onClick={() => handleDelete(item)}>
            <TrashIcon />
          </Button>
        </div>
      );
    },
  },
];
