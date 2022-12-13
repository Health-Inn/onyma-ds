import { colors } from "@onyma-ds/tokens";
import { replaceUnderlineBy, titleCase } from "../../utils/stringFormat";

import "./styles.css";

export const ColorsGrid = () => {
  return (
    <div className="cg-container">
      {Object.entries(colors).map(([colorName, colorHex]) => (
        <div className="cg-container__item">
          <div
            className="cg-container__item--color-box"
            style={{ backgroundColor: colorHex }}
          />
          <p className="cg-container__item--variable-name">${colorName}</p>
          <p className="cg-container__item--color-name">
            {titleCase(replaceUnderlineBy(colorName))}
          </p>
          <p className="cg-container__item--color-hex">
            {colorHex.toLocaleUpperCase()}
          </p>
        </div>
      ))}
    </div>
  );
};
