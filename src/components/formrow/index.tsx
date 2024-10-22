import {} from "@/components/inputs";

export function FormRow({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-row justify-around gap-4">{children}</div>;
}

export function ButtonFormRow() {
  return <div></div>;
}

export function TitleFormRow({ title }: { title: string }) {
  return (
    <div className="flex flex-row justify-start">
      <h1 className="text-xl font-bold">{title}</h1>
    </div>
  );
}
export function SubtitleFormRow({ title }: { title: string }) {
  return (
    <div className="flex flex-row justify-start">
      <h2 className="text-lg font-bold">{title}</h2>
    </div>
  );
}
