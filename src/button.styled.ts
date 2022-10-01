import styled, { CSSObject, FunctionInterpolation } from '@emotion/styled';
import { system, get, runIfFn, ThemeKey } from '@andideve/styled-system';
import { createMediaQuery } from '@andideve/sx-core';
import transparentize from 'polished/lib/color/transparentize';

import defaults from './button.defaults';
import { SystemProps, ButtonSizes, ButtonVariants, ButtonProps } from './button.types';

export function size(sizes: Record<ButtonSizes, CSSObject>) {
  return ({ size = defaults.size }: ButtonProps = {}) => sizes[size];
}

function variant(variants: Record<ButtonVariants, CSSObject | GetCSSFn>) {
  return ({ theme, size = defaults.size, variant = defaults.variant }: ButtonProps = {}) => {
    const props = { theme, size, variant };
    return runIfFn(variants[variant], props);
  };
}

type States = 'readOnly' | 'disabled' | 'hover' | 'active' | 'focus' | 'lg:active';
type GetCSSFn<P = any> = (props: P) => CSSObject;
type StatesConfig<P = any> = { [key in States]?: CSSObject | GetCSSFn<P> };

function createStates<P = any>(config: StatesConfig<P>, props?: P): CSSObject {
  const states: { [key in States]?: CSSObject } = {};
  for (const _ in config) {
    const key = _ as keyof typeof config;
    states[key] = runIfFn(config[key], props);
  }

  return {
    '&[readonly]': states.readOnly,
    '&[disabled]': states.disabled,
    '&:not([readonly]):not([disabled]):active': states.active,
    '&:not([readonly]):not([disabled]):focus': states.focus,
    [createMediaQuery(1024)]: {
      '&:not([readonly]):not([disabled]):not(:active):hover': states.hover,
      '&:not([readonly]):not([disabled]):active': states['lg:active'],
    },
  };
}

function state<P = any>(config: StatesConfig<P>) {
  return (props: P) => createStates<P>(config, props);
}

export const styles: (CSSObject | FunctionInterpolation<ButtonProps>)[] = [
  {
    '&[href]': {
      textDecoration: 'none',
    },
  },
  {
    cursor: 'pointer',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    '&[disabled]': {
      cursor: 'default',
    },
  },
  size({
    xs: {
      padding: '0 0.75rem',
      height: '2.125rem',
      fontSize: 'var(--ds-fontSizes-xs)',
      lineHeight: 'var(--ds-lineHeights-normal)',
    },
    sm: {
      padding: '0 0.75rem',
      height: '2.25rem',
      fontSize: 'var(--ds-fontSizes-sm)',
      lineHeight: 'var(--ds-lineHeights-5)',
    },
    base: {
      padding: '0 1.25rem',
      height: '2.5rem',
      fontSize: 'var(--ds-fontSizes-sm)',
      lineHeight: 'var(--ds-lineHeights-5)',
    },
    lg: {
      padding: '0 1.25rem',
      height: '3rem',
      fontSize: 'var(--ds-fontSizes-base)',
      lineHeight: 'var(--ds-lineHeights-6)',
    },
    xl: {
      padding: '0 1.5rem',
      height: '3.25rem',
      fontSize: 'var(--ds-fontSizes-base)',
      lineHeight: 'var(--ds-lineHeights-6)',
    },
  }),
  variant({
    filled: {
      color: 'var(--ds-colors-white)',
      backgroundColor: 'var(--ds-colors-accent)',
    },
    tinted({ theme }) {
      return {
        color: 'var(--ds-colors-accent)',
        backgroundColor: transparentize(0.85, get('colors.accent', theme) as string),
      };
    },
    gray: {
      color: 'var(--ds-colors-foreground-primary)',
      backgroundColor: 'var(--ds-colors-background-elevated-secondary)',
    },
    plain: {
      color: 'var(--ds-colors-accent)',
      backgroundColor: 'transparent',
    },
  }),
  {
    overflow: 'hidden',
    position: 'relative',
    '&:before': {
      opacity: 0,
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: 'var(--ds-colors-foreground-primary)',
    },
  },
  state({
    disabled: { opacity: 0.24 },
    hover: { '&:before': { opacity: 0.15 } },
    active: { '&:before': { opacity: 0.15 } },
    'lg:active': { '&:before': { opacity: 0.075 } },
  }),
  system<SystemProps>({
    rounded: {
      property: 'borderRadius',
      scale: ThemeKey.radii,
    },
  }),
];

export const Styled = styled.button(...styles);

export default Styled;
