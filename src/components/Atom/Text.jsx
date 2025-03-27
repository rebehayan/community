import React from "react";

/**
 * @param {Object} props
 * @param {keyof React.JSX.IntrinsicElements} props.tag - HTML 태그
 * @param {"xxxs" | "xxs" | "xs" | "sm" | "base" | "md" | "lg"} [props.size] - 텍스트 크기
 * @param {"primary" | "secondary" | "danger" | "warning" | "success"} [props.color] - 텍스트 색상
 * @param {string} [props.className] - 추가 클래스
 * @param {React.ReactNode} props.children - 내용
 */

export default function Text({ tag, size, children, color, className }) {
  const TagName = tag || "div";
  return <TagName className={`text-${size} ${className || ""} ${color ? `text-${color}` : ""}`}>{children}</TagName>;
}
