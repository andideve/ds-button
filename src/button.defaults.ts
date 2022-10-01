import { ButtonOptions } from './button.types';

const defaults: Required<Omit<ButtonOptions, 'href'>> = {
  size: 'base',
  variant: 'filled',
  disabled: false,
  rounded: '0.375rem',
  // href: undefined,
  external: false,
  iconLeft: null,
  iconRight: null,
};

export default defaults;
