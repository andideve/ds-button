import React from 'react';
import styled, { CSSObject, FunctionInterpolation } from '@emotion/styled';

interface ButtonIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  size: string | number;
  placement?: 'start' | 'end';
  spacing?: string | number;
}

const styles: (CSSObject | FunctionInterpolation<ButtonIconProps>)[] = [
  {
    lineHeight: 0,
    svg: {
      color: 'currentcolor',
      width: 'inherit',
      height: 'inherit',
    },
  },
  ({ placement, spacing }) => {
    if (!placement) return {};
    return { [placement === 'start' ? 'marginRight' : 'marginLeft']: spacing };
  },
  ({ size }) => ({
    svg: {
      width: size,
      height: size,
    },
  }),
];

const ButtonIcon = styled.span(...styles);

export default ButtonIcon;
