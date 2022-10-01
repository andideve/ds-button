import React, { forwardRef } from 'react';

import defaults from './button.defaults';
import Styled from './button.styled';
import { ButtonSizes, BaseButtonProps } from './button.types';
import ButtonIcon from './button-icon';

function getIconSize(size: ButtonSizes) {
  return (
    {
      xs: '1rem',
      sm: '1rem',
      base: '1.125rem',
      lg: '1.25rem',
      xl: '1.25rem',
    } as Record<ButtonSizes, string | number>
  )[size];
}
function getIconSpacing(size: ButtonSizes) {
  return (
    {
      xs: '0.5rem',
      sm: '0.5rem',
      base: '0.75rem',
      lg: '0.75rem',
      xl: '0.75rem',
    } as Record<ButtonSizes, string | number>
  )[size];
}

export function createButton<
  T = HTMLButtonElement,
  P = React.ButtonHTMLAttributes<HTMLButtonElement>,
>(tag: keyof JSX.IntrinsicElements = 'button') {
  const Component = Styled.withComponent(tag);
  return forwardRef<T, P & BaseButtonProps>(
    (
      {
        children,
        as,
        size = defaults.size,
        variant = defaults.variant,
        disabled = defaults.disabled,
        rounded = defaults.rounded,
        href,
        external = defaults.external,
        iconLeft = defaults.iconLeft,
        iconRight = defaults.iconRight,
        ...rest
      },
      ref,
    ) => {
      const icon = { spacing: getIconSpacing(size), size: getIconSize(size) };
      return (
        <Component
          ref={ref}
          as={href ? 'a' : as}
          size={size}
          variant={variant}
          disabled={disabled}
          rounded={rounded}
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          {...rest}
        >
          {iconLeft && (
            <ButtonIcon
              placement="start"
              spacing={icon.spacing}
              size={icon.size}
              style={{ zIndex: 0 }}
            >
              {iconLeft}
            </ButtonIcon>
          )}
          <span style={{ zIndex: 0 }}>{children}</span>
          {iconRight && (
            <ButtonIcon
              placement="end"
              spacing={icon.spacing}
              size={icon.size}
              style={{ zIndex: 0 }}
            >
              {iconRight}
            </ButtonIcon>
          )}
        </Component>
      );
    },
  );
}

export const Button = createButton();
Button.defaultProps = { type: 'button' };

export default Button;
