import { UseMutateFunction } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { FieldValues, UseFormReturn } from "react-hook-form";

import { DialogState, DialogStateDetails } from "@/types/DialogState";
import { ErrorResponse } from "@/types/errorResponse";

import { FormFieldConfig } from "../FormRenderer/types";

export interface ModalDialogProps<T extends FieldValues> {
  dialogState: DialogStateDetails<T>;
  updateIsOpen?: (newState: DialogState<T>) => void;
  closeDialog?: () => void;
  methods: UseFormReturn<T>;
  FormFields: FormFieldConfig<T>[];
  initialValues: T;
  createData?: UseMutateFunction<AxiosResponse<T>, AxiosError<ErrorResponse>, T>;
  updateData?: UseMutateFunction<AxiosResponse<T>, AxiosError<ErrorResponse>, T>;
}
