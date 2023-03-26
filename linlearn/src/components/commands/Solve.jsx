import React from "react";
import End from "../output/End";
import { useNavigate } from "react-router-dom";

function Solve({ level, setLevel, txt }) {
  txt = txt.slice(6).trim().toLowerCase(); // Behold! A magical transformation!

  if (level === 1) {
    if (txt !== "tree" && txt !== "trees") {
      // Alas! Your answer did not unlock the forest's secrets!
      return (
        <div>
          <p>
            {" "}
            Sorry, Your answer <span style={{ color: "green" }}>{txt}</span> was
            incorrect!{" "}
          </p>
        </div>
      );
    } else {
      setLevel(2);
      return (
        <div>
          <p> Huzzah! You have solved the first riddle! </p>
        </div>
      );
    }
  } else if (level === 2) {
    if (txt !== "cave") {
      // Oh no! The darkness has claimed another victim!
      return (
        <div>
          <p>
            {" "}
            Sorry, Your answer <span style={{ color: "green" }}>{txt}</span> was
            incorrect!{" "}
          </p>
        </div>
      );
    } else {
      setLevel(3);
      return (
        <div>
          <p> Congratulations! The second riddle is no match for you! </p>
        </div>
      );
    }
  } else if (level === 3) {
    if (txt !== "e") {
      // This enigma requires a true savant to unravel!
      return (
        <div>
          <p>
            {" "}
            Sorry, Your answer <span style={{ color: "green" }}>{txt}</span> was
            incorrect!{" "}
          </p>
        </div>
      );
    } else {
      setLevel(4);
      return (
        <div>
          <p> Bravo! The third riddle has been solved! </p>
        </div>
      );
    }
  } else if (level === 4) {
    if (txt !== "w") {
      // Oh dear! The fourth riddle has claimed yet another victim!
      return (
        <div>
          <p>
            {" "}
            Sorry, Your answer <span style={{ color: "green" }}>{txt}</span> was
            incorrect!{" "}
          </p>
        </div>
      );
    } else {
      setLevel(5);
      return (
        <div>
          <p> congratulations you solved the level 4 problem </p>
        </div>
      );
    }
  } else {
    return <div></div>;
  }
}

export default Solve;
