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

export const Spacing = styled.div`
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
    color: #333333;
    font-size: 1rem;
  }
`;

type BoxIndicatorProps = {
  spacing: string;
};

export const BoxIndicator = styled.section<BoxIndicatorProps>`
  width: ${({ spacing }) => spacing};
  aspect-ratio: 1;
  border: 1px solid #ff3b30;
  background-color: #ff7b74;
`;
