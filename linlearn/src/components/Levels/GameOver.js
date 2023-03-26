import React, { useEffect } from "react";
import "../../styles/GameOver.css";

function GameOver() {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        window.location.reload();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="game-over-container">
      <h1 className="game-over-text">Game Over</h1>
      <p className="restart-text">
        Press Enter to restart the game.
      </p>
      <div className="matrix-background"></div>
    </div>
  );
}

export default GameOver;