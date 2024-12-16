"use client";
import { Button } from "@/components/ui/button";
import { Inputfield } from "@/components/ui/input_controller/field";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { componenteFormSemLibSchema } from "@/components/pages/formularios/form-no-lib/schema";
import type { ComponenteFormSemLibSchema } from "@/components/pages/formularios/form-no-lib/schema";
import { InputfieldRegister } from "@/components/ui/input_register/field";

const onSubmit = (data: ComponenteFormSemLibSchema) => {
  console.log(data);
};

export const ComponenteFormSemLib = () => {
  const methods = useForm<ComponenteFormSemLibSchema>({
    resolver: zodResolver(componenteFormSemLibSchema),
  });

  return (
    <div className="w-[350px]">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4">
            <Inputfield label="Campo One" name="campo_one" />
            <Inputfield label="Campo Two" name="campo_two" />
            <InputfieldRegister label="Register" name="register" />
            <InputfieldRegister label="outrocampo" name="outrocampo" />
            <InputfieldRegister label="sobrenome" name="sobrenome" />
            <Button type="submit" className="w-max mt-6 ml-auto">
              Criar
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
