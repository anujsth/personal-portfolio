import React from "react";
import { AccordionTitleProps } from "./Accordion.type";

export const AccordionTitle = ({ children }: AccordionTitleProps) => {
  return <p className={` accordion-title `}>{children}</p>;
};
