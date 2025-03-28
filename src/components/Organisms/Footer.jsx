import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <a href="https://rebehayan.vercel.app/" target="_blank">
        Rebehayan
      </a>{" "}
      © {year}. All Rights Reserved.
    </footer>
  );
}
