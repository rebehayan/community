import React, { useState } from "react";
import BoardWrite from "../components/Organisms/BoardWrite";
import Input from "../components/Molecules/Input";
import Select from "../components/Molecules/Select";
import Button from "../components/Molecules/Button";
import Block from "../components/Molecules/Block";
import Heading from "../components/Molecules/Heading";
const selectCategory = [
  {
    value: "catetory1",
    title: "선택1",
  },
  {
    value: "catetory2",
    title: "선택2",
  },
  {
    value: "catetory3",
    title: "선택3",
  },
];
export default function QACreate() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
  });
  const handleForm = (name, value) => {
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <Block>
      <Heading text="Post a Question" level="2" />
      <div style={{ "--col": "20rem" }}>
        <form onSubmit={handleSubmit}>
          <Input type="text" placeholder="제목을 입력하세요." name="title" label="제목" error={false} onChange={handleForm} />
          <Select label="카테고리" options={selectCategory} name="category" onChange={handleForm} />
          <BoardWrite name="description" onChange={handleForm} />
          <div className="align both">
            <Button color="white-outline" size="base" type="submit">
              목록
            </Button>
            <Button color="primary" size="base" type="submit">
              글쓰기
            </Button>
          </div>
        </form>
      </div>
    </Block>
  );
}
