import React, { useRef, useEffect, useState } from "react";
import "../css/component/chart.css";
// css

export default function Chart({ score, setScore }) {
  const canvasRef = useRef(null);
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

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // setScoreTem(score);

    // 점수 사각형 색칠 fillRect(x, y, width, height)
    // const scorelist = [score, 50, 30];
    // const scorelocation = [60, 125, 195];

    // for (let i = 0; i < 3; i++) {
    //   ctx.fillStyle = "darkred";
    //   ctx.fillRect(50, scorelocation[i], scorelist[i] * 4, 20);
    // }

    if (score) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "darkred";
      ctx.fillRect(50, 60, score * 4, 20);
    }

    ctx.fillStyle = "darkred";
    ctx.fillRect(50, 125, 210, 20);
    ctx.fillRect(50, 195, 60, 20);

    // 과목
    var english = "영어";
    var science = "과학";
    var math = "수학";

    ctx.strokeText(english, 0, 70);
    ctx.strokeText(science, 0, 140);
    ctx.strokeText(math, 0, 210);

    // 표준
    var understn = "표준이하";
    var stn = "표준";
    var upstn = "표준이상";

    ctx.strokeText(understn, 100, 10);
    ctx.strokeText(stn, 220, 10);
    ctx.strokeText(upstn, 340, 10);

    // 그래프 틀 경로 그리기
    ctx.beginPath();
    ctx.moveTo(450, 30); // 시작점 이동
    ctx.lineTo(0, 30); // 가로선 긋기
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(450, 100);
    ctx.lineTo(0, 100);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(450, 170);
    ctx.lineTo(0, 170);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(50, 240);
    ctx.lineTo(50, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(450, 240);
    ctx.lineTo(0, 240);
    ctx.stroke();

    // 점수 틀
    for (let i = 0; i < 11; i++) {
      ctx.beginPath();
      ctx.moveTo(50 + i * 40, 30);
      ctx.lineTo(50 + i * 40, 40);
      ctx.stroke();
      var scoregap = i * 10;
      ctx.strokeText(scoregap, 47 + i * 40, 45);
    }
  }, [score]);

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
      <div className="canvas-graph">
        <canvas ref={canvasRef} width="500" height="300" id="canvas"></canvas>
      </div>
    </>
  );
}
