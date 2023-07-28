export interface SelectProps {
  option: OptionTypes[];
  handleChange: (e: any) => void;
  size: "small" | "medium" | "large";
  disabled?:boolean;
  isError?:boolean;
  errorMessage?:string;
  isMultiSelect?:boolean;
  placeholder?:string;
  label?:string;
  valueSelected?:any
}

export interface OptionTypes {
  id: number;
  name: string;
  value: string;
  avatar?: string;
  error?: string;
}

