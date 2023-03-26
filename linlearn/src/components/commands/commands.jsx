import React from "react";
import "../../styles/Help.css";

function Help() {
  return (
    <div className="ViewCommands">
      <p>
        <span class="cmds">ls</span> - View the files in the current directory
        <br />
        <span class="cmds">level</span> - Display the current level
        <br />
        <span class="cmds">solve</span> - Enter the password to advance to the
        next level
        <br />
        <span class="cmds">help</span> - Show the list of available commands
        <br />
        <span class="cmds">hint</span> - Need a hint? Don't worry, we're here to
        help!
        <br />
        <span class="cmds">solve</span> - Enter the password to advance to the
        next level
      </p>
    </div>
  );
}

export default Help;
