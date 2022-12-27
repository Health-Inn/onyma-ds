import styled from "styled-components";
import { theme } from "@onyma-ds/tokens";

export const Container = styled.input`
  box-sizing: border-box;
  font-size: ${theme.typographies.body_03.fontSize};
  font-family: ${theme.typographies.body_03.fontFamily};
  font-weight: ${theme.typographies.body_03.fontWeight};
  line-height: ${theme.typographies.body_03.lineHeight};
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray_80};
  width: 100%;
  height: 2.75rem;
  border-radius: 4px;
  padding: 0.75rem;
  outline: none;

  &::placeholder {
    color: ${theme.colors.gray_80};
  }

  &:hover {
    background-color: ${theme.colors.gray_98};
  }

  &:focus {
    background-color: ${theme.colors.white};
    border-color: ${theme.colors.tertiary};
  }

  &:disabled {
    background-color: ${theme.colors.gray_90};
    border-color: ${theme.colors.gray_90};
  }
`;
