import React, { useState } from "react";
import Input from "../Molecules/Input";

export default function Search({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <form className="search-type1" onSubmit={handleSubmit}>
      <Input type="search" title="검색어입력" placeholder="검색어를 입력해주세요." value={inputValue} onChange={setInputValue} required />
      <button className="btn-search" aria-label="검색"></button>
    </form>
  );
}
