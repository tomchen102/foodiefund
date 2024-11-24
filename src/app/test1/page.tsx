"use client";
import SectionPadding from "@/components/SectionPadding";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FiPlus } from "react-icons/fi";
import ModalDialog from "@/components/ModalDialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormFieldConfig } from "@/components/FormRenderer/types";
import { useDialog } from "@/utils/DialogContext";
import { DataTable } from "@/components/Table/DataTable";
import DeleteDialog from "@/components/DeleteDialog";
import { createColumns } from "./Columns";
import { UserQuestionsAndAnswersListResponseType } from "@/api/services/userQuestionsAndAnswers/types";
import { userQuestionsAndAnswersResponseTypeSchema } from "@/schema/userQuestionsAndAnswers";
import {
  useDeleteUserQuestionsAndAnswersMutation,
  useGetUserQuestionsAndAnswers,
  usePostUserQuestionsAndAnswersMutation,
  useUpdateUserQuestionsAndAnswersMutation,
} from "@/hooks/UserQuestionsAndAnswers";
import "@/lib/msw/setup";
import TableSkeleton from "@/components/TableSkeleton";

const initialValues = {
  id: "",
  questions: "",
  answers: "",
};

const userNewsFormFields: FormFieldConfig<UserQuestionsAndAnswersListResponseType>[] = [
  { label: "問題", name: "questions", type: "text", key: "questions", required: true },
  { label: "答覆", name: "answers", type: "textarea", key: "answers", required: true },
];

const Test1 = () => {
  const methods = useForm<UserQuestionsAndAnswersListResponseType>({
    resolver: zodResolver(userQuestionsAndAnswersResponseTypeSchema),
    defaultValues: initialValues,
  });
  const { dialogState, openDialog, closeDialog } = useDialog<UserQuestionsAndAnswersListResponseType>();
  const { data, isFetching } = useGetUserQuestionsAndAnswers();
  const { mutate: DeleteUserNewsMutation } = useDeleteUserQuestionsAndAnswersMutation();
  const { mutate: createData } = usePostUserQuestionsAndAnswersMutation();
  const { mutate: updateData } = useUpdateUserQuestionsAndAnswersMutation();

  const handleEdit = (item: UserQuestionsAndAnswersListResponseType) => {
    methods.reset(item);
    openDialog("edit");
    console.log("Edit item:", item);
  };

  const handleDelete = (item: UserQuestionsAndAnswersListResponseType) => {
    console.log("Delete item:", item);
    openDialog("delete", item);
  };

  const deleteItem = (item: UserQuestionsAndAnswersListResponseType) => {
    console.log("Delete item", item);
    DeleteUserNewsMutation(item.id!);
    closeDialog();
  };

  const columns = createColumns(handleEdit, handleDelete);
  const columnHeaders = columns.map((column) => column.header as string);
  return (
    <SectionPadding className="container px-3 xl:px-0">
      <div>
        <div className="mb-5">
          <Select disabled={isFetching}>
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
          <h1 className="mr-3">常見問題</h1>
          <Button
            disabled={isFetching}
            onClick={() => {
              openDialog("add");
              methods.reset(initialValues);
            }}
          >
            <FiPlus size={20} />
          </Button>
          <ModalDialog<UserQuestionsAndAnswersListResponseType>
            FormFields={userNewsFormFields}
            dialogState={dialogState}
            closeDialog={closeDialog}
            methods={methods}
            initialValues={initialValues}
            createData={createData}
            updateData={updateData}
          />
          <DeleteDialog<UserQuestionsAndAnswersListResponseType>
            dialogState={dialogState}
            deleteItem={deleteItem}
            title={dialogState.currentItem?.questions || ""}
          />
        </div>
        {isFetching ? (
          <TableSkeleton columns={columnHeaders} />
        ) : (
          data && <DataTable className="mt-10" columns={columns} data={data} />
        )}
      </div>
    </SectionPadding>
  );
};

export default Test1;
