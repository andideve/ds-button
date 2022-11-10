import styled, { CSSObject, FunctionInterpolation } from '@emotion/styled';

import { size, baseStyles } from './button.styled';
import { IconButtonProps } from './button.types';

const styles: (CSSObject | FunctionInterpolation<IconButtonProps>)[] = [
  ...baseStyles,
  size({
    xs: {
      padding: '0 0.5rem',
      height: '1.75rem',
      svg: {
        width: '0.75rem',
        height: '0.75rem',
      },
    },
    sm: {
      padding: '0 0.625rem',
      height: '2.25rem',
      svg: {
        width: '1rem',
        height: '1rem',
      },
    },
    base: {
      padding: '0 0.75rem',
      height: '2.625rem',
      svg: {
        width: '1.125rem',
        height: '1.125rem',
      },
    },
    lg: {
      padding: '0 0.875rem',
      height: '3rem',
      svg: {
        width: '1.25rem',
        height: '1.25rem',
      },
    },
    xl: {
      padding: '0 1rem',
      height: '3.25rem',
      svg: {
        width: '1.25rem',
        height: '1.25rem',
      },
    },
  }),
];

export const Styled = styled.button(...styles);

export default Styled;
