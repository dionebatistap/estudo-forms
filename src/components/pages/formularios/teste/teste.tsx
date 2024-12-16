"use client";

import { Button } from "@/components/ui/button";
import { InputfieldRegister } from "@/components/ui/input_register/field";
import { FormProvider, useForm } from "react-hook-form";

type ComponenteTesteData = {
  nome: string;
  sobrenome: string;
};

const onSubmit = (data: ComponenteTesteData) => {
  console.log(data);
};

export const FormTest = () => {
  const methods = useForm<ComponenteTesteData>();

  return (
    <div className="w-[350px]">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4">
            <InputfieldRegister label="Nome" name="nome" />
            <InputfieldRegister label="Sobrenome" name="sobrenome" />
            <Button type="submit" className="w-max mt-6 ml-auto">
              Criar
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
