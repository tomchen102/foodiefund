import { FieldValues, UseFormReturn } from "react-hook-form";

export interface Option {
  value: string;
  label: string;
}

export interface FormFieldConfig<T extends FieldValues> {
  id?: string;
  label: string;
  key: string;
  name: keyof T;
  type:
    | "text"
    | "password"
    | "email"
    | "number"
    | "tel"
    | "checkbox"
    | "textarea"
    | "select"
    | "switch"
    | "date"
    | "radio"
    | "file"
    | "editor";
  text?: string;
  className?: string;
  placeholder?: string;
  options?: Option[];
  required?: boolean;
  value?: string;
  halfWidth?: boolean;
  processed?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export interface FormRendererProps<T extends FieldValues> {
  FormFields: FormFieldConfig<T>[];
  methods: UseFormReturn<T>;
}
