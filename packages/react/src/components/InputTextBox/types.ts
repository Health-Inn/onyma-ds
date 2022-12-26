import { InputTextProps } from "../InputText/types";

export type InputTextBoxProps = {
  label?: string | null;
  feedbackText?: string;
  error?: boolean;
  required?: boolean;
} & InputTextProps;
