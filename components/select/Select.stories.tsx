import { SelectProps } from "./Select.type";
import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "./Select";
import {
  selectErrorValues,
  selectDisabledValues,
  selectValueWithIcon,
  selectValueWithOutIcon,
  selectwithMultiSelectValues,
} from "../__mock/SelectValues";

export default {
  title: "Components/Select",
  component: Select,
} as ComponentMeta<typeof Select
>;

const Template: ComponentStory<typeof Select
> = (args: any) => (
  <Select
 {...args} />
);

export const SelectWithIcon = Template.bind({});

SelectWithIcon.args = {
  ...selectValueWithIcon,
};

export const SelectWithOutIcon = Template.bind({});

SelectWithOutIcon.args = {
  ...selectValueWithOutIcon,
};

export const SelectDisabled = Template.bind({});

SelectDisabled.args={
  ...selectDisabledValues,
}

export const SelectError = Template.bind({});

SelectError.args={
  ...selectErrorValues,
}

export const SelectWithMultiSelect = Template.bind({});

SelectWithMultiSelect.args={
  ...selectwithMultiSelectValues,
}


