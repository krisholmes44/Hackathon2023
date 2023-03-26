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
 /* return(
    <div className="landing" id="animation">
      <div className ="center">
        <div className="typing">
          <Typewriter
            speed= {5}
            onInit={(typewriter) => {
              typewriter

              .typestring("Game Over")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Press Enter to Restart the Game")
              .pauseFor(1000)
              .start();
            }}
            />
        </div>
      </div>
    </div>
  ); */

}

export default GameOver;