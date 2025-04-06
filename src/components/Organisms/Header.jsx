import React, { useEffect, useRef } from "react";
import Logo from "../Molecules/Logo";
import Search from "./Search";
import Profile from "./Profile";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Molecules/Button";
import useAuth from "../../util/useAuth";

export default function Header() {
  const headerRef = useRef();
  const { authSession } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

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
      {authSession ? (
        <Profile />
      ) : (
        <Button onClick={handleLogin} color="secondary" size="base" type="button">
          로그인
        </Button>
      )}
      ;
    </header>
  );
}
