export interface TextareaProps {
  label?: string;
  size?: "small" | "medium" | "large" | "fullwidth";
  placeholder?: string;
  color?: "primary" | "secondary" | "success";
  disabled?: boolean;
  spellCheck?: boolean;
  value?: string;
  readonly?: boolean;
  error?: boolean;
  onChange?: (e: any) => void;
}
