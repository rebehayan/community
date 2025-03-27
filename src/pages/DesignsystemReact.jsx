import React, { useState } from "react";
import Text from "../components/Atom/Text";
import Button from "../components/Molecules/Button";
import { Link } from "react-router-dom";
import Badge from "../components/Molecules/Badge";
import Avatar from "../components/Molecules/Avatar";
import avatarImage from "/src/assets/logo.png";
import Input from "../components/Molecules/Input";
import Select from "../components/Molecules/Select";
import Textarea from "../components/Molecules/Textarea";
import Checkbox from "../components/Molecules/Checkbox";
import Radio from "../components/Molecules/Radio";
import Block from "../components/Molecules/Block";
import Tab from "../components/Molecules/Tab";
import Search from "../components/Organisms/Search";
import Dialog from "../components/Molecules/Dialog";
import Toast from "../components/Molecules/Toast";
import Portal from "../util/Portal";
import Profile from "../components/Organisms/Profile";
import Table from "../components/Molecules/Table";
import { dummyData } from "../data/table";

const optionArray = [
  {
    title: "선택1",
    value: "option1",
  },
  {
    title: "선택2",
    value: "option2",
  },
];

const tableColmns = [
  { th: "제목", key: "title", width: "30%" },
  { th: "태그", key: "tags", width: "20%" },
  { th: "해결", key: "state", width: "10%" },
  { th: "조회수", key: "hit", width: "10%" },
  { th: "작성자", key: "writer", width: "10%" },
];

const tabNav = ["탭메뉴1", "탭메뉴2", "탭메뉴3"];

export default function DesignsystemReact() {
  const [isValidInput, setIsValidInput] = useState("");
  const [isValidTextarea, setIsValidTextarea] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isRadioChecked, setIsRadioChecked] = useState("option1");
  const [toast, setToast] = useState(false);
  const [dialog, setdialog] = useState(false);

  const handleChange = (value) => {
    setIsValidInput(value);
  };

  const handleButton = (e) => {
    console.log(e.target.textContent);
  };

  const handleSelect = (value) => {
    console.log(value);
  };

  const handleTextarea = (value) => {
    setIsValidTextarea(value);
  };

  const handleCheckbox = (value, checked) => {
    console.log(value, checked);
    setIsChecked(checked);
  };

  const handleRadio = (value) => {
    setIsRadioChecked(value);
    console.log(value);
  };

  const handleSearch = (value) => {
    console.log(value);
  };

  const handleToast = () => {
    setToast(true);
  };
  const handleDialogOpen = () => {
    setdialog(true);
  };
  const handleDialogClose = () => {
    setdialog(false);
  };

  return (
    <div>
      <Text tag="h2" size="lg" color="primary">
        Atom
      </Text>
      <Text tag="h3" size="md">
        Text
      </Text>

      <Text tag="div" size="lg">
        lg
      </Text>
      <Text tag="div" size="md">
        md
      </Text>
      <Text tag="div" size="base">
        base
      </Text>
      <Text tag="div" size="sm">
        sm
      </Text>

      <Text tag="h3" size="md">
        Color
      </Text>
      <Text tag="div" size="base" color="primary">
        primary
      </Text>
      <Text tag="div" size="base" color="secondary">
        secondary
      </Text>
      <Text tag="div" size="base" color="danger">
        danger
      </Text>
      <Text tag="div" size="base" color="warning">
        warning
      </Text>
      <Text tag="div" size="base" color="success">
        success
      </Text>

      <Text tag="h2" size="lg" color="primary">
        Molecules
      </Text>
      <Text tag="h3" size="md">
        Button
      </Text>
      <Button type="submit" color="primary" size="base" onClick={handleButton}>
        onClick Button
      </Button>
      <Button color="secondary" size="base">
        button
      </Button>
      <Button color="white-outline" size="base">
        button
      </Button>
      <Link to="/" className="btn-more">
        view All
      </Link>
      <button className="btn-menu" aria-label="메뉴"></button>
      <button className="btn-search" aria-label="검색"></button>

      <Text tag="h3" size="md">
        Badges
      </Text>
      <Badge color="primary">primary</Badge>
      <Badge color="green">green</Badge>
      <Badge color="red">red</Badge>
      <Badge color="yellow">yellow</Badge>
      <Badge color="white-outline">white-outline</Badge>

      <Text tag="h3" size="md">
        Avatar
      </Text>
      <Avatar alt="대체텍스트" size="lg" image={avatarImage} />
      <Avatar alt="대체텍스트" size="base" image={avatarImage} />
      <Avatar alt="대체텍스트" size="sm" image={avatarImage} />

      <Text tag="h3" size="md">
        Forms
      </Text>
      <Input type="text" placeholder="이름을 입력하세요." label="이름" value={isValidInput} onChange={handleChange} />
      <Select label="선택" options={optionArray} onChange={handleSelect} />
      <Textarea label="내용" height="20rem" maxLength="20" value={isValidTextarea} onChange={handleTextarea} placeholder="입력하세요." />
      <Checkbox label="선택1" value="option1" checked={isChecked} onChange={handleCheckbox} />
      <Radio label="선택1" name="group1" value="option1" checked={isRadioChecked === "option1"} onChange={handleRadio} />
      <Radio label="선택2" name="group2" value="option2" checked={isRadioChecked === "option2"} onChange={handleRadio} />
      <Block>상자영역</Block>
      <Tab tabNavs={tabNav}>
        <div>탭 1의 내용</div>
        <div>탭 2의 내용</div>
        <div>탭 3의 내용</div>
      </Tab>
      <ul className="tag-list">
        <li>
          <Badge color="white-outline">TAG</Badge>
        </li>
        <li>
          <Badge color="white-outline">TAG</Badge>
        </li>
        <li>
          <Badge color="white-outline">TAG</Badge>
        </li>
      </ul>

      <Button onClick={handleDialogOpen} color="primary" size="base">
        팝업열기
      </Button>
      <Button onClick={handleDialogClose} color="primary" size="base">
        팝업닫기
      </Button>
      <Portal selector="#dialog">
        <Dialog open={dialog}>
          팝업내용
          <form method="dialog">
            <Button size="base" color="white-outline" type="submit" onClick={handleDialogClose}>
              닫기
            </Button>
          </form>
        </Dialog>
      </Portal>

      <Button onClick={handleToast} color="primary" size="base">
        토스트 열기
      </Button>
      <Portal selector="#toast">
        <Toast state={toast} message="안녕하세요" onClose={() => setToast(false)} />
      </Portal>
      <Table style="type1" caption="All Topics" colmns={tableColmns}>
        {dummyData.map(({ id, title, tags, state, hit, writer }) => (
          <tr key={id}>
            <td>
              <Link to={`/topicview/${id}`}>{title}</Link>
            </td>
            <td>
              <ul className="tag-list">
                {tags.map((tag, index) => (
                  <li key={index}>
                    <Badge color="white-outline">{tag}</Badge>
                  </li>
                ))}
              </ul>
            </td>
            <td>{state}</td>
            <td>{hit}</td>
            <td>{writer}</td>
          </tr>
        ))}
      </Table>

      <Text tag="h2" size="lg" color="primary">
        Organisms
      </Text>
      <Search onSubmit={handleSearch} />
      <Profile />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
