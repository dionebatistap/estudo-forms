"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input_controller";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

type ComponentePureReacFormData = {
  name: string;
  sobrenome: string;
  idade: string;
};

const onSubmit = (data: ComponentePureReacFormData) => {
  console.log(data);
};

export const ComponentPureReacForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ComponentePureReacFormData>();

  return (
    <div className="w-[350px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="name">Nome</Label>
          <Input
            placeholder="Digite seu nome..."
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-sm text-red-500">
              Esse campo é obrigatório...
            </span>
          )}
          <Label htmlFor="sobrenome">E-mail</Label>
          <Input
            placeholder="Digite seu sobrenome..."
            {...register("sobrenome")}
          />
          <Label htmlFor="password">Senha</Label>
          <Input
            type="idade"
            placeholder="Digite sua idade..."
            {...register("idade")}
          />
          <Button type="submit">Criar</Button>
        </div>
      </form>
    </div>
  );
};
