import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import IconButton from '../icon-button';
import defaults from '../button.defaults';
import { CloudDownload } from './icons';

export default {
  title: 'IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  variant: defaults.variant,
  size: defaults.size,
  disabled: defaults.disabled,
  rounded: defaults.rounded,
  children: <CloudDownload />,
};
