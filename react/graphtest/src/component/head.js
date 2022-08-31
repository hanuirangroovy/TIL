import React from "react";

// css
import "../css/component/head.css";

export default function Head({ score }) {
  return (
    <>
      <div className="HeadContainer">
        <h1>2022년 8월 31일</h1>
        <div className="day">수요일</div>
        <div className="scorepoint">나의 영어 점수: {score} </div>
      </div>
    </>
  );
}
