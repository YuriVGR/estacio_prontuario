import Link from "next/link";


export default function Home() {
  return (
    <main className="pt-14 px-6">
      <h1>Teste</h1>
      <Link href={'/form/step_1'}>Form</Link>
    </main>
  );
}
