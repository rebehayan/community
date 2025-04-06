import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="align both">
        <div>
          <a href="https://rebehayan.vercel.app/" target="_blank">
            Rebehayan
          </a>{" "}
          © {year}. All Rights Reserved.
        </div>
        <div>
          <Link to="https://rebehayan.vercel.app/" target="_blank">
            Rebehayan
          </Link>
          /
          <Link to="https://anesta.ancorathemes.com/" target="_blank">
            Skin
          </Link>
        </div>
      </div>
    </footer>
  );
}
