import { ReactElement } from "react";
import { BreadcrumbItemProps } from "./BreadcrumbItem.type";
import "material-symbols";

const BreadcrumbItem = ({
  to,
  children,
  icon,
}: BreadcrumbItemProps): ReactElement => {
  
  return to ? (
    <a href={to}>
      {icon ? <span className="breadcrumbs-icon">{icon}</span> : ""}
      <span className={`${icon ? "breadcrumbs-list" : ""}`}>{children}</span>
    </a>
  ) : (
    <>
      {icon ? <span className={`icon-active`}>{icon}</span> : ""}
      <span className={`last-item ${icon ? "pl-20" : "last-item"}`}>{children}</span>
    </>
  );
};

export default BreadcrumbItem;
