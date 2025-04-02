import MarkdownEditor from "@uiw/react-markdown-editor";
import React, { useState } from "react";

export default function Editor({ label, name, height = "20rem", onChange, ref, ...props }) {
  const [markdown, setMarkdown] = useState("");
  const handleChange = (value) => {
    setMarkdown(value);
    onChange?.(name, value);
  };
  return (
    <div className="form-row">
      {label && <label>{label}</label>}
      <MarkdownEditor
        value={markdown}
        height={height}
        onChange={handleChange}
        visible={true}
        components={{ img: ({ ...props }) => <img style={{ maxWidth: "100%" }} {...props} ref={ref} alt="" /> }}
        {...props}
      />
    </div>
  );
}
