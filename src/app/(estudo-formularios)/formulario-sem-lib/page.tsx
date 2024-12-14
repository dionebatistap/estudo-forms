import { ComponenteFormSemLib } from "@/components/pages/formularios/form-no-lib/form-no-lib";

export default function PageFormularioSemLib() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4">
      <h1 className="text-3xl">Formulário Sem Lib</h1>
      <ComponenteFormSemLib />
    </main>
  );
}
