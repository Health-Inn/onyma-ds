import styled, { css } from "styled-components";

export const Container = styled.div`
  font-family: "Roboto", sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8rem;

  p,
  h2,
  h3 {
    margin: 0;
  }
`;

export const BorderType = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  & > h2 {
    font-size: 2.25rem;
    font-weight: 700;
  }
`;

export const Borders = styled.div`
  display: flex;
  gap: 4rem;
`;

export const BorderSpecification = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    color: #ff3b30;
    font-size: 1rem;
  }

  h3 {
    color: #333333;
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    color: #666666;
    font-size: 1rem;
    font-weight: 400;
  }
`;

type BoxIndicatorProps = {
  dark?: boolean;
  long?: boolean;
  borderWidth?: string;
};

export const BoxIndicator = styled.section<BoxIndicatorProps>`
  height: 4rem;
  border-color: #333333;
  border-style: solid;
  box-sizing: border-box;

  ${({ long, dark, borderWidth }) => css`
    width: ${long ? "256px" : "4rem"};
    background-color: ${dark ? "#333333" : "#cccccc"};
    border-width: ${borderWidth ? borderWidth : "1px"};
  `};
`;
