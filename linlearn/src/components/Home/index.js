import React, { useState } from "react";
import CL from "../commandLine/CL";
import Output from "../output";
import "../../styles/Home.css";
import Help from "../commands/commands";
import LevelOne from "../Levels/LevelOne";
import LevelTwo from "../Levels/LevelTwo";
import Hint from "../commands/Hint";
import Solve from "../commands/Solve";

function Main(props) {
  const [outputArray, setOutputArray] = useState([]);
  const [level, setLevel] = useState(1);
  const [input, setInput] = useState("");

  const handleUserText = (text) => {
    text = text.trim().toLowerCase();
    console.log(text);
    if (text.length > 6 && text.slice(0, 5) === "solve") {
      return <Solve level={level} setLevel={setLevel} txt={text} />;
    } else if (text == "help") {
      return <Help />;
    } else if (text == "hint") {
      return <Hint level={level} />;
    } else if (text == "level") {
      return <p>You are currently at level {level}</p>;
    } else {
      return "Unknown command. Type 'help' for a list of available commands.";
    }
  };
  const handleInput = (input) => {
    input = input.trim().toLowerCase();
    if (input === "clear") {
      setOutputArray([]);
    } else {
      setOutputArray((prevArray) => [...prevArray, handleUserText(input)]);
      setInput(input);
    }
  };

  const handleClear = () => {
    setOutputArray([]);
  };

  if (level < 5) {
    return (
      <div className="Home">
        <Output
          outputArray={outputArray}
          onClear={handleClear}
          name={props.name}
        />
        <CL name={props.name} onInput={handleInput} />
      </div>
    );
  } else {
    return (
      <div className="jj">
        <h1>you win</h1>
      </div>
    );
  }
}

export default Main;
