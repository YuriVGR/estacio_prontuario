import { DynamicForm } from "@/components/dynamic_form";
import { step1 } from "@/interface/form";

export default function Form() {
  return (
    <>
      <DynamicForm formData={step1} />
    </>
  );
}
