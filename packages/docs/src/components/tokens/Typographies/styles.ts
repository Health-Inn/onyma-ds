import styled from "styled-components";
import { colors } from "@onyma-ds/tokens";

export const Container = styled.div`
  font-family: "Roboto", sans-serif;

  h2 {
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    font-weight: 500;
    background-color: ${colors.gray_96};
  }

  th,
  td {
    font-size: 0.875rem;
    padding: 6px;
    text-align: start;
    border: 1px solid #cccccc;
  }
`;
