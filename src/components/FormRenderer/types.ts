import { Control, FieldValues } from "react-hook-form";

export interface FormFieldConfig<T extends FieldValues> {
  id?: string;
  label: string;
  name: keyof T;
  type: "text" | "password" | "email" | "number" | "tel" | "checkbox";
  text?: string;
}

export interface FormRendererProps<T extends FieldValues> extends FormFieldConfig<T> {
  control: Control<T>;
}
