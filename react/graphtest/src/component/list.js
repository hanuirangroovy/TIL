import React, { useState } from "react";

// css
import "../css/component/list.css";

export default function List({ score, setScore }) {
  const [scoreEng, setScoreEng] = useState(0);

  const writeScore = (e) => {
    setScoreEng(e.target.value);
  };

  const saveScore = () => {
    if (scoreEng >= 0 && scoreEng <= 100) {
      setScore(scoreEng);
    } else {
      alert("점수는 0~100점 사이로 작성해야합니다.");
    }
  };

  const enterScore = (e) => {
    if (e.key === "Enter") {
      if (scoreEng >= 0 && scoreEng <= 100) {
        setScore(scoreEng);
      } else {
        alert("점수는 0~100점 사이로 작성해야합니다.");
      }
    }
  };

  return (
    <>
      <div className="ListContainer">영어 점수 입력</div>
      <input
        className="Inputbox"
        onChange={writeScore}
        type="text"
        autoFocus
        onKeyUp={enterScore}
        placeholder="점수를 입력 후, Enter를 누르세요"
      />
      <button onClick={saveScore}>저장</button>
    </>
  );
}
