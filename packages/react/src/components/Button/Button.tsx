import { ButtonProps } from "./types";
import * as SC from "./styles";

export const Button = ({
  variant = "primary",
  buttonType = 'primary',
  ...rest
}: ButtonProps) => <SC.Container variant={variant} buttonType={buttonType} {...rest} />;
