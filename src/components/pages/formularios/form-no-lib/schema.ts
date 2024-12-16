import { z } from "zod";

export const componenteFormSemLibSchema = z.object({
  campo_one: z
    .string({ required_error: "campo_one é obrigatório" })
    .min(3, { message: "Este campo é obrigatório" }),
  campo_two: z.string().optional(),
  outrocampo: z.string().optional(),
  register: z
    .string({ required_error: "campo_one é obrigatório" })
    .min(5, { message: "Minimo 5 caracteres" }),
  sobrenome: z
    .string({ required_error: "campo_one é obrigatório" })
    .max(6, { message: "Máximo 6 caracteres" }),
});

export type ComponenteFormSemLibSchema = z.infer<
  typeof componenteFormSemLibSchema
>;
