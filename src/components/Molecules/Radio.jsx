import React, { useId } from "react";

export default function Radio({ label, value, name, checked, onChange }) {
  const id = useId();

  const handleChecked = () => {
    onChange(value);
  };

  return (
    <div>
      <input type="radio" name={name} checked={checked} onChange={handleChecked} id={id} className="radio-type1" />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
