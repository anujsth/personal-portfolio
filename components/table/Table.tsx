import React, { useState } from "react";
import TableHead from "./tableHead/TableHead";
import TableBody from "./tableBody/TableBody";
import { TableProps } from "./Table.type";

export const Table = ({
  columns,
  rows,
  caption,
  stripe,
  color,
  border,
  densePadding,
}: TableProps) => {
  const data = rows;
  const [sorting, setSorting] = useState<any>({ key: "", order: "" });

  if (sorting.key) {
    const reversed = sorting.order === "asc" ? 1 : -1;
    rows.sort((a: any, b: any) =>
      typeof a[sorting.key] === "string" && typeof b[sorting.key] === "string"
        ? reversed * a[sorting.key].localeCompare(b[sorting.key])
        : reversed * (a[sorting.key] - b[sorting.key])
    );
  }
  return (
    <>
      <div className="table-caption">{caption}</div>
      <table className={`table-component ${border ? `table-border` : ""}`}>
        <TableHead
          {...{ columns, color, densePadding }}
          handleSorting={(key: string, order: string) =>
            setSorting({ key, order })
          }
        />
        <TableBody {...{ columns, rows, stripe, densePadding,border }} />
      </table>
    </>
  );
};
