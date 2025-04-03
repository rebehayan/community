import React, { useEffect, useRef } from "react";
import Text from "../Atom/Text";
import { Link } from "react-router-dom";
import { MdOutlineBookmarks } from "react-icons/md";
import { CiMenuBurger, CiSquareQuestion } from "react-icons/ci";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { HiOutlineFolderOpen } from "react-icons/hi";
import { PiNewspaper } from "react-icons/pi";
import Logo from "../Molecules/Logo";

export default function Sidebar() {
  const sidebarRef = useRef();

  const handleSidebar = () => {
    sidebarRef.current.classList.toggle("on");
  };
  const SidebarShow = () => {
    if (!sidebarRef.current.classList.contains("on")) {
      sidebarRef.current.classList.add("toggle");
    }
  };
  const SidebarHide = () => {
    if (!sidebarRef.current.classList.contains("on")) {
      sidebarRef.current.classList.remove("toggle");
    }
  };

  useEffect(() => {
    const width = sidebarRef.current.offsetWidth;
    document.body.style.paddingLeft = `${width + 30}px`;
  }, []);

  return (
    <div className="sidebar" ref={sidebarRef} onMouseEnter={SidebarShow} onMouseLeave={SidebarHide}>
      <div className="sidebar-top">
        <Logo />
        <Text size="sm">Rebehayan Community</Text>
        <button className="btn-menu" onClick={handleSidebar}></button>
      </div>
      <div className="inner-wrap">
        <div className="nav-aria">
          <Text tag="h2" size="xxs" className="title">
            Community
          </Text>
          <nav>
            <ul className="nav">
              <li>
                <Link to="/qna">
                  <span>
                    <RiQuestionAnswerLine />
                  </span>
                  <Text tag="b" size="xs">
                    자주묻는질문
                  </Text>
                </Link>
              </li>
              <li>
                <Link to="/qna">
                  <span>
                    <CiSquareQuestion />
                  </span>
                  <Text tag="b" size="xs">
                    질의응답
                  </Text>
                </Link>
              </li>
            </ul>
          </nav>
          <Text tag="h2" size="xxs" className="title">
            newsletter
          </Text>
          <nav>
            <ul className="nav">
              <li>
                <Link to="/qna">
                  <span>
                    <PiNewspaper />
                  </span>
                  <Text tag="b" size="xs">
                    뉴스레터 컬렉션
                  </Text>
                </Link>
              </li>
              <li>
                <Link to="/qna">
                  <span>
                    <MdOutlineBookmarks />
                  </span>
                  <Text tag="b" size="xs">
                    뉴스레터 구독
                  </Text>
                </Link>
              </li>
            </ul>
          </nav>
          <Text tag="h2" size="xxs" className="title">
            Design
          </Text>
          <nav>
            <ul className="nav">
              <li>
                <Link to="/designsystem">
                  <span>
                    <HiOutlineFolderOpen />
                  </span>
                  <Text tag="b" size="xs">
                    Design System HTML
                  </Text>
                </Link>
              </li>
              <li>
                <Link to="/designsystem-react">
                  <span>
                    <HiOutlineFolderOpen />
                  </span>
                  <Text tag="b" size="xs">
                    Design System React
                  </Text>
                </Link>
              </li>
            </ul>
          </nav>
          {/* https://anesta.ancorathemes.com/ */}
        </div>
      </div>
    </div>
  );
}
