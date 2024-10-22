export interface TextInputProps {
  label: string;
  placeholder: string;
}

export interface TextBoxProps {
  label: string;
  placeholder: string;
}

interface OptionsProps {
  label: string;
  value: string;
}

export interface DropdownProps {
  label: string;
  options: OptionsProps[];
}

export interface DateInputProps {
  label: string;
  placeholder?: string;
}

export interface NumberInputProps {
  label: string;
  placeholder?: string;
}

export interface SubtitleProps {
  subtitle: string;
  description?: string;
}

export interface FormRow {
  subtitle?: SubtitleProps;
  textInput?: TextInputProps[];
  textBox?: TextBoxProps[];
  dropdown?: DropdownProps[];
  dateInput?: DateInputProps[];
  numberInput?: NumberInputProps[];
}

export interface FormInterface {
  title?: string;
  action: string;
  rows: FormRow[];
}

export const defaultQuestion: FormInterface[] = [];

export const step1: FormInterface[] = [
  {
    action: "",
    rows: [
      {
        dateInput: [{ label: "Data", placeholder: "" }],
        dropdown: [
          {
            label: "Frequência",
            options: [
              { label: "Selecione", value: "" },
              { label: "Semanal", value: "semanal" },
              { label: "Mensal", value: "mensal" },
            ],
          },
        ],
      },
      {
        textInput: [
          { label: "Dia e Hora", placeholder: "Insira o dia e a hora" },
        ],
      },
    ],
  },
  {
    title: "1- Identificação",
    action: "",
    rows: [
      {
        subtitle: {
          subtitle: "Dados Pessoais",
          description: "Por favor, preencha as informações básicas.",
        },
        textInput: [
          { label: "Nome", placeholder: "Insira seu nome" },
          { label: "Apelido", placeholder: "Insira seu apelido" },
        ],
      },
      {
        numberInput: [{ label: "Idade" }],
        dropdown: [
          {
            label: "Sexo",
            options: [
              { label: "Selecione", value: "" },
              { label: "Masculino", value: "masculino" },
              { label: "Feminino", value: "feminino" },
            ],
          },
        ],
      },
      {
        textInput: [
          {
            label: "Local de nascimento",
            placeholder: "Insira seu local de nascimento",
          },
        ],
        dateInput: [{ label: "Data de nascimento" }],
      },
      {
        subtitle: {
          subtitle: "Informações adicionais",
          description:
            "Forneça detalhes adicionais, como estado civil e religião.",
        },
        dropdown: [
          {
            label: "Estado Civil",
            options: [
              { label: "Selecione", value: "" },
              { label: "Solteiro(a)", value: "solteiro" },
              { label: "Casado(a)", value: "casado" },
              { label: "Divorciado(a)", value: "divorciado" },
              { label: "Viúvo(a)", value: "viuvo" },
              { label: "Divorciado(a)", value: "divorciado" },
              { label: "Separado(a)", value: "separado" },
              { label: "União Estável", value: "uniao_estavel" },
              { label: "Outro", value: "outro" },
            ],
          },
        ],
        textInput: [{ label: "Religião", placeholder: "Digite sua religião" }],
      },
      {
        subtitle: {
          subtitle: "Informações sobre o Cônjugue",
          description: "Preencha os dados referentes ao seu cônjuge.",
        },
        textInput: [{ label: "Nome do cônjuge", placeholder: "Digite aqui" }],
        numberInput: [{ label: "Idade do conjugue" }],
      },
      {
        subtitle: { subtitle: "Outras Informações" },
        textInput: [
          { label: "Escolaridade", placeholder: "Digite sua escolaridade" },
        ],
      },
      {
        textInput: [
          { label: "Profissão", placeholder: "Digite sua profissão" },
        ],
        dropdown: [
          {
            label: "Periodo",
            options: [
              { label: "Selecione", value: "" },
              { label: "Parcial", value: "parcial" },
              { label: "Integral", value: "integral" },
            ],
          },
        ],
      },
      {
        dropdown: [
          {
            label: "Não Trabalha ?",
            options: [
              { label: "Selecione", value: "" },
              { label: "Afastado", value: "afastado" },
              { label: "Aposentado", value: "aposentado" },
            ],
          },
        ],
      },
    ],
  },
];
