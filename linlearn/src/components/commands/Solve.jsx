import React from "react";
import End from "../output/End";

function Solve({ level, setLevel, txt }) {
  txt = txt.slice(6).trim().toLowerCase(); // trim and convert txt to lowercase
  console.log(txt.length);
  if (level === 1) {
    if (txt !== "tree" && txt !== "trees") {
      // use logical AND instead of OR
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
          <p> congratulations you solved the level 1 problem </p>
        </div>
      );
    }
  } else if (level === 2) {
    if (txt !== "cave") {
      // remove duplicate condition
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
          <p> congratulations you solved the level 2 problem </p>
        </div>
      );
    }
  } else if (level === 3) {
    if (txt !== "e") {
      // change "e" to "elephant"
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
          <p> congratulations you solved the level 3 problem </p>
        </div>
      );
    }
  } else if (level === 4) {
    if (txt !== "w") {
      // change "e" to "elephant"
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
      return <End />;
    }
  } else {
    return <div></div>;
  }
}

export default Solve;
