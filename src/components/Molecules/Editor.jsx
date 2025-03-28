import MarkdownEditor from "@uiw/react-markdown-editor";
import React, { useState } from "react";

export default function Editor({ onChange, ...props }) {
  const [markdown, setMarkdown] = useState("");
  const handleChange = (value) => {
    setMarkdown(value);
    onChange?.(value);
  };
  return (
    <div>
      <MarkdownEditor value={markdown} height="20rem" onChange={handleChange} components={{ img: ({ ...props }) => <img style={{ maxWidth: "100%" }} {...props} alt="" /> }} {...props} />
    </div>
  );
}
