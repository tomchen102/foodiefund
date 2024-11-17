"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { ModalDialogProps } from "./types";
import FormRenderer from "../FormRenderer";
import { FormProvider } from "react-hook-form";
import { useCallback } from "react";

const ModalDialog = <T extends object>({
  dialogState,
  methods,
  FormFields,
  createData,
  updateData,
  closeDialog,
}: ModalDialogProps<T>) => {
  const handleCancel = useCallback(() => {
    methods.reset();
    closeDialog && closeDialog();
  }, [methods, closeDialog]);

  const onSubmit = useCallback(
    async (data: T) => {
      try {
        if (dialogState.mode === "edit") {
          if (updateData) {
            await updateData(data);
          }
        } else {
          if (createData) {
            await createData(data);
          }
        }
        handleCancel();
      } catch (error) {
        console.error("提交失敗：", error);
      }
    },
    [handleCancel, dialogState.mode, createData, updateData]
  );
  return (
    <Dialog
      open={(dialogState.isOpen && dialogState.mode === "add") || dialogState.mode === "edit"}
      onOpenChange={handleCancel}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{dialogState.mode === "edit" ? "修改資料" : "新增資料"}</DialogTitle>
          <DialogDescription>請填寫以下表單以提交資料。</DialogDescription>
        </DialogHeader>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <FormRenderer<T> FormFields={FormFields} methods={methods} />
            <DialogFooter className="mt-10">
              <DialogClose asChild>
                <Button type="button" variant="outline" className="mr-auto" onClick={handleCancel}>
                  取消
                </Button>
              </DialogClose>
              <Button type="submit">{dialogState.mode === "edit" ? "修改" : "新增"}</Button>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default ModalDialog;
