import React from "react";

function Hint({ level }) {
  let LevelOne = [
    `I am a large fish that can be quite dark,
        My name rhymes with "park" and I have a fearsome mark.
        What am I?`,

    `I am a predator that lurks in the deep blue,
        My dorsal fin slicing through the waves as I pursue.
        What am I?`,
    `I have multiple rows of sharp teeth in my mouth,
     I'm often feared by swimmers in the south.
     What am I?`,
  ];

  if (level === 1) {
    return <div>{LevelOne[Math.floor(Math.random() * LevelOne.length)]}</div>;
  } else {
    return <div>Poop</div>;
  }
}

export default Hint;
