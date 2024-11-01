import { ControllerRenderProps, FieldValues, Path, useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { FormFieldConfig } from "./types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { cn } from "@/lib/utils";

const FormSelect = <T extends FieldValues>({
  label,
  name,
  options,
  placeholder,
  halfWidth,
  disabled,
  onChange,
}: FormFieldConfig<T>) => {
  const { control } = useFormContext<T>();

  const handleChange = (value: string, field: ControllerRenderProps<T, Path<T>>) => {
    field.onChange(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className={cn("my-5", halfWidth ? "w-1/2" : "w-full")}>
      <FormField
        control={control}
        name={name as Path<T>}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <Select
              onValueChange={(value: string) => handleChange(value, field)}
              value={field.value}
              defaultValue={field.value}
              disabled={disabled}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {options?.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default FormSelect;
