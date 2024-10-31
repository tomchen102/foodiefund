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
  halfWidth,
}: FormFieldConfig<T>) => {
  const { control } = useFormContext<T>();
  return (
    <div className={`my-5 ${halfWidth ? "!ml-0 w-full md:mr-4 md:w-1/2" : "w-full"}`}>
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
