import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import QnA from "./pages/QnA/QnA";
import Designsystem from "./pages/Designsystem";
import DesignsystemReact from "./pages/DesignsystemReact";
import QACreate from "./pages/QnA/QACreate";
import QnAView from "./pages/QnA/QnAView";
import Login from "./pages/Sign/Login";
import NewsLetter from "./pages/Newsletter/NewsLetter";

export default function PageRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/qna" element={<QnA />} />
        <Route path="/qna/write" element={<QACreate />} />
        <Route path="/qna/:id" element={<QnAView />} />
        <Route path="/newsletter" element={<NewsLetter />} />
        <Route path="/designsystem" element={<Designsystem />} />
        <Route path="/designsystem-react" element={<DesignsystemReact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
