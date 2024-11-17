import { FieldValues, Path, useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { FormFieldConfig } from "./types";
import { useEffect, useState } from "react";
import Image from "next/image";

function isFile(value: unknown): value is File {
  return value instanceof File;
}
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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue(name as Path<T>, file as T[Path<T>]);
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
    }
  };

  const file = watch(name as Path<T>);

  useEffect(() => {
    if (type === "file" && isFile(file)) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [file, type]);

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
                <Input type="file" placeholder={placeholder} onChange={handleFileChange} ref={ref} />
              ) : (
                <Input
                  className={className}
                  placeholder={placeholder}
                  {...field}
                  type={type}
                  value={field.value || ""}
                  disabled={disabled}
                />
              )}
            </FormControl>
            <FormMessage />
            {type === "file" && previewUrl && (
              <div className="flex justify-center">
                <div className="relative mt-5 w-full overflow-hidden rounded-lg border border-gray-300">
                  <Image
                    src={previewUrl}
                    width={100}
                    height="100"
                    alt="Preview"
                    className="h-full w-full object-cover"
                  />
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
