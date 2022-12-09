import styled, { css } from "styled-components";
import { getContrast } from "polished";
import { theme } from "@onyma-ds/tokens";

const hasContrast = (color: string, colorToCompare: string = "#fff") => {
  const contrast = getContrast(color, colorToCompare);
  return contrast < 3.5;
};

export type VariantTypes = keyof typeof theme.colors;

type ContainerProps = {
  variant: VariantTypes;
  ghost: boolean;
};

export const Container = styled.button<ContainerProps>`
  font-size: ${theme.fontSizes.md};
  font-weight: ${theme.fontWeights.medium};
  line-height: ${theme.lineHeights.short};
  border-radius: ${theme.radii.xs};
  border-width: 1px;
  border-style: solid;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: 0.3s;

  ${({ variant, ghost }) => css`
    background-color: ${ghost ? "transparent" : theme.colors[variant]};
    border-color: ${theme.colors[variant]};
    color: ${ghost
      ? theme.colors[variant]
      : hasContrast(theme.colors[variant])
      ? theme.colors.black
      : theme.colors.white};

    &:hover {
      filter: brightness(0.7);
    }

    &:focus {
      box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
        rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
        rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    }

    &:active {
      filter: brightness(0.5);
    }

    &:disabled {
      background-color: ${theme.colors.gray03};
      border-color: ${theme.colors.gray03};
      color: ${theme.colors.gray05};
      cursor: not-allowed;

      &:hover,
      &:focus,
      &:active {
        filter: none;
      }
    }
  `};
`;
