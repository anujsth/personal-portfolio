import {
  FC,
  MouseEventHandler,
  PropsWithChildren,
  Ref,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { OptionTypes, SelectProps } from "./Select.type";
import "../../assets/styles/components/index.scss";

import "material-symbols";
import Checkbox from "components/checkbox/Checkbox";

const Icon: FC<PropsWithChildren> = ({ children }) => (
  <i className="material-symbols-outlined select-icon">{children}</i>
);

function useOnClickOutside(
  ref: RefObject<HTMLDivElement>,
  handler: MouseEventHandler<HTMLButtonElement>
) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export const Select = ({
  size = "small",
  handleChange,
  option,
  disabled,
  isError,
  isMultiSelect = false,
  errorMessage,
  placeholder,
  valueSelected,
  label,
}: SelectProps) => {
  const [selectedValues, setSelectedValues] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<OptionTypes>();
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsOpen(false));

  useEffect(() => {
    let givenValue:any;
    if (
      typeof valueSelected === "number" ||
      typeof valueSelected === "string"
    ) {
      givenValue = option.find((item) => item.id === valueSelected);
      setValue(()=> givenValue);
    } else if (typeof valueSelected === "object") {
      if (valueSelected) {
        givenValue = option.filter((item) => {
          return valueSelected.includes(item.id);
        });
        setSelectedValues(givenValue);
      }
    }
  }, [valueSelected]);

  const handleOptionClick = (data: OptionTypes) => {
    if (isMultiSelect) {
      let filteredValue = selectedValues.filter((item) => item.id === data.id);

      if (filteredValue.length > 0) {
        setSelectedValues((prevValue) =>
          selectedValues.filter((value) => value.id !== filteredValue[0].id)
        );
      } else if (filteredValue.length == 0) {
        setSelectedValues([...selectedValues, data]);
      }
    } else {
      setValue(data);
      handleChange(data);
      setIsOpen(false);
    }
  };

  return (
    <div className="select-component-wrapper">
      {label && <div className="select-label">{label}</div>}
      <div
        ref={ref}
        className={`select select--${size} ${isOpen ? "open" : ""} 
      `}
    >
   
          {/* <input type="hidden" className="select-input"  id="select-input-id" onChange={(e)=>console.log("e",e.target)}></input> */}
        <button
          className={`select-element ${isError ? "select--error" : ""} ${
            disabled ? "select--disabled" : ""
          }`}
          disabled={disabled}
          onClick={() => setIsOpen(!isOpen)}
        >
         
          <span className="select--options">
            {isMultiSelect && selectedValues
              ? selectedValues.length > 0
                ? selectedValues.map((item,index)=> <span key={index}>{item.name}{selectedValues.length > index+1 && ', '}</span>)
                : placeholder && (
                    <span className="select--placeholder">{placeholder}</span>
                  )
              : value && value.name}
          </span>
          <div className={`icon--select  ${isOpen ? "close-icon" : ""}`}>
            <Icon>arrow_drop_down</Icon>
          </div>
        </button>
        <div className="menu">
          {option.map((item: any, index: any) => {
            return (
              <button
                key={index}
                className={`menu-option ${
                  !isMultiSelect && value && value.name === item.name
                    ? "active"
                    : ""
                }`}
                id={`option-${item.id}`}
                onClick={() => handleOptionClick(item)}
              >
                <div className="icon-option">
                {item.avatar && <Icon>{item.avatar}</Icon>}
                <span>{item.name}</span>
                </div>
               {isMultiSelect && <Checkbox checked={selectedValues.find(s_item=> s_item.name ===  item.name) ? true : false}/>} 
             
              </button>
            );
          })}
        </div>
        {isError && <div className="error--message">{errorMessage}</div>}
      </div>
    </div>
  );
};
