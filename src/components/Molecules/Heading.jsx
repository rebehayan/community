import React from "react";
import Text from "../Atom/Text";

export default function Heading({ level, text }) {
  return (
    <div className="content-heading">
      <Text tag={`h${level}`} size="md">
        {text}
      </Text>
    </div>
  );
}
