import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
  disabled,
}: FormFieldConfig<T>) => {
  const { control, setValue, watch } = useFormContext<T>();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const previousUrlRef = useRef<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log("file:", file);
    if (file) {
      setValue(name as Path<T>, file as T[Path<T>]);
      const newPreviewUrl = URL.createObjectURL(file);
      setPreviewUrl(newPreviewUrl);
    }
  };

  const fieldValue = watch(name as Path<T>);

  useEffect(() => {
    let newPreviewUrl: string | null = null;

    if (type === "file" && typeof fieldValue === "string") {
      newPreviewUrl = fieldValue;
      setPreviewUrl(newPreviewUrl);
    }

    return () => {
      if (previousUrlRef.current?.startsWith("blob:")) {
        URL.revokeObjectURL(previousUrlRef.current);
      }
      previousUrlRef.current = newPreviewUrl;
    };
  }, [fieldValue, type]);

  return (
    <div className={`my-5 ${halfWidth ? "!ml-0 w-full md:mr-4 md:w-1/2" : "w-full"}`}>
      <FormField
        control={control}
        name={name as Path<T>}
        render={({ field: { ref, ...field } }) => (
          <FormItem>
            {required && <span className="text-red-500">*</span>}
            <FormLabel>{label}</FormLabel>
            <FormControl>
              {type === "file" ? (
                <Input type="file" placeholder={placeholder} onChange={handleFileChange} ref={ref} accept="image/*" />
              ) : (
                <Input
                  id={name as Path<T>}
                  className={className}
                  placeholder={placeholder}
                  {...field}
                  type={type}
                  value={field.value ?? ""}
                  disabled={disabled}
                  autoComplete={type === "password" ? "current-password" : "on"}
                  {...(type === "tel" && {
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    onChange: (e) => {
                      const value = e.target.value;
                      if (/^\d*$/.test(value)) {
                        const numericValue = value === "" ? "" : Number(value);
                        field.onChange(numericValue);
                      }
                    },
                  })}
                />
              )}
            </FormControl>
            <FormMessage />
            {type === "file" && previewUrl && (
              <div className="flex justify-center">
                <div className="relative mt-5 h-60 w-full overflow-hidden rounded-lg border border-gray-300">
                  <Image src={previewUrl} alt="Preview" fill className="object-contain" unoptimized />
                </div>
              </div>
            )}
          </FormItem>
        )}
      />
    </div>
  );
};

export default FormInput;
