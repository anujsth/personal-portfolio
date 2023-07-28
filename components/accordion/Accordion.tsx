import React, { useState } from "react";
import { AccordionProps } from "./Accordion.type";
import AccordionItem from "./accordionItem/AccordionItem";

const Accordion = ({ children }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div>
      {React.Children.map(children, (child, index) => {
        if (child && child.type === AccordionItem) {
          const isActive = activeIndex === index;
          return React.cloneElement(child, {
            isActive,
            onClick: () => handleAccordionClick(index),
          });
        } else {
          return child;
        }
      })}
    </div>
  );
};

export default Accordion;
