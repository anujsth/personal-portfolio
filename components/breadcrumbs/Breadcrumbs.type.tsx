import { ReactElement } from "react";

export interface BreadcrumbsProps{
    separator?: string;
    children:ReactElement[]
    to?:string;
    icon?: string;
}
