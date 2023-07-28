import React, { useState } from "react";
import { TableHeadProps } from "./TableHead.type";

const TableHead = ({
  columns,
  handleSorting,
  color,
  densePadding,
}: TableHeadProps) => {
  const [sortField, setSortField] = useState<string>("");
  const [order, setOrder] = useState<string>("asc");

  const handleSortingChange = (key: any) => {
    const sortOrder = key === sortField && order === "asc" ? "desc" : "asc";
    setSortField(key);
    setOrder(sortOrder);
    handleSorting(key, sortOrder);
  };
  return (
    <thead>
      <tr>
        {columns.map((column: any) => {
          const cl = column.sortable
            ? sortField === column.key && order === "asc"
              ? "up"
              : sortField === column.key && order === "desc"
              ? "down"
              : "default"
            : "";
          return (
            <th
              key={column.key}
              onClick={
                column.sortable
                  ? () => handleSortingChange(column.key)
                  : () => handleSorting()
              }
              className={`${cl} ${color ? `th-color` : ``} ${
                densePadding ? `th-padding` : ``
              }`}
            >
              {column.name ? column.name : column.key}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
