import React, { FC, PropsWithChildren, useState } from "react";
import { InputProps } from "./Input.type";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

import "material-symbols";

const Input = ({
  icon,
  type,
  value,
  placeholder,
  handleChange,
  errorMessage,
  required,
  id,
  disabled,
  isError,
  readOnly,
  inputWidth,
  position,
  label,
  variant,
  flatpickrConfig,
  ...props
}: InputProps) => {
  const Icon: FC<PropsWithChildren> = ({ children }) => (
    <i
      className={`material-symbols-outlined icon ${
        isError ? "error-icon" : ""
      } ${type === "password" ? "icon-password" : ""} `}
    >
      {children}
    </i>
  );
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [date, setDate] = useState(new Date());

  const handleDate = (selectedDate: any) => {
    setDate(selectedDate[0]);
  };

  return (
    <div className="input-container" style={{ width: inputWidth }} {...props}>
      <div className="input-label">{label ? <label>{label}</label> : ""}</div>

      {position === "start" ? (
        <span className={`icon-start ${label ? "icon-label" : ""} `}>
          <Icon>{icon}</Icon>
        </span>
      ) : (
        <span className={`icon-end ${label ? "icon-label" : ""}`}>
          <Icon>{icon}</Icon>
        </span>
      )}

      {type == "password" ? (
        <span
          onClick={togglePassword}
          className={`icon-end icon-password ${label ? "icon-label" : ""}`}
        >
          {showPassword ? <Icon>visibility</Icon> : <Icon>visibility_off</Icon>}
        </span>
      ) : (
        ""
      )}

      {type == "date" ? (
        <>
          <Flatpickr
            className={`input ${isError ? "input--error" : ""} ${
              icon && position === "start" ? "pleft-35" : "pright-35"
            } ${variant ? `input-${variant}` : " "}`}
            value={date}
            onChange={handleDate}
            options={flatpickrConfig}
          />
          <span className={`icon-end ${label ? "icon-label" : ""}`}>
            <Icon>calendar_month</Icon>
          </span>
        </>
      ) : (
        <input
          id={id}
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          defaultValue={value}
          onChange={handleChange}
          disabled={disabled}
          readOnly={readOnly}
          className={`input ${isError ? "input--error" : ""} ${
            icon && position === "start" ? "pleft-35" : "pright-35"
          } ${variant ? `input-${variant}` : " "}`}
        />
      )}

      <>
        {isError && errorMessage ? (
          <div className="error--message">
            <span className="error--icon">
              <Icon>error</Icon>
            </span>
            {errorMessage}
          </div>
        ) : (
          ""
        )}
      </>
    </div>
  );
};

export default Input;
