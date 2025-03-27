import React, { useEffect, useRef } from "react";
import Block from "./Block";

export default function Dialog({ open, modal, children, ...props }) {
  const dialogRef = useRef();

  useEffect(() => {
    const dialog = dialogRef.current;

    if (open) {
      document.body.style.overflow = "hidden";
      modal ? dialog.showModal() : dialog.show();
    } else {
      document.body.style.overflow = "visible";
      dialog.close();
    }
  }, [open]);

  return (
    <Block tag="dialog" ref={dialogRef} {...props}>
      {children}
    </Block>
  );
}
