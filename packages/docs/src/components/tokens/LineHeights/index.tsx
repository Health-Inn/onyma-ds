import { lineHeights } from "@onyma-ds/tokens";
import { titleCase } from "../../../utils";
import * as SC from "./styles";

export const LineHeights = () => {
  return (
    <SC.Container>
      {Object.entries(lineHeights).map(([key, lineHeight]) => (
        <SC.Infos key={key}>
          <span>${key}</span>
          <SC.Example lineHeight={lineHeight}>{titleCase(key)}</SC.Example>
          <div>{lineHeight}</div>
        </SC.Infos>
      ))}
    </SC.Container>
  );
};
