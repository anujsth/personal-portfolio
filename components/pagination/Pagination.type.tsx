export interface PaginationProps{
    data:any[]
    title:string
    buttonConst:number;
    contentPerPage:number;
    disabled?:boolean;
    color?:"primary" | "secondary" | "success"
    variant?: "outline" | "rounded" | "square"
}

