import { TextareaProps } from "./Textarea.type";

const Textarea = ({
  label,
  size,
  placeholder,
  color,
  disabled,
  spellCheck,
  readonly,
  value,
  error,
  onChange,
}: TextareaProps) => {
  return (
    <>
      {label && (
        <p>
          <label>{label}</label>
        </p>
      )}

      <textarea
        className={`TextArea textarea-${color} ${
          disabled === true ? `textarea-disabled` : ``
        } ${error === true ? `textarea-error` : ``}
        textarea-${size}`}
        placeholder={placeholder}
        disabled={disabled}
        spellCheck={spellCheck === true ? "true" : "false"}
        readOnly={readonly}
        value={value}
        onChange={onChange}
      ></textarea>
    </>
  );
};

export default Textarea;
