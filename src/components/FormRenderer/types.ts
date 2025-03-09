import { DefaultValues, FieldValues, UseFormReturn } from "react-hook-form";
import { z } from "zod";

import { MutationAction } from "@/types/mutationTypes";

export interface Option {
  value: string;
  label: string;
}

type FormFieldType =
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

export interface FormFieldConfig<T extends FieldValues> {
  id?: string;
  label: string;
  key: string;
  name: keyof T;
  type: FormFieldType;
  text?: string;
  className?: string;
  placeholder?: string;
  options?: Option[];
  required?: boolean;
  value?: string;
  halfWidth?: boolean;
  processed?: boolean;
  disabled?: boolean;
  orientation?: string;
  enableCrop?: boolean;
  buttonList?: string[][];
  onChange?: (value: string) => void;
}

export interface FormRendererProps<T extends FieldValues> {
  FormFields: FormFieldConfig<T>[];
  methods: UseFormReturn<T>;
}

export interface FormPageProps<T extends FieldValues> {
  initialValues: DefaultValues<T>;
  fetchedData: DefaultValues<T>;
  formFields: FormFieldConfig<T>[];
  create: MutationAction<T>;
  update: MutationAction<T>;
  redirectUrl: string;
  schema: z.ZodSchema<T>;
}
