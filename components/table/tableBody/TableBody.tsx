import React from "react";
import { TableBodyProps } from "./TableBody.type";

const TableBody = ({
  columns,
  rows,
  stripe,
  densePadding,
  border,
}: TableBodyProps) => {
  return (
    <tbody>
      {rows?.map((row: any, index: any) => {
        return (
          <tr key={index}>
            {columns?.map((column: any) => {
              return (
                <td
                  key={`${column.key}_${index}`}
                  className={`${stripe ? `td-stripe` : null} 
                  ${densePadding ? `td-padding` : ``}
                  ${border ? `td-border` : ``}`}
                >
                  {row[column.key] || "——"}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
