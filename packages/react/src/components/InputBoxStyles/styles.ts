import { theme } from "@onyma-ds/tokens";
import styled, { css } from "styled-components";

const requiredStyles = () => css`
  ${Label} {
    &::after {
      content: "*Obrigatório";
      color: ${theme.colors.danger};
      margin-left: 2px;
    }
  }
`;

const errorStyles = () => css`
  ${FeedbackText} {
    color: ${theme.colors.danger};
  }
`;

export const Label = styled.p`
  font-size: ${theme.typographies.body_03.fontSize};
  font-family: ${theme.typographies.body_03.fontFamily};
  font-weight: ${theme.typographies.body_03.fontWeight};
  line-height: ${theme.typographies.body_03.lineHeight};
  min-height: ${theme.typographies.body_03.fontSize};
  margin: 0;
`;

export const FeedbackText = styled.p`
  font-size: 0.75rem;
  line-height: 1.05rem;
  font-family: "Roboto", sans-serif;
  margin: 0;
`;

type ContainerProps = {
  error?: boolean;
  required?: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${({ required }) => required && requiredStyles()}
  ${({ error }) => error && errorStyles()}
`;
