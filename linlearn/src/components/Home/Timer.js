import React, { useState, useEffect } from "react";

function Timer(props) {
  const [seconds, setSeconds] = useState(180);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);

    if (seconds === 0) {
      clearInterval(interval);
      props.onFinish(seconds); // Call onFinish with the final time
    }

    return () => clearInterval(interval);
  }, [seconds, props]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        backgroundColor: "transparent",
        padding: "10px",
        fontSize: "24px",
        color: "red",
      }}
    >
      {minutes}:{remainingSeconds < 10 ? "0" : ""}
      {remainingSeconds}
    </div>
  );
}

export default Timer;
