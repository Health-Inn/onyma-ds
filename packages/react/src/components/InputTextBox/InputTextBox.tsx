import * as ITSC from "../InputBoxStyles/styles";
import { InputText } from "../InputText/InputText";
import { InputTextBoxProps } from "./types";

export const InputTextBox = ({
  label,
  feedbackText,
  error,
  required,
  ...rest
}: InputTextBoxProps) => {
  return (
    <ITSC.Container error={error} required={required}>
      <ITSC.Label>{label}</ITSC.Label>
      <InputText {...rest} />
      <ITSC.FeedbackText>{feedbackText}</ITSC.FeedbackText>
    </ITSC.Container>
  );
};
