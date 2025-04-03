import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

export function useGitLogin() {
  const [data, setdata] = useState([]);
  const [error, setError] = useState(null);
  const handleGitLogin = async () => {
    try {
      let { data, error } = await supabase.auth.signInWithOAuth({
        provider: "github",
        // options: {
        //   redirectTo: redirect, //로그인되면 이동할 주소이며, supabase의  OAuth 설정과 같아야함..
        // },
      });
      if (error) setError(error);
      setdata(data);
    } catch (error) {
      setError(error);
    }
  };

  return { data, error, handleGitLogin };
}

export function useLogout() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const Logout = async (redirect) => {
    try {
      let { error } = await supabase.auth.signOut();
      if (error) {
        setError(error);
      } else if (redirect) {
        navigate(redirect);
      }
    } catch (error) {
      setError(error);
    }
  };

  return { error, Logout };
}
