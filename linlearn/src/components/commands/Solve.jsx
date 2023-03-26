import React, { useState } from "react";

function Solve({ level }) {
  const [password, setPassword] = useState("");

  let ans = [["shark", "sharks"]];
  const handleSolve = (password) => {
    let pass = password;
    if (pass === ans[level][0] || pass === ans[level][1]) {
      return (
        <div>
          <h1>Congratulations!</h1>
          <h2>You solved the puzzle!</h2>
        </div>
      );
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSolve(password);
  };

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter the password to solve the puzzle:
        <input type="text" value={password} onChange={handleChange} />
      </label>
    </form>
  );
}

export default Solve;
