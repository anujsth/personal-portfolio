export interface CheckboxProps {
    label?:string;
    disabled?:boolean;
    size?: "small" | "medium" | "large";
    isError?: boolean;
    errorMessage?:string;
    checked?:boolean
}