export interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  loading?: "lazy" | "eager";
  variant?: "rounded" | "circle" | "rectangle";
  onLoad?: () => void;
  onError?: () => void;
  className?:string;
}
