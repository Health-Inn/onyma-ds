import styled from "styled-components";
import { theme } from "@onyma-ds/tokens";
import { InputText } from "../../../InputText";
import { Symbol } from "../../../Symbol/Symbol";

type ContainerProps = {
  error?: boolean;
  disabled?: boolean;
  withClearButton?: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  position: relative;
`;

export const DateView = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${theme.colors.black};
  margin: 0;
`;

export const InputDate = styled(InputText)`
  cursor: pointer;
  padding-right: 2rem;
`;

const BaseIcon = styled(Symbol)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const CalendarIcon = styled(BaseIcon).attrs({
  name: "calendar_today",
  size: 20,
})`
  cursor: pointer;
  right: 0.875rem;
`;

export const ClearIcon = styled(BaseIcon).attrs({
  name: "close",
  size: 16,
  weight: 700,
})`
  cursor: pointer;
  right: 3rem;
`;
