import React from "react";

function PasswordChecker({ txt, showOutput }) {
  let text = txt;

  if (text === "sharks") {
    <div>Congrats</div>;
  } else {
    return <div>Try again!</div>;
  }
}

export default PasswordChecker;
