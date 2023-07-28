"use client";

import { BsFillCircleFill } from "react-icons/bs";
import { ToggleButtonProp } from "./ToggleButton.type";
import { useState } from "react";

const ToggleButton = ({
  stateTrue,
  stateFalse,
  lightColor,
  darkColor,
  textAlignLeft = true,
  borderless,
  variant = "contained",
  size = "small",
  shape = "square",
  onMouseEnter,
  ...props
}: ToggleButtonProp) => {
  const [toggler, setToggler] = useState(true);
  const colorLight: string = lightColor ? lightColor : "white";
  const colorDark: string = darkColor ? darkColor : "black";
  const bgColor =
    variant === "empty" ? "none" : toggler ? colorLight : colorDark;
  return (
    <div
      className={`min-w-[30px] inline-block cursor-pointer`}
      onMouseEnter={onMouseEnter}
    >
      <div
        className={`flex ${
          size == "xs" ? "py-[0.35rem] px-2 border-2" : "py-2 px-4 border-[3px]"
        } ${size === "small" && "py-[0.35rem] px-[0.5rem]"}  ${
          borderless ? "border-none" : "border-black"
        } ${
          shape === "circle" && "rounded-full"
        } items-center gap-1 whitespace-nowrap justify-center`}
        style={{
          backgroundColor: bgColor,
        }}
        onClick={() => {
          setToggler(!toggler);
        }}
      >
        {textAlignLeft && (
          <BsFillCircleFill
            className={`${size === "xs" && "text-sm border-[1px]"} ${
              size === "small" && "text-xl border-1"
            } ${size === "medium" && "text-2xl border-1"} ${
              size === "large" && "text-3xl border-2"
            }   border-black rounded-full `}
            style={{ color: toggler ? colorDark : colorLight }}
          />
        )}
        <h1
          className={`${size === "xs" && "text-sm"} ${
            size === "small" && "text-lg"
          } ${size === "medium" && "text-xl"} ${
            size === "large" && "text-2xl"
          } font-semibold `}
          style={{ color: toggler ? colorDark : colorLight }}
        >
          {toggler ? stateTrue : stateFalse}
        </h1>
        {!textAlignLeft && (
          <BsFillCircleFill
            className={`${size === "xs" && "text-sm"} ${
              size === "small" && "text-xl"
            } ${size === "medium" && "text-2xl"} ${
              size === "large" && "text-3xl"
            }  border-2 border-black rounded-full `}
            style={{ color: toggler ? colorDark : colorLight }}
          />
        )}
      </div>
    </div>
  );
};

export default ToggleButton;
