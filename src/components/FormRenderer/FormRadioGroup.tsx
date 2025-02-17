import { FieldValues, Path, useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

import { FormFieldConfig } from "./types";

const FormRadioGroup = <T extends FieldValues>({
  label,
  name,
  options = [],
  className,
  disabled,
}: FormFieldConfig<T>) => {
  const { control } = useFormContext<T>();
  return (
    <div className="my-5">
      <FormField
        control={control}
        name={name as Path<T>}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                value={field.value}
                className="flex flex-col space-y-1"
                disabled={disabled}
              >
                {options.map((option) => {
                  const isSelected = field.value === option.value;
                  return (
                    <FormItem key={option.value} className="flex items-center space-x-3 border">
                      <FormControl>
                        <RadioGroupItem value={option.value} className={cn("ml-5 mt-2", className)} />
                      </FormControl>
                      <FormLabel
                        className={cn("w-full py-5 font-bold", isSelected ? "text-primary-dark" : "text-gray-700")}
                      >
                        {option.label}
                      </FormLabel>
                    </FormItem>
                  );
                })}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default FormRadioGroup;
