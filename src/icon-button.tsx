import React, { forwardRef } from 'react';

import defaults from './button.defaults';
import Styled from './icon-button.styled';
import { BaseButtonProps } from './button.types';

export function createIconButton<
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
        ...rest
      },
      ref,
    ) => (
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
        <span style={{ lineHeight: typeof children === 'string' ? undefined : 1, zIndex: 0 }}>
          {children}
        </span>
      </Component>
    ),
  );
}

export const IconButton = createIconButton();
IconButton.defaultProps = { type: 'button' };

export default IconButton;
