import type { Meta, StoryObj } from '@storybook/react';
import Video from './Video';
import videoEg from "./1.mp4";

const meta = {
  component: Video,
  argTypes: {
    width:{
      options: ['25%','50%', '75%','100%'],
      control: { type: 'radio' },
    },
    border:{
      options: [false, true],
      control: { type: 'radio' },
    },
    variant:{
      options: ['square', 'rounded'],
      control: { type: 'radio' },
    }
  },
} satisfies Meta<typeof Video>; // 👈 Satisfies operator being used for stricter type checking.

export default meta;

type Story = StoryObj<typeof Video>;

export const Example: Story = {
  args: {
    url:videoEg,
    width:'50%',
    border:'true',
    variant:'square',
    borderColor:'red'
  },
};
