import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { AlertDialogTriggerDeleteProps } from "./types";
import { Icons } from "../Icons";

export function AlertDialogTriggerDelete({ title, deleteData }: AlertDialogTriggerDeleteProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="text-red-500">
          <Icons.Delete dimension="s" className="text-red-500" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            你確定要刪除這筆 <span className="text-red-500">{title}</span> 嗎?
          </AlertDialogTitle>
          <AlertDialogDescription>
            此操作無法撤銷。這將永久刪除您的資料並從我們的網站中刪除您的數據
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>取消</AlertDialogCancel>
          <AlertDialogAction onClick={deleteData}>刪除</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
