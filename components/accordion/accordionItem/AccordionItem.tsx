import React from "react";
import { AccordionItemProps } from "./AccordionItem.type";
import { AccordionTitle } from "../accordionTitle/AccordionTitle";
import { AccordionDetail } from "../accordionDetail/AccordionDetail";
import up from "../../../assets/images/up-arrow.svg";
import down from "../../../assets/images/down-arrow.svg";

const AccordionItem = ({
  isActive,
  onClick,
  children,
  color,
  margin,
  border,
}: AccordionItemProps) => {
  const titleChild = React.Children.toArray(children).find(
    (child): child is React.ReactElement =>
      React.isValidElement(child) && child.type === AccordionTitle
  );
  const detailChild = React.Children.toArray(children).find(
    (child): child is React.ReactElement =>
      React.isValidElement(child) && child.type === AccordionDetail
  );

  return (
    <div
      className={`accordion-item ${margin ? "accordion-margin" : ""} ${
        border ? "accordion-border" : ""
      }`}
    >
      <div
        className={`accordion-title-icon accordion-${color}`}
        onClick={onClick}
      >
        <div>{titleChild}</div>
        <div className="accordion-icon">
          {isActive ? <img src={up} /> : <img src={down} />}
        </div>
      </div>
      {isActive && <div className={`accordion-content`}>{detailChild}</div>}
    </div>
  );
};

export default AccordionItem;
