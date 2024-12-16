import { ComponentPureReacForm } from "@/components/pages/formularios/form-pure-hookform/pure-hook-form";

export default function PagePureReactHookForm() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4">
      <h1 className="text-3xl">Formulário Puro React Hook Form</h1>
      <ComponentPureReacForm />
    </main>
  );
}
