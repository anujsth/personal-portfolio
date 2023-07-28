import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Table } from "./Table";
import { TableExample } from "components/__mock/TableValues";

export default {
  title: "Components/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args: any) => (
  <Table {...args} />
);

export const TableData = Template.bind({});

TableData.args = {
  ...TableExample,
};
