import React from "react";
import { VariantTypes } from "./styles";

export type ButtonProps = {
  variant?: VariantTypes;
  ghost?: boolean;
} & React.ComponentPropsWithRef<"button">;
