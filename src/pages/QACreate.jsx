import React, { useState } from "react";
import Input from "../components/Molecules/Input";
import Select from "../components/Molecules/Select";
import Button from "../components/Molecules/Button";
import Block from "../components/Molecules/Block";
import Heading from "../components/Molecules/Heading";
import Portal from "../util/Portal";
import Toast from "../components/Molecules/Toast";
import useCreateData from "../util/useCreateData";
import Editor from "../components/Molecules/Editor";

const selectCategory = [
  {
    value: "",
    title: "선택하세요",
  },
  {
    value: "CSS",
    title: "CSS",
  },
  {
    value: "HTML",
    title: "HTML",
  },
  {
    value: "Javascript",
    title: "Javascript",
  },
  {
    value: "React",
    title: "React",
  },
  {
    value: "SCSS",
    title: "SCSS",
  },
  {
    value: "TailwindCSS",
    title: "TailwindCSS",
  },
  {
    value: "Mobile",
    title: "Mobile",
  },
  {
    value: "Responsive",
    title: "Responsive",
  },
  {
    value: "Website",
    title: "Website",
  },
  {
    value: "Web Accessibility",
    title: "Web Accessibility",
  },
  {
    value: "웹호환성",
    title: "웹호환성",
  },
  {
    value: "업무",
    title: "업무",
  },
];

const initialData = {
  title: "",
  category: "",
  description: "",
};

export default function QACreate() {
  const [formData, setFormData] = useState(initialData);
  const [error, setError] = useState("");
  const [toast, setToast] = useState(false);
  const { create, loading: createLoading } = useCreateData();

  const handleForm = (name, value) => {
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      setToast(true);
      setError("제목을 넣어주세요.");
      return;
    }
    if (!formData.category.trim()) {
      setToast(true);
      setError("카테고리를 선택해주세요.");
      return;
    }
    if (!formData.description.trim()) {
      setToast(true);
      setError("내용을 넣어주세요.");
      return;
    }

    if (createLoading) return <div>로딩중...</div>;

    try {
      await create("qna", formData);
      setFormData(initialData);
    } catch (error) {
      console.log(error);
    } finally {
      history.back();
    }
  };
  return (
    <>
      <Block>
        <Heading text="Post a Question" level="2" />
        <div style={{ "--col": "20rem" }}>
          <form onSubmit={handleSubmit}>
            <Input type="text" placeholder="제목을 입력하세요." name="title" label="제목" value={formData.title} error={false} onChange={handleForm} />
            <Select label="카테고리" options={selectCategory} name="category" onChange={handleForm} value={formData.category} />
            <Editor name="description" onChange={handleForm} />
            <div className="mt30 align both">
              <Button color="white-outline" size="base" type="button" onClick={() => history.back()}>
                목록
              </Button>
              <Button color="primary" size="base" type="submit">
                글쓰기
              </Button>
            </div>
          </form>
        </div>
      </Block>
      <Portal selector="#toast">
        <Toast state={toast} message={error} onClose={() => setToast(false)} />
      </Portal>
    </>
  );
}
