import React, { useState, useEffect } from "react";
import CL from "../commandLine/CL";
import Output from "../output";
import "../../styles/Home.css";
import Help from "../commands/commands";
import Hint from "../commands/Hint";
import Solve from "../commands/Solve";
import Art from "../Levels/Art";
import Timer from "./Timer";
import GameOver from "../Levels/GameOver";

function Main(props) {
  const [outputArray, setOutputArray] = useState([]);
  const [level, setLevel] = useState(1);
  const [input, setInput] = useState("");
  const [levelOneRendered, setLevelOneRendered] = useState(false);
  const [finalTime, setFinalTime] = useState(null); // Add finalTime state

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

  const handleTimerFinish = (time) => {
    console.log("Final Time:", time); // Print final time to the console
    setFinalTime(time); // Update finalTime when the timer finishes
    if (time === 0) {
      console.log("Game over!"); // Print game over message to the console
    }
  };

  useEffect(() => {
    if (level === 1 && !levelOneRendered) {
      setLevelOneRendered(true);
    }
  }, [level, levelOneRendered]);

  if (levelOneRendered) {
    return (
      <div className="Home">
        <Art />
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

  if (level < 5) {
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
  } else {
    return (
      <div className="jj">
        <h1>you win</h1>
      </div>
    );
  }
}

export default Main;
