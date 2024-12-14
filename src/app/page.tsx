import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4">
      <h1 className="text-3xl">Estudo de formulários</h1>
      <nav>
        <ul>
          <li>
            <Link href="/formulario-card">1 - Formulário Card</Link>
          </li>
          <li>
            <Link href="/formulario-sem-lib">2 - Formulário Sem Lib</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
