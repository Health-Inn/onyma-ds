import { ButtonProps } from "./types";
import * as SC from "./styles";

export const Button = ({
  variant = "primary",
  ghost = false,
  ...rest
}: ButtonProps) => <SC.Container variant={variant} ghost={ghost} {...rest} />;
