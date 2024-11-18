"use client";
import SectionPadding from "@/components/SectionPadding";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FiPlus } from "react-icons/fi";
import { createColumns } from "./Columns";
import ModalDialog from "@/components/ModalDialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormFieldConfig } from "@/components/FormRenderer/types";
import { useDialog } from "@/utils/DialogContext";
import { DataTable } from "@/components/Table/DataTable";
import DeleteDialog from "@/components/DeleteDialog";
import { UserNewsListResponse } from "@/schema/UserNewsSchema";
import {
  useDeleteUserNewsMutation,
  useGetUserNews,
  usePostUserNewsMutation,
  useUpdateUserNewsMutation,
} from "@/hooks/uesUserNews";
import { UserNewsListResponseType } from "@/api/services/userNews/types";

const initialValues = {
  id: "",
  title: "",
  content: "",
  isTop: false,
  isActive: false,
  image: null,
};

const userNewsFormFields: FormFieldConfig<UserNewsListResponseType>[] = [
  { label: "標題", name: "title", type: "text", key: "title", required: true },
  { label: "圖片", name: "image", type: "file", key: "image" },
  { label: "內容", name: "content", type: "textarea", key: "content", required: true },
  { label: "是否置頂", name: "isActive", type: "switch", key: "isActive", id: "isTop" },
  { label: "是否啟用", name: "isTop", type: "switch", key: "isTop", id: "isTop" },
];

const Test = () => {
  const methods = useForm<UserNewsListResponseType>({
    resolver: zodResolver(UserNewsListResponse),
    defaultValues: initialValues,
  });
  const { dialogState, openDialog, closeDialog } = useDialog<UserNewsListResponseType>();
  const { data, isFetching } = useGetUserNews();
  const { mutate: DeleteUserNewsMutation } = useDeleteUserNewsMutation();
  const { mutate: createData } = usePostUserNewsMutation();
  const { mutate: updateData } = useUpdateUserNewsMutation();

  const handleEdit = (item: UserNewsListResponseType) => {
    methods.reset(item);
    openDialog("edit");
    console.log("Edit item:", item);
  };

  const handleDelete = (item: UserNewsListResponseType) => {
    console.log("Delete item:", item);
    openDialog("delete", item);
  };

  const deleteItem = (item: UserNewsListResponseType) => {
    console.log("Delete item", item);
    DeleteUserNewsMutation(item.id!);
    closeDialog();
  };

  const columns = createColumns(handleEdit, handleDelete);

  if (isFetching) return <div>Loading...</div>;

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
              openDialog("add");
              methods.reset(initialValues);
            }}
          >
            <FiPlus size={20} />
          </Button>
          <ModalDialog<UserNewsListResponseType>
            FormFields={userNewsFormFields}
            dialogState={dialogState}
            closeDialog={closeDialog}
            methods={methods}
            initialValues={initialValues}
            createData={createData}
            updateData={updateData}
          />
          <DeleteDialog<UserNewsListResponseType>
            dialogState={dialogState}
            deleteItem={deleteItem}
            title={dialogState.currentItem?.title || ""}
          />
        </div>
        {data && <DataTable className="mt-10" columns={columns} data={data} />}
      </div>
    </SectionPadding>
  );
};

export default Test;
