import { FieldValues, Path, useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

import { FormFieldConfig } from "./types";

const FormRadioGroup = <T extends FieldValues>({
  label,
  name,
  options = [],
  orientation,
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
                className={cn("grid space-y-1", orientation ? "grid-cols-2 gap-5 md:grid-cols-6" : "grid-cols-1")}
                disabled={disabled}
              >
                {options.map((option) => {
                  const isSelected = field.value === option.value;
                  return (
                    <FormItem
                      key={option.value}
                      className={cn("flex items-center gap-3", orientation ? "" : "rounded-sm border")}
                    >
                      <FormControl>
                        <RadioGroupItem
                          value={option.value}
                          className={cn("mt-2", orientation ? "" : "ml-5", className)}
                        />
                      </FormControl>
                      <FormLabel
                        className={cn(
                          "w-full font-bold",
                          orientation ? "" : "py-5",
                          isSelected ? "text-primary-dark" : "text-gray-700"
                        )}
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
