import React from "react";
import Avatar from "../Molecules/Avatar";
import profile from "../../assets/logo.png";
import Text from "../Atom/Text";
import Block from "../Molecules/Block";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosLogOut } from "react-icons/io";
import { LuClipboardPenLine } from "react-icons/lu";
import { useLogout } from "../../util/useSign";

export default function Profile() {
  const { Logout } = useLogout();

  const handleClick = (e) => {
    e.preventDefault();
    const pop = document.getElementById("profile");
    pop?.showPopover?.();
  };

  const hanldeLogout = async () => {
    await Logout();
  };

  return (
    <div>
      <a href="" role="button" onClick={handleClick} className="profile">
        <Avatar alt="rebehayan" image={profile} size="sm" />
        <Text tag="div" size="sm">
          Hi, Rebehayan
        </Text>
        <IoIosArrowDown />
      </a>
      <Block id="profile" popover="auto">
        <Link to="/">
          <LuClipboardPenLine />
          <Text tag="span" size="xs">
            내 정보
          </Text>
        </Link>
        <Link to="" onClick={hanldeLogout}>
          <IoIosLogOut />
          <Text tag="span" size="xs">
            로그아웃
          </Text>
        </Link>
      </Block>
    </div>
  );
}
