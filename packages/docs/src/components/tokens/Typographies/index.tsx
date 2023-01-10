import {
  typographies,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
} from "@onyma-ds/tokens";
import { replaceUnderlineBy, titleCase } from "../../../utils";

import * as SC from "./styles";

export const Typographies = () => {
  const findFontName = (fontValue: string) => {
    const fontIndex = Object.values(fonts).findIndex(
      (font) => font === fontValue
    );
    if (fontIndex >= 0) return Object.keys(fonts)[fontIndex];
    return "";
  };

  const findFontSizeName = (fontSizeValue: string) => {
    const fontIndex = Object.values(fontSizes).findIndex(
      (fontSize) => fontSize === fontSizeValue
    );
    if (fontIndex >= 0)
      return Object.keys(fontSizes)[fontIndex].toLocaleUpperCase();
    return "";
  };

  const findFontWeightName = (fontWeightValue: string) => {
    const fontIndex = Object.values(fontWeights).findIndex(
      (fontWeight) => fontWeight === fontWeightValue
    );
    if (fontIndex >= 0) return Object.keys(fontWeights)[fontIndex];
    return "";
  };

  const findLineHeightName = (LineHeightValue: string) => {
    const fontIndex = Object.values(lineHeights).findIndex(
      (LineHeight) => LineHeight === LineHeightValue
    );
    if (fontIndex >= 0)
      return Object.keys(lineHeights)[fontIndex].toLocaleUpperCase();
    return "";
  };

  return (
    <SC.Container>
      <h2>Guia de utilização de headings e bodies</h2>
      <SC.Table>
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Font Family</th>
            <th>Font Size</th>
            <th>Font Weight</th>
            <th>Line Height</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(typographies).map(([category, typography]) => (
            <tr key={category}>
              <td>{titleCase(replaceUnderlineBy(category))}</td>
              <td>{titleCase(findFontName(typography.fontFamily))}</td>
              <td>{findFontSizeName(typography.fontSize)}</td>
              <td>{titleCase(findFontWeightName(typography.fontWeight))}</td>
              <td>{findLineHeightName(typography.lineHeight)}</td>
            </tr>
          ))}
        </tbody>
      </SC.Table>
    </SC.Container>
  );
};
