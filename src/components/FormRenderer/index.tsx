import { FieldValues, FormProvider } from "react-hook-form";
import FormInput from "./FormInput";
import { FormRendererProps, FormFieldConfig } from "./types";
import FormTextarea from "./FormTextarea";
import FormSelect from "./FormSelect";
import FormRadioGroup from "./FormRadioGroup";
import FormCheckbox from "./FormCheckbox";

const FormRenderer = <T extends FieldValues>({ FormFields, methods }: FormRendererProps<T>) => {
  return (
    <FormProvider {...methods}>
      <div className="my-5">
        {FormFields.map((field: FormFieldConfig<T>) =>
          field.type === "textarea" ? (
            <FormTextarea
              key={field.name as string}
              label={field.label}
              name={field.name}
              type="textarea"
              placeholder={field.placeholder}
              required={field.required}
            />
          ) : field.type === "radio" ? (
            <FormRadioGroup
              key={field.name as string}
              id={field.id}
              label={field.label}
              name={field.name}
              type="radio"
            />
          ) : field.type === "select" ? (
            <FormSelect
              key={field.name as string}
              label={field.label}
              name={field.name}
              options={field.options}
              type="select"
            />
          ) : field.type === "checkbox" ? (
            <FormCheckbox key={field.name as string} label={field.label} name={field.name} type="checkbox" />
          ) : (
            <FormInput
              key={field.name as string}
              label={field.label}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
            />
          )
        )}
      </div>
    </FormProvider>
  );
};

export default FormRenderer;
