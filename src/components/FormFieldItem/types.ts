import { Control } from "react-hook-form";

export interface FormFieldConfig<T> {
  label: string;
  name: T;
  type: string;
}

export type FormFieldItemProps<T> = Pick<FormFieldConfig<T>, "label" | "name" | "type"> & {
  control: Control;
};
