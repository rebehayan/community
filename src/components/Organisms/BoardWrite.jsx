import React from "react";
import Editor from "../Molecules/Editor";

export default function BoardWrite({ name, onChange }) {
  const handleEditor = (value) => {
    onChange?.(name, value);
  };
  return (
    <div className="form-row">
      <label role="none">Description</label>
      <Editor onChange={handleEditor} />
    </div>
  );
}
