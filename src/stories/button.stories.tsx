import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '../button';
import defaults from '../button.defaults';
import { CloudDownload } from './icons';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  variant: defaults.variant,
  size: defaults.size,
  disabled: defaults.disabled,
  children: 'Push Me!',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  variant: defaults.variant,
  size: defaults.size,
  disabled: defaults.disabled,
  rounded: defaults.rounded,
  children: 'Push Me!',
  iconLeft: <CloudDownload />,
  iconRight: <CloudDownload />,
};
