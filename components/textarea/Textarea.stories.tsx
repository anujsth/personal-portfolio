import { ComponentStory, ComponentMeta } from "@storybook/react";
import Textarea from "./Textarea";
import {
  TextareaError,
  TextareaValue,
  TextareaExamples,
} from "components/__mock/TextareaValues";
export default {
  title: "Components/Textarea",
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args: any) => (
  <Textarea {...args} />
);

export const TextareaExample = Template.bind({});

TextareaExample.args = {
  ...TextareaExamples,
};

export const TextareaWithError = Template.bind({});

TextareaWithError.args = {
  ...TextareaError,
};

export const TextareaWithValue = Template.bind({});

TextareaWithValue.args = {
  ...TextareaValue,
};
