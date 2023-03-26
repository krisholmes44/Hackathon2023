import React, { useState } from "react";
import CL from "../commandLine/CL";
import Output from "../output";
import "../../styles/Home.css";
import Help from "../commands/commands";
import LevelOne from "../Levels/LevelOne";
import LevelTwo from "../Levels/LevelTwo";
import Hint from "../commands/Hint";
import Solve from "../commands/Solve";
import Timer from "./Timer";
import GameOver from "../Levels/GameOver";

function Main(props) {
  const [outputArray, setOutputArray] = useState([]);
  const [level, setLevel] = useState(1);
  const [finalTime, setFinalTime] = useState(null); // Add finalTime state

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
  
  const handleTimerFinish = (time) => {
    console.log("Final Time:", time); // Print final time to the console
    setFinalTime(time); // Update finalTime when the timer finishes
    if (time === 0) {
      console.log("Game over!"); // Print game over message to the console
    }
  };

  return (
    <div className="Home">
      <Output
        outputArray={outputArray}
        onClear={handleClear}
        name={props.name}
      />
      <Timer onFinish={handleTimerFinish} />
      {finalTime === 0 ? (
        <GameOver />
      ) : (
        finalTime && <p>Final Time: {finalTime} seconds</p>
      )}
      <CL name={props.name} onInput={handleInput} />
    </div>
  );
}

export default Main;

