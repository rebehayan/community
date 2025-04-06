import React, { createContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

// 전역 상태 생성
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authSession, setAuthSession] = useState(null);

  useEffect(() => {
    // 처음 페이지 로딩 시 현재 세션 가져오기
    supabase.auth.getSession().then(({ data: { session } }) => {
      setAuthSession(session?.user || null);
    });

    // 실시간으로 로그인/로그아웃 감지
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      // console.log("auth event:", event);
      setAuthSession(session?.user || null);
    });

    // 컴포넌트 언마운트 시 이벤트 해제
    return () => data.subscription.unsubscribe();
  }, []);

  return <AuthContext value={{ authSession }}>{children}</AuthContext>;
}
