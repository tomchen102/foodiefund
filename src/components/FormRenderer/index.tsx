import React from "react";
import { FieldValues, Path } from "react-hook-form";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Checkbox } from "../ui/checkbox";
import { FormRendererProps } from "./types";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";

const FormRenderer = <T extends FieldValues>({
  label,
  name,
  control,
  text,
  id,
  type,
  placeholder,
  className,
}: FormRendererProps<T>) => {
  return (
    <FormField
      control={control}
      name={name as Path<T>}
      render={({ field }) => (
        <FormItem
          className={cn(type === "checkbox" ? "flex flex-row items-start space-x-3 space-y-0 rounded-md" : null)}
        >
          {type === "checkbox" ? null : (
            <FormLabel className="cursor-pointer" htmlFor={id}>
              {label}
            </FormLabel>
          )}
          <FormControl>
            {type === "checkbox" ? (
              <Checkbox id={id} checked={field.value} onCheckedChange={field.onChange} className={className} />
            ) : type === "textarea" ? (
              <Textarea placeholder={placeholder} rows={1} className={cn("resize-none", className)} {...field} />
            ) : (
              <Input {...field} id={id} type={type} placeholder={placeholder} className={className} />
            )}
          </FormControl>
          {type === "checkbox" && (
            <div className="!space-y-1 leading-none">
              <FormLabel className="cursor-pointer" htmlFor={id}>
                {label}
              </FormLabel>
              <FormDescription>{text}</FormDescription>
              <FormMessage />
            </div>
          )}
          {type !== "checkbox" && <FormMessage />}
        </FormItem>
      )}
    />
  );
};

export default FormRenderer;
