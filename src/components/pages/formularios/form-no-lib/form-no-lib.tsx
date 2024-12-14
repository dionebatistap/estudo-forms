"use client";
import { Button } from "@/components/ui/button";
import { Inputfield } from "@/components/ui/input/field";
import { FormProvider, useForm } from "react-hook-form";

type ComponenteFormSemLibProps = {
  campo_one: string;
  campo_two: string;
};

const onSubmit = (data: ComponenteFormSemLibProps) => {
  console.log(data);
};

export const ComponenteFormSemLib = () => {
  const defaultValues: ComponenteFormSemLibProps = {
    campo_one: "default_one",
    campo_two: "default_two",
  };

  const methods = useForm<ComponenteFormSemLibProps>({ defaultValues });

  return (
    <div className="w-[350px]">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4">
            <Inputfield label="Campo One" name="campo_one" />
            <Inputfield label="Campo Two" name="campo_two" />
            <Button type="submit" className="w-max mt-6 ml-auto">
              Criar
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
