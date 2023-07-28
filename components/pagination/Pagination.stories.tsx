import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DefaultPaginationValues } from "components/__mock/PaginationValues";
import Pagination from "./Pagination";

export default {
    title: "Components/Pagination",
    component: Pagination,
  } as ComponentMeta<typeof Pagination>;
  
  const Template: ComponentStory<typeof Pagination> = (args: any) => (
    <Pagination {...args} />
  );
  
  export const DefaultPagination = Template.bind({});
  
  DefaultPagination.args = {
    ...DefaultPaginationValues
  };
  