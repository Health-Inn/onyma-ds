import { colors } from "@onyma-ds/tokens";
import { getContrast } from "polished";

import "./styles.css";

export const ColorsGrid = () => {
  const calculateContrast = (
    color: string,
    colorToCompare: string = "#fff"
  ) => {
    const contrast = getContrast(color, colorToCompare);
    return contrast < 3.5;
  };

  return (
    <div className="cg-container">
      {Object.entries(colors).map(([colorName, colorHex]) => (
        <div
          className="cg-container__item"
          style={{ backgroundColor: colorHex }}
        >
          <p className={`${calculateContrast(colorHex) ? "dark" : "light"}`}>
            ${colorName}
          </p>
        </div>
      ))}
    </div>
  );
};
