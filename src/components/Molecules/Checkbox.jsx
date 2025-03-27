import React, { useId } from "react";

export default function Checkbox({ label, value, checked, onChange }) {
  const id = useId();

  const handleChecked = (e) => {
    onChange(value, e.target.checked);
  };

  return (
    <div>
      <input type="checkbox" checked={checked} onChange={handleChecked} id={id} className="check-type1" />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
