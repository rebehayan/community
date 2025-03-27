import React, { useEffect, useRef } from "react";
import Logo from "../Molecules/Logo";
import Search from "./Search";
import Profile from "./Profile";

export default function Header() {
  const headerRef = useRef();

  useEffect(() => {
    const updateSpace = () => {
      const height = headerRef.current.offsetHeight;
      document.body.style.paddingTop = `${height + 30}px`;
    };

    updateSpace();
    window.addEventListener("resize", updateSpace);
    return () => {
      window.removeEventListener("resize", updateSpace);
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Logo />
      <Search />
      <Profile />
    </header>
  );
}
