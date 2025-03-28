import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Molecules/Button";

export default function QnA() {
  const navigate = useNavigate();
  const handleWrite = () => {
    navigate("/qna/write");
  };

  return (
    <>
      <div className="text-base">QnA</div>
      <Button onClick={handleWrite} color="primary" size="base">
        글쓰기
      </Button>
    </>
  );
}
