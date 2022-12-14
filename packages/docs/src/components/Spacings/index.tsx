import { spacings } from "@onyma-ds/tokens";
import { titleCase } from "../../utils";

import * as SC from "./styles";

export const Spacings = () => {
  const convertToPx = (sizeRem: string) => {
    return Number(sizeRem.replace("rem", "")) * 16 + "px";
  };

  return (
    <SC.Container>
      {Object.entries(spacings).map(([key, value]) => (
        <SC.Spacing key={key}>
          <SC.BoxIndicator spacing={value} />
          <span>${key}</span>
          <h3>{titleCase(key)}</h3>
          <p>{`${convertToPx(value)} | ${value}`}</p>
        </SC.Spacing>
      ))}
    </SC.Container>
  );
};
