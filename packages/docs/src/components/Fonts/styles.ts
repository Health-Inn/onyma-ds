import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  p,
  h3 {
    margin: 0;
  }
`;

export const FontInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    font-size: 1rem;
    color: #ff3b30;
  }

  h3 {
  }

  p {
    font-size: 1rem;
    color: #666666;
  }
`;

type FontTitleProps = {
  font: string;
};

export const FontTitle = styled.h3<FontTitleProps>`
  font-size: 2rem;
  font-weight: 700;
  font-family: ${({ font }) => font};
`;
