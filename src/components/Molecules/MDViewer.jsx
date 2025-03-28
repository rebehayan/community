import MarkdownEditor from "@uiw/react-markdown-editor";
import React from "react";

export default function MDViewer({ markdown, height }) {
  return (
    <div>
      <MarkdownEditor.Markdown source={markdown} height={height} />
    </div>
  );
}
