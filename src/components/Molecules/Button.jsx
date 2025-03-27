import React from "react";

/**
 * @param {Object} props
 * @param {"button" | "submit" | "reset"} [props.type] - 버튼타입
 * @param {"base"} [props.size] - 텍스트 크기
 * @param {"primary" | "secondary" | "white-outline"} [props.color] - 텍스트 색상
 * @param {React.ReactNode} props.children - 내용
 * @param {() => void} props.onClick - 클릭이벤트
 */

export default function Button({ type, size, color, children, onClick }) {
  return (
    <button type={type || "button"} onClick={onClick} className={`btn ${size || ""} ${color || ""}`}>
      {children}
    </button>
  );
}
