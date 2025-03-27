import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Logo() {
  return (
    <h1 className="logo">
      <Link to="/">
        <img src={logo} alt="Rebehayan Community" />
      </Link>
    </h1>
  );
}
