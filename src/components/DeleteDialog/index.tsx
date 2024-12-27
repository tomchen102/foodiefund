import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import { useDialog } from "@/utils/DialogContext";

import { buttonVariants } from "../ui/button";

import { AlertDialogProps } from "./types";

const DeleteDialog = <T extends object>({ dialogState, deleteItem, title }: AlertDialogProps<T>) => {
  const { closeDialog } = useDialog();
  return (
    <AlertDialog open={dialogState.isOpen && dialogState.mode === "delete"}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>你確定要刪除這筆 {title} 嗎?</AlertDialogTitle>
          <AlertDialogDescription>
            此操作無法撤銷。這將永久刪除您的資料並從我們的網站中刪除您的數據
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={closeDialog}>取消</AlertDialogCancel>
          <AlertDialogAction
            className={cn(buttonVariants({ variant: "outline" }), "text-red-500")}
            onClick={() => dialogState.currentItem && deleteItem(dialogState.currentItem)}
          >
            刪除
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDialog;
