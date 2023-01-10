import styled, { css } from 'styled-components';
import { SymbolProps } from './types';

type ContainerProps = {
  size?: number;
  fill?: SymbolProps['fill'];
  weight?: SymbolProps['weight'];
};

export const Container = styled.span<ContainerProps>`
  font-size: 1em;
  vertical-align: middle;
  ${({ size }) =>
    size &&
    css`
      font-size: ${size}px;
    `}
  ${({ fill, weight }) => css`
    &.material-symbols-outlined {
      font-variation-settings: 'FILL' ${fill || 0}, 'wght' ${weight || 400},
        'GRAD' 0, 'opsz' 48;
    }
    &.material-symbols-round {
      font-variation-settings: 'FILL' ${fill || 0}, 'wght' ${weight || 400},
        'GRAD' 0, 'opsz' 48;
    }
    &.material-symbols-sharp {
      font-variation-settings: 'FILL' ${fill || 0}, 'wght' ${weight || 400},
        'GRAD' 0, 'opsz' 48;
    }
  `};
`;
