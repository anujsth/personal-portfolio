export interface SwitchProps {
  label?: string;
  theme?: "primary" | "secondary" | "success" | "danger";
  size: "small" | "medium" | "large";
  Disable?: boolean;
  changed?: any;
}
