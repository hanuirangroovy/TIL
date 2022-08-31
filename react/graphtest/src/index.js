import React, { useState } from "react";
import ReactDOM from "react-dom";

//css
import "./css/maincontainer.css";

// component
import Chart from "./component/chart";
import Template from "./component/template";
import Head from "./component/head";

function Mainpage() {
  const [score, setScore] = useState(0);
  return (
    <div className="MainContainer">
      <Head score={score} />
      <Chart score={score} setScore={setScore} />
      {/* <Template score={score} /> */}
    </div>
  );
}

ReactDOM.render(<Mainpage />, document.getElementById("root"));
