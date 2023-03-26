import React, { useState, useEffect } from "react";
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
import axios from "axios";

function Main(props) {
  const [outputArray, setOutputArray] = useState([]);
  const [level, setLevel] = useState(1);
  const [finalTime, setFinalTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

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
    setFinalTime(time);
    if (time === 0 && !gameOver) {
      console.log("Game over!");
      const now = new Date().toISOString();
      axios
        .post("backend/", { username: props.name, created: now, endTime: time })
        .then((response) => {
          console.log(response.data);
          setGameOver(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="Home">
      <Output outputArray={outputArray} onClear={handleClear} name={props.name} />
      <Timer onFinish={handleTimerFinish} />
      {gameOver && <GameOver />}
      {finalTime && <p>Final Time: {finalTime} seconds</p>}
      <CL name={props.name} onInput={handleInput} />
    </div>
  );
}

export default Main;