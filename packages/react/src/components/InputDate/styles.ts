import styled, { keyframes } from 'styled-components';
import { theme } from '@onyma-ds/tokens';

export const ChildrenWrapper = styled.div`
  width: auto;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
`;

type ContentProps = {
  top?: number;
  left?: number;
};

export const Content = styled.div<ContentProps>`
  font-size: 0.75rem;
  background-color: ${theme.colors.white};
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  padding: 0.75em;
  position: fixed;
  top: ${({ top }) => (top ? `${top}px` : undefined)};
  left: ${({ left }) => (left ? `${left}px` : undefined)};
  z-index: 999;
  visibility: hidden;
  animation: ${fadeIn} 0.5s forwards;
`;

type ContainerProps = {
  disabled?: boolean;
};

export const Container = styled.div<ContainerProps>`
  position: relative;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'initial')};
`;
