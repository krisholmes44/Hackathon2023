import React from "react";
import "../../styles/Help.css";

function Help() {
  return (
    <div className="ViewCommands">
      <p>
        <br />
        <span class="cmds">level</span> - Display the current level
        <br />
        <br />
        <span class="cmds">help</span> - Show the list of available commands
        <br />
        <br />
        <span class="cmds">hint</span> - Need a hint? Don't worry, we're here to
        help!
        <br />
        <br />
        <span class="cmds">
          solve <span style={{ color: "pink" }}> &lt;answer&gt;</span>
        </span>{" "}
        - Enter the word "solve" followed by your answer advance to the next
        level
      </p>
      <br />
      <br />
    </div>
  );
}

export default Help;
