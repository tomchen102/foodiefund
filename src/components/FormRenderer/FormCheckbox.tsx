import { FieldValues, Path, useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { FormFieldConfig } from "./types";
import { Checkbox } from "../ui/checkbox";

const FormCheckbox = <T extends FieldValues>({ label, name, className }: FormFieldConfig<T>) => {
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
