import React, { useEffect, useRef, useState } from "react";
import { TooltipProps } from "./Tooltip.type";

const Tooltip = ({
  className,
  children,
  position = "left",
  description,
  color,
  arrow,
}: TooltipProps) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [tooltipPosition, setTooltipPosition] = useState(position);
  const [winHeight, setWinHeight] = useState<any>(window.innerHeight);
  const [winwidth, setWinWidth] = useState<any>(window.innerWidth);

  useEffect(() => {
    const tooltipEl = tooltipRef.current;
    if (!tooltipEl) return;

    const updateTooltipPosition = () => {
      let { left, top, width, height, right } =
        tooltipEl.getBoundingClientRect();

      window.addEventListener("resize", () => {
        setWinWidth(window.innerWidth);
        setWinHeight(window.innerHeight);
      });

      let newTooltipPosition = position;

      if (position === "right" && left + width > winwidth) {
        newTooltipPosition = "left";
      } else if (position === "left" && left - tooltipEl.offsetWidth < 0) {
        newTooltipPosition = "right";
      } else if (position === "bottom" && top + height > winHeight) {
        newTooltipPosition = "top";
      } else if (position === "top" && top - tooltipEl.offsetHeight < 0) {
        newTooltipPosition = "bottom";
      }
      setTooltipPosition(newTooltipPosition);
    };

    updateTooltipPosition(); // update tooltip position on mount
    window.addEventListener("resize", updateTooltipPosition); // add event listener for window resize

    return () => {
      window.removeEventListener("resize", updateTooltipPosition); // remove event listener on unmount
    };
  }, [description, position, winHeight, winwidth]);

  return (
    <div
      className={`tooltip-wrapper tooltip-direction-${tooltipPosition}  ${
        className && className
      }`}
    >
      <div className="description-wrapper" ref={tooltipRef}>
        <div className="tooltip-inner-wrapper">
          <span>{children} </span>
          <span
            className={`description ${
              arrow ? `arrow` : ``
            } description-${color}`}
          >
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
