import { FieldValues, Path, useFormContext } from "react-hook-form";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Textarea } from "../ui/textarea";

import { FormFieldConfig } from "./types";

const FormTextarea = <T extends FieldValues>({
  label,
  name,
  placeholder,
  className,
  disabled,
  required,
}: FormFieldConfig<T>) => {
  const { control } = useFormContext<T>();
  return (
    <div className="my-5">
      <FormField
        control={control}
        name={name as Path<T>}
        render={({ field }) => (
          <FormItem>
            {required && <span className="text-red-500">*</span>}
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Textarea
                placeholder={placeholder}
                {...field}
                value={field.value || ""}
                className={className}
                disabled={disabled}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default FormTextarea;
