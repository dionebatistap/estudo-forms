"use client";
import { Button } from "@/components/ui/button";
import { Inputfield } from "@/components/ui/input/field";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const componenteFormSemLibSchema = z.object({
  campo_one: z.string().min(5),
  campo_two: z.string(),
});

//seria a ipagem do typescript
type ComponenteFormSemLibSchema = z.infer<typeof componenteFormSemLibSchema>;

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
            <Button type="submit" className="w-max mt-6 ml-auto">
              Criar
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
