import { FieldValues, Path, useFormContext } from "react-hook-form";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Switch } from "../ui/switch";

import { FormFieldConfig } from "./types";

const FormSwitch = <T extends FieldValues>({ label, name, id }: FormFieldConfig<T>) => {
  const { control } = useFormContext<T>();
  return (
    <div className="my-5">
      <FormField
        control={control}
        name={name as Path<T>}
        render={({ field }) => (
          <FormItem className="flex items-center">
            <FormLabel className="mr-3 mt-2">{label}</FormLabel>
            <FormControl>
              <Switch
                id={id}
                {...field}
                checked={field.value || false}
                onCheckedChange={(checked) => field.onChange(checked)}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default FormSwitch;
