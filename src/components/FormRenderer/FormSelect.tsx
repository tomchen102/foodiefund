import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { FormFieldConfig } from "./types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

const FormSelect = <T extends FieldValues>({ label, name, options, placeholder, halfWidth }: FormFieldConfig<T>) => {
  const { control, setValue, watch } = useFormContext<T>();
  const currentValue = watch(name as Path<T>);

  useEffect(() => {
    if (options && options.length > 0) {
      const valueExists = options.some((option) => option.value === currentValue);

      if (!valueExists) {
        setValue(name as Path<T>, options[0].value as PathValue<T, Path<T>>, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        });
      }
    }
  }, [options, setValue, name, currentValue]);

  return (
    <div className={cn("my-5", halfWidth ? "w-1/2" : "w-full")}>
      <FormField
        control={control}
        name={name as Path<T>}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <Select onValueChange={field.onChange} value={field.value} defaultValue={options?.[0]?.value}>
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
