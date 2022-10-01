import React from 'react';
import { ResponsiveValue, CSSProperties } from '@andideve/styled-system';
import { Theme } from '@andideve/ds-core';

export interface SystemProps {
  rounded?: ResponsiveValue<CSSProperties['borderRadius']>;
}

interface ExtendOptions extends SystemProps {
  href?: string;
  external?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export type ButtonSizes = 'xs' | 'sm' | 'base' | 'lg' | 'xl';
export type ButtonVariants = 'filled' | 'tinted' | 'gray' | 'plain';
export interface ButtonOptions extends ExtendOptions {
  size?: ButtonSizes;
  variant?: ButtonVariants;
  disabled?: boolean;
}
export interface BaseButtonProps extends ButtonOptions {
  ref?: React.Ref<any>;
  as?: React.ElementType;
  theme?: Theme;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export type ButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type IconButtonProps = Omit<ButtonProps, 'iconLeft' | 'iconRight'>;
