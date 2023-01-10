import { fontSizes } from "@onyma-ds/tokens";
import * as SC from "./styles";

export const FontSizes = () => {
  const convertRemToPx = (sizeInRem: string) => {
    return Number(sizeInRem.replace("rem", "")) * 16 + "px";
  };

  return (
    <SC.Container>
      {Object.entries(fontSizes).map(([key, size]) => (
        <SC.FontSizeInfos key={key}>
          <SC.FontSizeExample size={size}>Aa</SC.FontSizeExample>
          <span>${key}</span>
          <h4>{key}</h4>
          <div>{`${convertRemToPx(size)} | ${size}`}</div>
        </SC.FontSizeInfos>
      ))}
    </SC.Container>
  );
};
