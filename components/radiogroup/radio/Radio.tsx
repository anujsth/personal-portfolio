import React, { useState } from "react";
import { RadioProps } from "./Radio.type";

const Radio = ({
  label,
  disabled,
  theme = "primary",
  isError,
  emsg,
  value,
  onChange,
}: RadioProps) => {
  return (
    <div className={`${isError === true ? `radio--error` : ``}`}>
      <div
        className={`radio-component radio--${theme} ${
          disabled === true ? `radio--disable` : ``
        }  ${isError === true ? `radio--danger` : ``} `}
      >
        <input
          type="radio"
          name="radio"
          className="radio-input"
          disabled={disabled}
          value={value}
          id={label}
          onChange={onChange}
        />
        <label className="radio-label" htmlFor={label}>
          {label}
        </label>
      </div>
      {isError ? (
        <div
          className={`radio-emsg ${
            disabled === true ? `radio-emsg-disable` : ``
          }`}
        >
          {emsg}
        </div>
      ) : null}
    </div>
  );
};

export default Radio;
