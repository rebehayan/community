import React, { useState } from "react";
import Button from "../../components/Molecules/Button";
import { useGitLogin, useLogout } from "../../util/useSign";
// import useAuth from "../../util/useAuth";
import Input from "../../components/Molecules/Input";
import Checkbox from "../../components/Molecules/Checkbox";
import Block from "../../components/Molecules/Block";

const initialData = {
  email: "",
  password: "",
  save: false,
};

export default function Login() {
  const { handleLogin } = useGitLogin();
  const { Logout } = useLogout();
  // const { authSession } = useAuth();
  const [formData, setFormData] = useState(initialData);

  const handleGitLogin = async () => {
    await handleLogin();
  };

  const handleLogIn = async () => {
    await Logout();
  };

  const handleForm = (name, value) => {
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSave = (value, checked) => {
    setFormData((prev) => {
      return {
        ...prev,
        save: checked,
      };
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <Block tag="div" className="login">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>로그인</legend>
          <Input type="email" label="아이디" name="email" onChange={handleForm} placeholder="이메일을 입력하세요." />
          <Input type="password" label="비밀번호" name="password" onChange={handleForm} placeholder="비밀번호를 입력하세요." />
          <Checkbox label="아이디 저장" name="save" onChange={handleSave} />
          <Button onClick={handleLogIn} color="primary" size="base" type="submit">
            로그인
          </Button>
        </fieldset>
      </form>
      <Button onClick={handleGitLogin} color="primary" size="base">
        Github 로그인
      </Button>
    </Block>
  );
}
