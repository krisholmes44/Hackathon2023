import React from "react";
import Help from "../commands/commands";

function Art() {
  return (
    <div className="firstRender">
      <img src={require("./PlsWork.png")} alt="PlsWork" />
      <p>The rules are simple..win</p>
      <br />
      <p>You only need 4 commands</p>
      <Help />
      <br />
    </div>
  );
}

export default Art;
