import { fontWeights } from "@onyma-ds/tokens";
import { titleCase } from "../../utils";
import * as SC from "./styles";

export const FontWeights = () => {
  return (
    <SC.Container>
      {Object.entries(fontWeights).map(([key, weight]) => (
        <SC.FontWeightInfos key={key}>
          <span>${key}</span>
          <SC.FontWeightExample weight={weight}>
            {titleCase(key)}
          </SC.FontWeightExample>
          <div>{weight}</div>
        </SC.FontWeightInfos>
      ))}
    </SC.Container>
  );
};
