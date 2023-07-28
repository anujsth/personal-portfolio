import type { Meta, StoryObj } from '@storybook/react';

import ToggleButton from './ToggleButton';

const meta = {
  component: ToggleButton,
  argTypes: {
    size:{
      options: ['xs','small', 'medium','large'],
      control: { type: 'radio' },
    
    },
    variant:{
      options: ['contained','empty'],
      control: { type: 'radio' },
    },
    onMouseEnter: {
      action: 'entered',
    },
  },
} satisfies Meta<typeof ToggleButton>; // 👈 Satisfies operator being used for stricter type checking.

export default meta;

type Story = StoryObj<typeof ToggleButton>;

export const Example: Story = {
  args: {
    stateTrue: 'Light',
    stateFalse: 'Dark',
    lightColor: '#EFE1D1',
    darkColor: '#331D2C',
    textAlignLeft:true,
    size: 'medium',
    variant:'contained',
    borderless:true,
    shape:'square'
  },
};
