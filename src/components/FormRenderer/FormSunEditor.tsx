import dynamic from "next/dynamic";
import { FieldValues, Path, useFormContext } from "react-hook-form";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";

import { FormFieldConfig } from "./types";
import "suneditor/dist/css/suneditor.min.css";
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const FormSunEditor = <T extends FieldValues>({ label, name, buttonList }: FormFieldConfig<T>) => {
  const { control } = useFormContext<T>();
  return (
    <div className="my-5">
      <FormField
        control={control}
        name={name as Path<T>}
        render={({ field }) => (
          <FormItem className="block">
            <FormLabel>{label}</FormLabel>
            <FormControl className="mr-2">
              <SunEditor
                {...field}
                height="500px"
                setContents={field.value}
                setOptions={{
                  buttonList: buttonList || [
                    ["undo", "redo"],
                    ["bold", "underline", "italic", "strike"],
                    ["fontColor", "hiliteColor", "align", "list", "table"],
                    ["link", "image", "video"],
                    ["fullScreen", "showBlocks", "preview"],
                  ],
                }}
                onChange={field.onChange}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default FormSunEditor;
