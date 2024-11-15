"use client";
import SectionPadding from "@/components/SectionPadding";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FiPlus } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { createColumns } from "./Columns";
import ModalDialog from "@/components/ModalDialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormFieldConfig } from "@/components/FormRenderer/types";
import { useDialog } from "@/utils/DialogContext";
import { useEffect, useState } from "react";
import { getProjectNewsData } from "@/mock/getProjectNewsData";
import { DataTable } from "@/components/Table/DataTable";

export interface ITableData {
  id: string;
  title: string;
  content: string;
  isActive: boolean;
}

export type dataQueryResponse = {
  data: ITableData[];
  message: string;
  success: boolean;
  pagination: {
    current_page: number;
    has_next: boolean;
    has_pre: boolean;
    total: number;
    total_pages: number;
  };
};

const initialValues = {
  id: "",
  title: "",
  content: "",
  isActive: false,
};

const NewsFormFields: FormFieldConfig<ITableData>[] = [
  { label: "標題", name: "title", type: "text", key: "title" },
  { label: "內容", name: "content", type: "textarea", key: "content" },
  { label: "是否置頂", name: "isActive", type: "switch", key: "isActive", id: "isActive" },
];

const Test = () => {
  const methods = useForm<ITableData>({
    resolver: zodResolver(z.object({ id: z.string(), title: z.string(), context: z.string(), isActive: z.boolean() })),
    defaultValues: initialValues,
  });
  const { dialogState, openDialog, closeDialog } = useDialog();
  const [tableData, setTableData] = useState<ITableData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleEdit = (item: ITableData) => {
    methods.reset(item);
    if (openDialog) {
      openDialog("edit");
    }
  };

  const handleDelete = (item: ITableData) => {
    console.log("Delete item:", item);
  };

  const columns = createColumns(handleEdit, handleDelete);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await getProjectNewsData();
        console.log("Fetched data:", result.data);

        if (Array.isArray(result.data)) {
          setTableData(result.data);
        } else {
          console.error("Data is not an array:", result.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <SectionPadding className="container px-3 xl:px-0">
      <div>
        <div className="mb-5">
          <Select>
            <SelectTrigger className="w-[255px]">
              <SelectValue placeholder="金華火腿主題咖啡屋" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="金華火腿主題咖啡屋">金華火腿主題咖啡屋</SelectItem>
              <SelectItem value="喵喵咖啡廳">喵喵咖啡廳</SelectItem>
              <SelectItem value="綠意盎然">綠意盎然</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center">
          <h1 className="mr-3">最新消息</h1>
          <Button
            onClick={() => {
              if (openDialog) {
                openDialog("add");
              }
              methods.reset(initialValues);
            }}
          >
            <FiPlus size={20} />
          </Button>
          <ModalDialog<ITableData>
            FormFields={NewsFormFields}
            dialogState={dialogState}
            closeDialog={closeDialog}
            methods={methods}
            initialValues={initialValues}
          />
          <div className="ml-auto">
            <div className="relative mr-3 flex flex-grow items-center justify-start md:mr-4">
              <IoIosSearch className="absolute left-[18px] text-base" />
              <Input
                className="h-[46px] rounded-none bg-[#fff] pl-10 text-sm md:min-w-60"
                type="text"
                placeholder="搜尋標題"
              />
            </div>
          </div>
        </div>
        <DataTable className="mt-10" columns={columns} data={tableData || []} />
      </div>
    </SectionPadding>
  );
};

export default Test;
