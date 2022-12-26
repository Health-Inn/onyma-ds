import React from "react";
import * as SC from "./styles";
import { InputTextProps } from "./types";

export const InputText = ({
  type = "text",
  onChangeValue,
  onChange,
  ...rest
}: InputTextProps) => {
  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event);
    const { value, name } = event.target;
    onChangeValue && onChangeValue(value, name || "");
  };

  return <SC.Container type={type} onChange={handleChangeValue} {...rest} />;
};
