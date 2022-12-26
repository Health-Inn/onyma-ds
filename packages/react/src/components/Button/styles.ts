import styled, { css } from "styled-components";
import { darken, getContrast, lighten } from "polished";
import { theme } from "@onyma-ds/tokens";

const hasContrast = (color: string, colorToCompare: string = "#fff") => {
  const contrast = getContrast(color, colorToCompare);
  return contrast < 3.5;
};

const getButtonColor = (variant: VariantTypes, buttonType: ButtonTypes) => {
  const contrast = hasContrast(theme.colors[variant]);
  if (buttonType === "primary") {
    return contrast ? theme.colors.black : theme.colors.white;
  }

  return theme.colors[variant];
};

const hex2Rgba = (hex: string, alpha: number = 1) => {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const getDisabledStyles = (buttonType: ButtonTypes) => {
  switch (buttonType) {
    case "primary":
      return css`
        background-color: ${theme.colors.gray_80};
        border-color: ${theme.colors.gray_80};
        color: ${theme.colors.gray_60};
      `;
    case "secondary":
      return css`
        background-color: transparent;
        border-color: ${theme.colors.gray_80};
        color: ${theme.colors.gray_80};
      `;
    default:
      return css`
        background-color: transparent;
        border-color: transparent;
        color: ${theme.colors.gray_80};
      `;
  }
};

export type VariantTypes = keyof typeof theme.colors;

export type ButtonTypes = "primary" | "secondary" | "tertiary";

type ContainerProps = {
  variant: VariantTypes;
  buttonType: ButtonTypes;
};

export const Container = styled.button<ContainerProps>`
  font-size: ${theme.typographies.heading_06.fontSize};
  font-family: ${theme.typographies.heading_06.fontFamily};
  font-weight: ${theme.typographies.heading_06.fontWeight};
  line-height: ${theme.typographies.heading_06.lineHeight};
  border-radius: ${theme.borderRadius.sm};
  border-width: ${theme.borderWidth.hairline};
  border-style: solid;
  padding: ${theme.spacings.xxxs} ${theme.spacings.xs};
  cursor: pointer;
  transition: 0.3s;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  ${({ variant, buttonType }) => css`
    background-color: ${buttonType === "primary"
      ? theme.colors[variant]
      : "transparent"};
    border-color: ${buttonType === "tertiary"
      ? "transparent"
      : theme.colors[variant]};
    color: ${getButtonColor(variant, buttonType)};

    &:hover {
      background-color: ${lighten(0.1, hex2Rgba(theme.colors[variant], 0.9))};
    }

    &:focus {
      border-color: ${theme.colors.tertiary};
    }

    &:active {
      background-color: ${darken(0.1, theme.colors[variant])};
    }

    &:disabled {
      ${getDisabledStyles(buttonType)};
      cursor: not-allowed;

      &:hover,
      &:focus,
      &:active {
        filter: none;
      }
    }
  `};
`;
