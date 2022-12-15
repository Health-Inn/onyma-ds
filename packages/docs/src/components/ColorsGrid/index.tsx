import { colors } from "@onyma-ds/tokens";
import { replaceUnderlineBy, titleCase } from "../../utils/stringFormat";
import { colorCategorization } from "./categorization";

import "./styles.css";

export const ColorsGrid = () => {
  const colorsCategorized: { [key: string]: { [key: string]: string } } = {};
  Object.entries(colorCategorization).forEach(([category, colorKeys]) => {
    const colorsWithCategory: { [key: string]: string } = {};
    colorKeys.forEach((colorKey) => {
      colorsWithCategory[colorKey] = colors[colorKey as keyof typeof colors];
    });
    colorsCategorized[category] = colorsWithCategory;
  });

  return (
    <div className="cg-container">
      {Object.entries(colorsCategorized).map(([category, colors]) => (
        <div className="cg-container__categories">
          <h2>{`${titleCase(category)} Colors`}</h2>
          <div className="cg-container__categories__category">
            {Object.entries(colors).map(([colorKey, colorHex]) => (
              <div className="cg-container__categories__category__item">
                <div
                  className="cg-container__categories__category__item--color-box"
                  style={{ backgroundColor: colorHex }}
                />
                <p className="cg-container__categories__category__item--variable-name">
                  ${colorKey}
                </p>
                <p className="cg-container__categories__category__item--color-name">
                  {titleCase(replaceUnderlineBy(colorKey))}
                </p>
                <p className="cg-container__categories__category__item--color-hex">
                  {colorHex.toLocaleUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
