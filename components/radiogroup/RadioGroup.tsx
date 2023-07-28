import React, { useState } from "react";
import { RadioGroupProps } from "./RadioGroup.type";
import Radio from "./radio/Radio";

const RadioGroup = ({ children, row, className }: RadioGroupProps) => {
  return (
    <div
      className={`radiogroup ${
        row ? `radiogroup-row` : `radiogroup-column`
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default RadioGroup;
