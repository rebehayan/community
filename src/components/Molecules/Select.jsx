import React, { useId } from "react";

export default function Select({ label, onChange, options, ...props }) {
  const id = useId();

  const handleChange = (e) => {
    onChange?.(e.target.name, e.target.value);
  };

  return (
    <div className="form-row">
      {label && <label htmlFor={id}>{label}</label>}
      <select id={id} onChange={handleChange} className="select" {...props}>
        {options.map((item, index) => (
          <React.Fragment key={index}>
            <option value={item.value}>{item.title}</option>
          </React.Fragment>
        ))}
      </select>
    </div>
  );
}
