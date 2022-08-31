import React from "react";

// css
import "../css/component/list.css";

export default function List({ score, setScore }) {
  const onChange = (e) => {
    setScore(e.target.value);
  };

  return (
    <>
      <div className="ListContainer">영어 점수 입력</div>
      <input
        className="Inputbox"
        value={score}
        onChange={onChange}
        type="text"
        autoFocus
        placeholder="점수를 입력 후, Enter를 누르세요"
      />
    </>
  );
}
