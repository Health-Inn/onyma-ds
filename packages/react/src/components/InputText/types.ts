import { ComponentPropsWithRef } from "react";

export type InputTextProps = {
  onChangeValue?: (value: string, name: string) => void;
} & ComponentPropsWithRef<"input">;
