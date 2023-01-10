import styled, { css } from "styled-components";
import { theme } from "@onyma-ds/tokens";

export const Cell = styled.div`
  width: 2.25em;
  height: 2.25em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonCleaned = styled.button`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-color: transparent;
  font-size: 1em;
`;

export const Container = styled.div`
  background-color: ${theme.colors.white};
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.75em;

  * {
    font-size: 1em;
    color: ${theme.colors.black};
  }
`;

export const Header = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    color: ${theme.colors.black};
  }
`;

export const ChangeMonthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;

  ${ButtonCleaned} {
    width: 1.375em;
    height: 1.375em;
  }
`;

export const Body = styled.section``;

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, auto);
  justify-content: center;
  align-items: center;
  gap: 0.5em;
`;

export const DaysAbbreviationWrapper = styled(DaysGrid)`
  margin-bottom: 0.5em;

  ${Cell} {
    color: ${theme.colors.gray_40};
    font-weight: 500;
  }
`;

export const DayAbbreviation = styled(ButtonCleaned)``;

export const DaysNumberWrapper = styled(DaysGrid)``;

type DayButtonProps = {
  selected?: boolean;
  isAnotherMonth?: boolean;
  available: boolean;
};

export const DayButton = styled(ButtonCleaned)<DayButtonProps>`
  border-radius: 50%;
  color: ${theme.colors.white};
  transition: 0.3s;
  ${({ available }) =>
    available &&
    css`
      background-color: ${theme.colors.success};
      &:not(:disabled):hover {
        filter: brightness(0.7);
      }
    `};

  ${({ available }) =>
    !available &&
    css`
      background-color: ${theme.colors.gray_90};
      pointer-events: none;
    `};

  ${({ selected, available }) =>
    available &&
    selected &&
    css`
      background-color: ${theme.colors.primary};
    `};

  ${({ isAnotherMonth }) =>
    isAnotherMonth &&
    css`
      visibility: hidden;
      opacity: 0;
    `};

  &:disabled {
    color: ${theme.colors.gray_90};
    background-color: transparent;
    pointer-events: none;
  }
`;
