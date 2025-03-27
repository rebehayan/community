import React, { useId, useState } from "react";

/**
 * @param {Object} props
 * @param {"text" | "number" | "tel" | "email" | "url" | "search" | "password"} [props.type] - 아바타 크기
 */

export default function Input({ label, value, placeholder, onChange, type, ...props }) {
  const id = useId();
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const value = e.target.value;
    onChange(value);

    setIsValid(value.trim() !== "");
  };

  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input type={type ? type : "text"} className={`input ${!isValid && "error"}`} placeholder={placeholder} id={id} value={value} onChange={handleChange} {...props} />
      {!isValid && <span className="text-danger">{label}값을 입력해주세요.</span>}
    </div>
  );
}
