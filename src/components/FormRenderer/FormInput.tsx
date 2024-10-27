import { FieldValues, Path, useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { FormFieldConfig } from "./types";

const FormInput = <T extends FieldValues>({
  label,
  name,
  placeholder,
  type,
  className,
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
              <Input className={className} placeholder={placeholder} {...field} type={type} value={field.value || ""} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default FormInput;
