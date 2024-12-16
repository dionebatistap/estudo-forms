import { ComponentProps } from "react";
import { Input } from ".";
import { Controller, useFormContext } from "react-hook-form";
import { FieldWrapper } from "./input-field-wrapper";

type InputfieldProps = ComponentProps<typeof Input> & {
  label: string;
  name: string;
};

export const Inputfield = ({ label, name, ...props }: InputfieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={""}
      render={({ field, fieldState }) => (
        <FieldWrapper label={label}>
          <Input {...props} {...field} />
          {fieldState.error && (
            <p className="text-sm text-red-500">{fieldState.error.message}</p>
          )}
        </FieldWrapper>
      )}
    />
  );
};
