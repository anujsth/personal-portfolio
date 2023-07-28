import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tooltip from "./Tooltip";
import Button from "components/button/Button";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args: any) => (
  
  <div style={{ position: "relative", top: "12rem", left: "12rem" }}>
    <Tooltip {...args} />
  </div>
);

export const TooltipButton = Template.bind({});

TooltipButton.args = {
  children: <Button label="button "></Button>,
  description: "click me !",
};

export const TooltipHeader = Template.bind({});

TooltipHeader.args = {
  children: <h2>Testing Header 2</h2>,
  description: "header 2",
};
