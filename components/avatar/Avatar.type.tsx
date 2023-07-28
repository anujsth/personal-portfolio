export interface AvatarProps {
  id?: string;
  alt?: string;
  src?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  imageUrl?: any;
  name?: string;
  size?: "small" | "medium" | "large";
  variant?: "square" | "rounded";
  color?: "primary" | "secondary" | "sucess";
  children?: JSX.Element | JSX.Element[];
  badgevariant?: "active";
  badgeColor?: "primary" | "secondary" | "sucess";
}
