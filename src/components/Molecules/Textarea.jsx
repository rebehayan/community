import React, { useId, useState } from "react";

export default function Textarea({ label, value, maxLength, onChange, placeholder, height }) {
  const id = useId();
  const [isValid, setIsValid] = useState(true);

  const isHeight = height && { "--height": height };

  const handleChange = (e) => {
    const isValue = e.target.value;
    onChange(isValue);

    if (maxLength) {
      setIsValid(isValue.length <= maxLength);
    }
  };
  return (
    <div className="form-row">
      {label && <label htmlFor={id}>{label}</label>}
      <textarea value={value || ""} style={isHeight} id={id} className="textarea" maxLength={maxLength} onChange={handleChange} placeholder={placeholder}></textarea>
      {maxLength && (
        <div>
          {value.length} / {maxLength}
        </div>
      )}
      {!isValid && (
        <span>
          최대 <span className="text-danger">{maxLength}</span>자를 초과할 수 없습니다.
        </span>
      )}
    </div>
  );
}
