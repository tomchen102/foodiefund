import { FieldValues, Path, useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { FormFieldConfig } from "./types";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { cn } from "@/lib/utils";

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
                        <RadioGroupItem
                          value={option.value}
                          className={cn(
                            "ml-5 mt-2 h-4 w-4 border-gray-300 bg-gray-100 text-secondary focus:ring-2 focus:ring-secondary dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-secondary",
                            className
                          )}
                        />
                      </FormControl>
                      <FormLabel
                        className={cn("w-full py-5 font-bold", isSelected ? "text-secondary" : "text-gray-700")}
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
