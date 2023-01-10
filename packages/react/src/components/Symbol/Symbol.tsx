import * as SC from "./styles";
import { SymbolProps } from "./types";

export const Symbol = ({
  name,
  type = "outlined",
  size,
  className,
  ...rest
}: SymbolProps) => {
  return (
    <SC.Container
      {...rest}
      className={`${className} ${["material-symbols", type].join("-")}`}
      size={size}
    >
      {name}
    </SC.Container>
  );
};
