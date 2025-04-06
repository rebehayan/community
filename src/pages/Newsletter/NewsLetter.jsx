import React from "react";
import useAuth from "../../util/useAuth";

export default function NewsLetter() {
  const { authSession } = useAuth();
  console.log(authSession);

  return (
    <div className="body">
      <div className="container">
        <h1>💌 리베하얀 월간 뉴스레터 - 2025년 4월호</h1>

        <div className="section">
          <h2>💬 인사말</h2>
          <p>안녕하세요, 리베하얀입니다! 이번 달에도 소중한 이야기를 전해드립니다.</p>
        </div>

        <div className="section">
          <h2>📰 이번 달 소식</h2>
          <ul>
            <li>React 기초 강의 영상 업데이트 🎥</li>
            <li>Vite 도입기 블로그 글 업로드 예정 📝</li>
          </ul>
        </div>

        <div className="section">
          <h2>🛠 실무 꿀팁</h2>
          <p>
            <strong>position-anchor</strong> 속성 써보셨나요? 스크롤 기준 고정 위치를 지정할 수 있어요!
          </p>
          <pre>
            <code>element position-anchor: --my-anchor;</code>
          </pre>
        </div>

        <div className="section">
          <h2>❓ Q&A</h2>
          <p>
            <strong>Q.</strong> Vite와 Webpack, 뭘 써야 하나요?
            <br />
            <strong>A.</strong> 프로젝트의 크기와 목적에 따라 달라요. 개인 프로젝트라면 Vite 추천!
          </p>
        </div>

        <div className="section">
          <h2>🎁 추천 콘텐츠</h2>
          <ul>
            <li>『모던 자바스크립트 Deep Dive』 📘</li>
            <li>
              <a href="#">CSS Tricks 블로그</a> ✨
            </li>
          </ul>
        </div>

        <div className="section">
          <h2>📌 다음 예고</h2>
          <p>다음 달에는 React 상태관리 비교 특집이 예정되어 있어요! 기대해주세요!</p>
          <a href="#" className="button">
            유튜브 채널 구독하기
          </a>
        </div>

        <div className="footer">
          이 메일은 리베하얀의 구독자에게 발송된 뉴스레터입니다.
          <br />
          수신 거부를 원하시면 여기를 클릭해주세요.
        </div>
      </div>
    </div>
  );
}
