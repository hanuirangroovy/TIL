import React from "react";

// css
import "../css/component/template.css";
import Chart from "./chart";

export default function Template({ score }) {
  return (
    <>
      <div className="TemplateContainer">
        <h2>그래프</h2>
        <Chart score={score} />
      </div>
    </>
  );
}
