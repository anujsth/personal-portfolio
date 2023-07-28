import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import RadioGroup from "./RadioGroup";
import Radio from "./radio/Radio";

export default {
  title: "Components/RadioGroup",
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args: any) => (
  <RadioGroup {...args} />
);

export const RadioGroupRow = Template.bind({});

const RadioGroupRowWrapper = () => {
  const [select, setSelect] = useState("");

  const radioChangeHandler = (e: any) => {
    setSelect(e.target.value);
  };

  return (
    <RadioGroup row>
      <Radio onChange={radioChangeHandler} value="1" label="radio1" />
      <Radio onChange={radioChangeHandler} value="2" label="radio2" />
      <Radio onChange={radioChangeHandler} value="3" label="radio3" />
    </RadioGroup>
  );
};
RadioGroupRow.args = {
  children: [<RadioGroupRowWrapper />],
};

export const RadioGroupColumn = Template.bind({});
const RadioGroupColumnWrapper = () => {
  const [select, setSelect] = useState("");

  const radioChangeHandler = (e: any) => {
    setSelect(e.target.value);
  };

  return (
    <RadioGroup>
      <Radio onChange={radioChangeHandler} value="1" label="radio1" />
      <Radio onChange={radioChangeHandler} value="2" label="radio2" />
      <Radio onChange={radioChangeHandler} value="3" label="radio3" />
    </RadioGroup>
  );
};

RadioGroupColumn.args = {
  children: [<RadioGroupColumnWrapper />],
};
