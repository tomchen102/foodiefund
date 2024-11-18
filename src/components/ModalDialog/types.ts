import { UseFormReturn } from "react-hook-form";

import { FieldValues } from "react-hook-form";
import { UseMutateFunction } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { FormFieldConfig } from "../FormRenderer/types";
import { DialogState, DialogStateDetails } from "@/types/DialogState";

export interface ModalDialogProps<T extends FieldValues> {
  dialogState: DialogStateDetails<T>;
  updateIsOpen?: (newState: DialogState<T>) => void;
  closeDialog?: () => void;
  methods: UseFormReturn<T>;
  FormFields: FormFieldConfig<T>[];
  initialValues: T;
  createData?: UseMutateFunction<AxiosResponse<T>, AxiosError<AxiosError>, T>;
  updateData?: UseMutateFunction<AxiosResponse<T>, AxiosError<AxiosError>, T>;
}
