import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export default function Portal({ children, selector }) {
  const [mounted, setMounted] = useState(false);
  const [container, setContainer] = useState(null);

  useEffect(() => {
    const el = document.querySelector(selector);
    if (el) {
      setContainer(el);
      setMounted(true);
    }
  }, [selector]);

  if (!mounted || !container) return;

  return createPortal(children, container);
}
