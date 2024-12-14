"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Inputfield } from "@/components/ui/input/field";
import { FormProvider, useForm } from "react-hook-form";

type ComponenteFormCardData = { campocard: string };

const onSubmit = (data: ComponenteFormCardData) => {
  console.log(data);
};

export const ComponenteFormCard = () => {
  const defaultValues: ComponenteFormCardData = {
    campocard: "",
  };

  const methods = useForm<ComponenteFormCardData>({ defaultValues });

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Formulário</CardTitle>
        <CardDescription>
          Criando um fomulário com card shadcn ui.
        </CardDescription>
      </CardHeader>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Inputfield label="Meu campo" name="campocard" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button>Criar</Button>
          </CardFooter>
        </form>
      </FormProvider>
    </Card>
  );
};
