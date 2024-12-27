import { FieldValues, Path, useFormContext } from "react-hook-form";

import { Checkbox } from "../ui/checkbox";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";

import { FormFieldConfig } from "./types";

const FormCheckbox = <T extends FieldValues>({ label, name, className, disabled }: FormFieldConfig<T>) => {
  const { control } = useFormContext<T>();
  return (
    <div className="my-5">
      <FormField
        control={control}
        name={name as Path<T>}
        render={({ field }) => (
          <FormItem className="block">
            <FormControl className="mr-2">
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                className={className}
                value={field.value}
                disabled={disabled}
              />
            </FormControl>
            <FormLabel>{label}</FormLabel>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default FormCheckbox;
