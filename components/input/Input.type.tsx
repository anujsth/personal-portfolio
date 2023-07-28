export interface InputProps {
  type:
    | "text"
    | "email"
    | "password"
    | "number"
    | "date"
    | "datetime-local"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "time"
    | "url"
    | "week";
  value?: string;
  placeholder?: string;
  id?: string;
  disabled?: boolean;
  readOnly?: boolean;
  isError?: boolean;
  handleChange?: (e: any) => void;
  errorMessage?: string;
  icon?: string;
  inputWidth?: number;
  position?: "start" | "end";
  label?: string;
  variant?: "filled" | "flushed";
  required?: boolean;
  "aria-label"?: string;
  flatpickrConfig?: Object;
}
