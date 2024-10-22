type InputProps = {
  label: string;
  placeholder?: string;
  onChange: React.ChangeEventHandler;
};

type OptionsProps = {
  label: string;
  value: string;
};

type DropdownProps = {
  label: string;
  options: OptionsProps[];
  onChange: React.ChangeEventHandler;
};

export function TextInput({ placeholder, label, onChange }: InputProps) {
  const inputId = label.replace(/\s+/g, "-").toLowerCase();
  return (
    <div className="flex w-full flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm font-medium">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        name={inputId}
        id={inputId}
        className="h-6 rounded-md px-1 text-black outline-none outline-1 outline-black"
      />
    </div>
  );
}

export function DateInput({ placeholder, label, onChange }: InputProps) {
  const inputId = label.replace(/\s+/g, "-").toLowerCase();
  return (
    <div className="flex w-full flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm font-medium">
        {label}
      </label>
      <input
        type="date"
        placeholder={placeholder}
        onChange={onChange}
        name={inputId}
        id={inputId}
        className="h-6 rounded-md px-1 text-black outline-none outline-1 outline-black"
      />
    </div>
  );
}

export function NumberInput({ placeholder, label, onChange }: InputProps) {
  const inputId = label.replace(/\s+/g, "-").toLowerCase();
  return (
    <div className="flex w-full flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm font-medium">
        {label}
      </label>
      <input
        type="number"
        placeholder={placeholder}
        onChange={onChange}
        name={inputId}
        id={inputId}
        className="h-6 rounded-md px-1 text-black outline-none outline-1 outline-black"
      />
    </div>
  );
}

export function TextBox({ label, placeholder, onChange }: InputProps) {
  const inputId = label.replace(/\s+/g, "-").toLowerCase();
  return (
    <div className="flex w-full flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm font-medium">
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        onChange={onChange}
        name={inputId}
        id={inputId}
        className="h-12 rounded-md px-1 outline outline-1 outline-black"
      />
    </div>
  );
}

export function Dropdown({ label, options, onChange }: DropdownProps) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <label htmlFor="" className="text-sm font-medium">
        {label}
      </label>
      <select
        name=""
        id=""
        onChange={onChange}
        className="h-6 rounded-md px-1 text-black outline outline-1 outline-black"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
