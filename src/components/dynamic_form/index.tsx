'use client'

import React, { useState } from "react";
import {
  TextInput,
  DateInput,
  NumberInput,
  TextBox,
  Dropdown,
} from "../inputs";
import { FormRow, TitleFormRow, SubtitleFormRow } from "../formrow";
import { FormInterface } from "@/interface/form";

interface DynamicFormProps {
  formData: FormInterface[];
}

export function DynamicForm({ formData }: DynamicFormProps) {
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formValues);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-2/5 flex-col gap-2" action="">
      {formData.map((formStep, formStepIndex) => (
        <div key={formStepIndex}>
          {/* Render Title if it exists */}
          {formStep.title && <TitleFormRow title={formStep.title} />}

          {formStep.rows.map((row, rowIndex) => (
            <div key={rowIndex} className="mb-4">
              {/* Render Subtitle and Description if they exist */}
              {row.subtitle && (
                <div className="mb-2">
                  <SubtitleFormRow title={row.subtitle.subtitle} />
                  {row.subtitle.description && (
                    <p>{row.subtitle.description}</p>
                  )}
                </div>
              )}

              <FormRow>
                {/* Render Text Inputs */}
                {row.textInput &&
                  row.textInput.map((inputProps, inputIndex) => (
                    <TextInput
                      key={inputIndex}
                      {...inputProps}
                      label={inputProps.label}
                      onChange={handleChange}
                    />
                  ))}

                {/* Render Text Boxes */}
                {row.textBox &&
                  row.textBox.map((inputProps, inputIndex) => (
                    <TextBox
                      key={inputIndex}
                      {...inputProps}
                      label={inputProps.label}
                      onChange={handleChange}
                    />
                  ))}

                {/* Render Date Inputs */}
                {row.dateInput &&
                  row.dateInput.map((inputProps, inputIndex) => (
                    <DateInput
                      key={inputIndex}
                      {...inputProps}
                      label={inputProps.label}
                      onChange={handleChange}
                    />
                  ))}

                {/* Render Number Inputs */}
                {row.numberInput &&
                  row.numberInput.map((inputProps, inputIndex) => (
                    <NumberInput
                      key={inputIndex}
                      {...inputProps}
                      label={inputProps.label}
                      onChange={handleChange}
                    />
                  ))}

                {/* Render Dropdowns */}
                {row.dropdown &&
                  row.dropdown.map((dropdownProps, dropdownIndex) => (
                    <Dropdown
                      key={dropdownIndex}
                      {...dropdownProps}
                      label={dropdownProps.label}
                      onChange={handleChange}
                    />
                  ))}
              </FormRow>
            </div>
          ))}
        </div>
      ))}
      <button
        type="submit"
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
      >
        Submit
      </button>
    </form>
  );
}
