import { borderRadius, borderWidth } from "@onyma-ds/tokens";
import { titleCase } from "../../../utils";
import * as SC from "./styles";

export const Border = () => {
  return (
    <SC.Container>
      <SC.BorderType>
        <h2>Border Radius</h2>
        <SC.Borders>
          {Object.entries(borderRadius).map(([key, value], index, array) => (
            <SC.BorderSpecification>
              <SC.BoxIndicator
                long={index === array.length - 1}
                dark
                style={{ borderRadius: value }}
              />
              <span>${key}</span>
              <h3>{key.toLocaleUpperCase()}</h3>
              <p>{value}</p>
            </SC.BorderSpecification>
          ))}
        </SC.Borders>
      </SC.BorderType>

      <SC.BorderType>
        <h2>Border Width</h2>
        <SC.Borders>
          {Object.entries(borderWidth).map(([key, value]) => (
            <SC.BorderSpecification>
              <SC.BoxIndicator borderWidth={value} />
              <span>${key}</span>
              <h3>{titleCase(key)}</h3>
              <p>{value}</p>
            </SC.BorderSpecification>
          ))}
        </SC.Borders>
      </SC.BorderType>
    </SC.Container>
  );
};
