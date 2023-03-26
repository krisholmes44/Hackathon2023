import React, { useEffect, useState } from "react";
import "../../styles/CommandLine.css";

function CL(props) {
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onInput(inputValue);
    setInputValue("");
  }

  return (
    <div className="CommandLine">
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          <span id="nameLin">{props.name}</span>
          <span id="atLin">@</span>
          <span id="gameLin">linhunt&gt;</span>&nbsp;
          <input
            id="initText"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="inputCL"
          />
        </label>
      </form>
    </div>
  );
}

export default CL;
