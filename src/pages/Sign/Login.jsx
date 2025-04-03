import React, { useContext } from "react";
import Button from "../../components/Molecules/Button";
import { useGitLogin, useLogout } from "../../util/useSign";
import { AuthContext } from "../../util/useAuth";

export default function Login() {
  const { data, error, handleGitLogin } = useGitLogin();
  const { Logout } = useLogout();
  const { authSession } = useContext(AuthContext);

  console.log(authSession);

  const handleLogin = async () => {
    // let { data, error } = await supabase.auth.signInWithOAuth({
    //   provider: "github",
    //   options: {
    //     redirectTo: "http://localhost:5173/login", //로그인되면 이동할 주소
    //   },
    // });
    await handleGitLogin();
    console.log(data, error);
  };

  const handleLogout = async () => {
    // let { error } = await supabase.auth.signOut();
    // console.log(error);
    await Logout("/login");
  };

  return (
    <div>
      {authSession ? (
        <Button onClick={handleLogout} color="primary" size="base">
          로그아웃
        </Button>
      ) : (
        <Button onClick={handleLogin} color="primary" size="base">
          로그인
        </Button>
      )}
    </div>
  );
}
