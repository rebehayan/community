import React, { useId } from "react";

/**
 * @param {Object} props
 * @param {"text" | "number" | "tel" | "email" | "url" | "search" | "password"} [props.type] - 아바타 크기
 */

export default function Input({ label, value, placeholder, onChange, type, error, ...props }) {
  const id = useId();

  const handleChange = (e) => {
    onChange?.(e.target.name, e.target.value);
  };

  return (
    <div className="form-row">
      {label && <label htmlFor={id}>{label}</label>}
      <input type={type ? type : "text"} className={`input ${error && "error"}`} placeholder={placeholder} id={id} value={value} onChange={handleChange} {...props} />
    </div>
  );
}
