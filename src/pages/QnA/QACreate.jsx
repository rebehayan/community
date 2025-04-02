import React, { useRef, useState } from "react";
import Input from "../../components/Molecules/Input";
import Select from "../../components/Molecules/Select";
import Button from "../../components/Molecules/Button";
import Block from "../../components/Molecules/Block";
import Heading from "../../components/Molecules/Heading";
import Portal from "../../util/Portal";
import Toast from "../../components/Molecules/Toast";
import useCreateData from "../../util/useCreateData";
import Editor from "../../components/Molecules/Editor";
import { useNavigate } from "react-router-dom";
import Text from "../../components/Atom/Text";

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
  const titleRef = useRef();
  const categoryRef = useRef();
  const EditorRef = useRef();
  const navigate = useNavigate();
  const { create, loading: createLoading } = useCreateData();

  const handleForm = (name, value) => {
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const showToast = (message) => {
    setError(message);
    setToast(true);

    if (message.includes("제목")) titleRef.current.focus();
    if (message.includes("카테고리")) categoryRef.current.focus();
    if (message.includes("내용")) EditorRef.current?.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return showToast("제목을 넣어주세요.");
    if (!formData.category.trim()) return showToast("카테고리를 선택해주세요.");
    if (!formData.description.trim()) return showToast("내용을 넣어주세요.");

    if (createLoading) return <div>로딩중...</div>;

    try {
      await create("qna", formData);
      setFormData(initialData);
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Block>
        <Heading text="질의응답 등록" level="2" />
        <div style={{ "--col": "20rem" }}>
          <form onSubmit={handleSubmit}>
            <Input type="text" placeholder="제목을 입력하세요." name="title" label="제목" value={formData.title} error={false} onChange={handleForm} ref={titleRef} />
            <Select label="카테고리" options={selectCategory} name="category" onChange={handleForm} value={formData.category} ref={categoryRef} />
            <Editor label="내용" name="description" onChange={handleForm} height="40rem" ref={EditorRef} />
            <Text tag="p" size="xxs" className="text-right mt10">
              해당 에디터는 마크다운(Markdown)으로 작성이 됩니다. 마크다운 관련 팁을 얻고 싶으시다면 여기를 클릭해주세요.
            </Text>
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
