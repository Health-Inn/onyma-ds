import * as SC from "./styles";
import { fonts } from "@onyma-ds/tokens";

export const Fonts = () => {
  return (
    <SC.Container>
      {Object.entries(fonts).map(([key, font]) => (
        <SC.FontInfos>
          <span>${key}</span>
          <SC.FontTitle font={font}>{key} - Heading & Body</SC.FontTitle>
          <p>{font}</p>
        </SC.FontInfos>
      ))}
    </SC.Container>
  );
};
