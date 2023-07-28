export interface AccordionItemProps {
  isActive: boolean;
  onClick?: (e: any) => void;
  children: React.ReactNode;
  color?: "primary" | "secondary" | "danger" | "success";
  margin?: boolean;
  border?: boolean;
}
