import React from "react";

export default function Block({ tag, children, ...props }) {
  const TagName = tag || "div";
  return (
    <TagName className="block" {...props}>
      {children}
    </TagName>
  );
}
