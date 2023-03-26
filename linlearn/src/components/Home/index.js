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
  const handleUserText = (text) => {
    if (text == "help") {
      return <Help />;
    } else if (text == "ls") {
      if (level == 1) {
        return <LevelOne />;
      } else if (level == 2) {
        return <LevelTwo />;
      }
    } else if (text == "hint") {
      return <Hint level={level} />;
    } else if (text == "solve") {
      return <Solve level={level} />;
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
    }
  };

  const handleClear = () => {
    setOutputArray([]);
  };

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
}

export default Main;
