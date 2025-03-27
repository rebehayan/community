import React from "react";

/**
 * @param {Object} props
 * @param {"primary" | "green" | "red" | "yellow"} [props.color] - 텍스트 색상
 * @param {React.ReactNode} props.children - 내용
 */

export default function Badge({ color, children }) {
  return <span className={`badge base ${color || ""}`}>{children}</span>;
}
