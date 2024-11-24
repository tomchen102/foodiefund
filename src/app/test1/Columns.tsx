"use client";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { UserQuestionsAndAnswersListResponseType } from "@/api/services/userQuestionsAndAnswers/types";

export const createColumns = (
  handleEdit: (item: UserQuestionsAndAnswersListResponseType) => void,
  handleDelete: (item: UserQuestionsAndAnswersListResponseType) => void
): ColumnDef<UserQuestionsAndAnswersListResponseType>[] => [
  {
    id: "index",
    header: "編號",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "publicAt",
    header: "建立時間",
    cell: ({ row }) => {
      const date = new Date(row.getValue("publicAt"));
      return (
        <div className="lowercase">{date.toLocaleDateString() === "Invalid Date" ? "" : date.toLocaleDateString()}</div>
      );
    },
  },
  {
    accessorKey: "questions",
    header: "問題",
  },
  {
    accessorKey: "answers",
    header: "答覆",
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
