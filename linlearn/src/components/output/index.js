import React, { useEffect, useState } from "react";
import "../../styles/Output.css";

function Output(props) {
  return (
    <div className="output">
      {props.outputArray.map((item, index) => (
        <div key={index} className="output">
          <span id="nameLin">{props.name}</span>
          <span id="atLin">@</span>
          <span id="gameLin">linhunt&gt;</span>&nbsp;
          {item}
        </div>
      ))}
    </div>
  );
}

export default Output;
