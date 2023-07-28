import { ComponentStory, ComponentMeta } from "@storybook/react";

import Switch from "./Switch";

import { SwitchValue, SwitchDisable } from "components/__mock/SwitchValue";

export default {
  title: "Components/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args: any) => (
  <Switch {...args} />
);

export const SwitchExample = Template.bind({});

SwitchExample.args = {
  ...SwitchValue,
};

export const switchDisable = Template.bind({});

switchDisable.args = {
  ...SwitchDisable,
};
