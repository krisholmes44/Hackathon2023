import "../../styles/Start.css";
import React, { useState, useEffect, useRef } from "react";
import Main from "../Home";
import Typewriter from "typewriter-effect";
import TOPOLOGY from "vanta/dist/vanta.topology.min";
import "../../styles/Start.css";
import React, { useState, useEffect, useRef } from "react";
import Main from "../Home";
import Typewriter from "typewriter-effect";
import TOPOLOGY from "vanta/dist/vanta.topology.min";
import Timer from "../Home/Timer";
import axios from "axios";

const StartPage = () => {
  const [name, setName] = useState("");
  const [showMain, setShowMain] = useState(false);
  const [showButton, setButton] = useState(false);
  const [vantaEffect, setVantaEffect] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleStartClick = () => {
    setShowMain(true);
    const now = new Date().toISOString();
    axios
      .post("backend/", { username: name, created: now })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleHeader = () => setButton((prev) => !prev);

  useEffect(() => {
    setTimeout(toggleHeader, 3000);
  }, []);

  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        TOPOLOGY({
          el: myRef.current,
          color: 0x3bcb20,
          backgroundColor: 0xd0d0d,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  if (showMain) {
    return <Main name={name} />;
  }

  return (
    <div ref={myRef} className="landing" id="animation">
      <div className="center">
        <div className="typing">
          <Typewriter
            speed={5}
            onInit={(typewriter) => {
              typewriter

                .typeString("Are you ready to enter the unknown?")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Good Luck....")
                .pauseFor(1000)
                .start();
            }}
          />
        </div>
        <div className="input">
          <label htmlFor="name-input">Display Name: </label>
          <input
            id="name-input"
            type="text"
            value={name}
            autoComplete="off"
            onChange={handleNameChange}
          />
          <br />
          <button onClick={handleStartClick} className="btn" type="button">
            {" "}
            →{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
