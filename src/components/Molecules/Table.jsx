import React from "react";

export default function Table({ style, caption, colmns, children }) {
  return (
    <div>
      <table className={`table-${style}`}>
        <caption>{caption}</caption>
        <colgroup>
          {colmns.map((col, index) => (
            <col key={index} style={{ width: col.width }} />
          ))}
        </colgroup>
        <thead>
          <tr>
            {colmns.map((col, index) => (
              <th key={index}>{col.th}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
