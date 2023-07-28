export type ToggleButtonProp = {
  stateTrue: string;
  stateFalse: string;
  lightColor?: string;
  darkColor?: string;
  textAlignLeft?: boolean;
  variant?: string;
  size?: string;
  borderless?: boolean;
  onMouseEnter?: (e: React.MouseEvent) => void;
  shape?: "square" | "circle";
};
