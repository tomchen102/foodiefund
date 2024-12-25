import { DialogStateDetails } from "@/types/DialogState";

export interface AlertDialogTriggerDeleteProps {
  title: string;
  deleteData: DeleteDataType;
}

export interface AlertDialogProps<T extends object> {
  dialogState: DialogStateDetails<T>;
  deleteItem: DeleteItemType<T>;
  title: string;
}

type DeleteDataType = {
  (): void;
};

type DeleteItemType<T> = {
  (item: T): void;
};
