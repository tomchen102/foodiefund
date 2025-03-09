import React, { type JSX } from "react";
import { FieldValues, FormProvider } from "react-hook-form";

import FormCheckbox from "./FormCheckbox";
import FormDatePicker from "./FormDatePicker";
import FormInput from "./FormInput";
import FormRadioGroup from "./FormRadioGroup";
import FormSelect from "./FormSelect";
import FormSunEditor from "./FormSunEditor";
import FormSwitch from "./FormSwitch";
import FormTextarea from "./FormTextarea";
import { FormRendererProps, FormFieldConfig } from "./types";

const FormRenderer = <T extends FieldValues>({ FormFields, methods }: FormRendererProps<T>) => {
  return (
    <FormProvider {...methods}>
      <div className="my-5">
        {FormFields.reduce((acc: JSX.Element[], field: FormFieldConfig<T>, index: number) => {
          if (field.processed) {
            return acc;
          }
          const nextField = FormFields[index + 1];
          const shouldPair = nextField && field.halfWidth && nextField.halfWidth;

          if (field.type === "select" && shouldPair && nextField.type === "select") {
            FormFields[index + 1] = { ...nextField, processed: true };
            acc.push(
              <div key={`${field.key}-${nextField.key}-pair`} className="flex space-x-4">
                <FormSelect
                  key={field.key}
                  type={field.type}
                  label={field.label}
                  name={field.name}
                  options={field.options}
                  placeholder={field.placeholder}
                  halfWidth={field.halfWidth}
                  disabled={field.disabled}
                  onChange={field.onChange}
                />
                <FormSelect
                  key={nextField.key}
                  type={nextField.type}
                  label={nextField.label}
                  name={nextField.name}
                  options={nextField.options}
                  placeholder={nextField.placeholder}
                  halfWidth={nextField.halfWidth}
                  disabled={nextField.disabled}
                  onChange={nextField.onChange}
                />
              </div>
            );
          } else if (
            (field.type === "text" || field.type === "number") &&
            shouldPair &&
            (nextField.type === "text" || nextField.type === "number")
          ) {
            FormFields[index + 1] = { ...nextField, processed: true };
            acc.push(
              <div key={`${field.key}-${nextField.key}-pair`} className="block space-x-4 md:flex">
                <FormInput
                  key={field.key}
                  label={field.label}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  halfWidth={field.halfWidth}
                  disabled={field.disabled}
                  enableCrop={field.enableCrop}
                />
                <FormInput
                  key={nextField.key}
                  label={nextField.label}
                  name={nextField.name}
                  type={nextField.type}
                  placeholder={nextField.placeholder}
                  required={nextField.required}
                  halfWidth={nextField.halfWidth}
                  disabled={nextField.disabled}
                  enableCrop={field.enableCrop}
                />
              </div>
            );
          } else if (field.type === "textarea") {
            acc.push(
              <FormTextarea
                key={field.key}
                label={field.label}
                name={field.name}
                type="textarea"
                placeholder={field.placeholder}
                required={field.required}
                disabled={field.disabled}
              />
            );
          } else if (field.type === "radio") {
            acc.push(
              <FormRadioGroup
                key={field.key}
                label={field.label}
                name={field.name}
                options={field.options}
                orientation={field.orientation}
                type="radio"
                disabled={field.disabled}
              />
            );
          } else if (field.type === "select") {
            acc.push(
              <FormSelect
                key={field.key}
                type="select"
                label={field.label}
                name={field.name}
                options={field.options}
                placeholder={field.placeholder}
                halfWidth={field.halfWidth}
                disabled={field.disabled}
                onChange={field.onChange}
              />
            );
          } else if (field.type === "checkbox") {
            acc.push(
              <FormCheckbox
                key={field.key}
                label={field.label}
                name={field.name}
                type="checkbox"
                disabled={field.disabled}
              />
            );
          } else if (field.type === "date") {
            acc.push(
              <FormDatePicker
                key={field.key}
                label={field.label}
                name={field.name}
                type="date"
                disabled={field.disabled}
              />
            );
          } else if (field.type === "switch") {
            acc.push(
              <FormSwitch
                id={field.id}
                key={field.key}
                label={field.label}
                name={field.name}
                type="switch"
                disabled={field.disabled}
              />
            );
          } else if (field.type === "editor") {
            acc.push(
              <FormSunEditor
                id={field.id}
                key={field.key}
                label={field.label}
                name={field.name}
                buttonList={field.buttonList}
                type="editor"
              />
            );
          } else {
            acc.push(
              <FormInput
                key={field.key}
                label={field.label}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                halfWidth={field.halfWidth}
                disabled={field.disabled}
                enableCrop={field.enableCrop}
              />
            );
          }
          return acc;
        }, [])}
      </div>
    </FormProvider>
  );
};

export default FormRenderer;
