import React from "react";

export default function Block({ tag, children, className, ...props }) {
  const TagName = tag || "div";
  return (
    <TagName className={`block ${className}`} {...props}>
      {children}
    </TagName>
  );
}
