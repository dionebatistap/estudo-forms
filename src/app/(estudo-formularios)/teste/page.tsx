import { ComponenteFormSemLib } from "@/components/pages/formularios/form-no-lib/form-no-lib";
import { FormTest } from "@/components/pages/formularios/teste/teste";

export default function PageFormularioTeste() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4">
      <h1 className="text-3xl">Formulário Teste</h1>

      <FormTest />
    </main>
  );
}
