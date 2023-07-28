export interface RadioProps {
  label?: string;
  disabled?: boolean;
  theme?: "primary" | "secondary" | "danger";
  emsg?: string;
  isError?: boolean;
  onChange?: (e: any) => void;
  value?: string;
}
