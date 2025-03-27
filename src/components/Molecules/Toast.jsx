import React, { useEffect } from "react";

export default function Toast({ state, message, onClose }) {
  useEffect(() => {
    if (state) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  return (
    <div className={`toast text-sm ${state ? "show" : ""}`} aria-live="assertive">
      {message}
    </div>
  );
}
