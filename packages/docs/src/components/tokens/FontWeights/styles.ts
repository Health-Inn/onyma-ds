import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 6rem;
  font-family: "Roboto", sans-serif;

  p,
  h4 {
    margin: 0;
  }
`;

export const FontWeightInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1rem;

  span {
    color: #ff3b30;
    font-size: 1rem;
  }

  h4 {
    font-size: 1rem;
    color: #333333;
  }

  div {
    font-size: 1rem;
    color: #666666;
  }
`;

type FontWeightExample = {
  weight: string;
};

export const FontWeightExample = styled.p<FontWeightExample>`
  color: #333333;
  font-size: 2rem;
  font-weight: ${({ weight }) => weight};
`;
