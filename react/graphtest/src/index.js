import React, { useState } from "react";
import ReactDOM from "react-dom";

//css
import "./css/maincontainer.css";

// component
import List from "./component/list";
import Template from "./component/template";
import Head from "./component/head";

function Mainpage() {
  const [score, setScore] = useState(0);
  return (
    <div className="MainContainer">
      <Head score={score} />
      <List score={score} setScore={setScore} />
      <Template score={score} />
    </div>
  );
}

ReactDOM.render(<Mainpage />, document.getElementById("root"));
