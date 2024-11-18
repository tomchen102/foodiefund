"use client";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { UserNewsListResponseType } from "@/api/services/userNews/types";

export const createColumns = (
  handleEdit: (item: UserNewsListResponseType) => void,
  handleDelete: (item: UserNewsListResponseType) => void
): ColumnDef<UserNewsListResponseType>[] => [
  {
    id: "index",
    header: "編號",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "isActive",
    header: "是否啟用",
    cell: ({ row }) => {
      const item = row?.original;
      return <Switch checked={item.isActive}></Switch>;
    },
  },
  {
    accessorKey: "isTop",
    header: "是否置頂",
    cell: ({ row }) => {
      const item = row?.original;
      return <Switch checked={item.isTop}></Switch>;
    },
  },
  {
    accessorKey: "publicAt",
    header: "發表時間",
    cell: ({ row }) => {
      const date = new Date(row.getValue("publicAt"));
      return (
        <div className="lowercase">{date.toLocaleDateString() === "Invalid Date" ? "" : date.toLocaleDateString()}</div>
      );
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
