import React from "react";
import { ButtonTypes, VariantTypes } from "./styles";

export type ButtonProps = {
  variant?: VariantTypes;
  buttonType?: ButtonTypes;
} & React.ComponentPropsWithRef<"button">;
