import { ComponentProps } from "react";
import { Input } from ".";
import { useFormContext } from "react-hook-form";
import { FieldWrapper } from "./input-field-wrapper";

type InputfieldProps = ComponentProps<typeof Input> & {
  label: string;
  name: string;
};

export const InputfieldRegister = ({
  label,
  name,
  ...props
}: InputfieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FieldWrapper label={label}>
      <Input {...props} {...register(name)} />
      {errors[name] && (
        <p className="text-sm text-red-500">
          {errors[name]?.message as string}
        </p>
      )}
    </FieldWrapper>
  );
};
