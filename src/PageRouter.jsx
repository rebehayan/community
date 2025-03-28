import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import QnA from "./pages/QnA";
import Designsystem from "./pages/Designsystem";
import DesignsystemReact from "./pages/DesignsystemReact";
import QACreate from "./pages/QACreate";

export default function PageRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/qna" element={<QnA />} />
        <Route path="/qna/write" element={<QACreate />} />
        <Route path="/designsystem" element={<Designsystem />} />
        <Route path="/designsystem-react" element={<DesignsystemReact />} />
      </Routes>
    </>
  );
}
