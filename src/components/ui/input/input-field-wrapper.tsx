import { Label } from "@radix-ui/react-label";
import { ReactNode } from "react";

type FieldWrapperProps = {
  label: string;
  children: ReactNode;
};

export const FieldWrapper = ({ label, children }: FieldWrapperProps) => {
  return (
    <div className="flex flex-col gap-1">
      <Label className="text-sm">{label}</Label>
      {children}
    </div>
  );
};
