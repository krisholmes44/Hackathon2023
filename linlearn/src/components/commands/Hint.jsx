import React from "react";

function Hint({ level }) {
  let LevelTwo = [
    `I am hidden underground, deep in the earth's embrace.
    I am ancient, yet new each day, shaped by the flow of time and space.
    I am a mystery, a labyrinth of stone, with secrets waiting to be revealed.
    I am both dark and bright, warm and cold, with many wonders concealed.?`,

    `I am a place of darkness, where light fears to tread,
    Yet within my depths, beauty can be found instead.
    I am a natural wonder, shaped by water's flow,
    My walls reveal the secrets of the earth below.?`,

    `I am a home without a door,
    A place of refuge, but not for the poor.
    My walls are adorned with gems and stone,
    Yet my beauty is hidden, a treasure unknown.
    
    `,
  ];

  let LevelOne = [
    "What has a heart that doesn't beat, and grows without being watered?",
    "What wears rings without having fingers, and leaves without going anywhere?",
    "What gets a year older whenever it rings",
  ];

  let LevelThree = [
    `I am the beginning of everything and the end of everywhere.
     I'm the beginning of eternity, the end of time and space. 
     What am I, and what do I have to do with the ocean?`,

    `I am the beginning of the end, and the end of time and space.
    I am essential to creation, and I surround every place.
    I am the source of life and death, the ocean's ebb and flow.
    Yet every creature beneath my waves, eventually must go. What am I?`,
  ];
  let LevelFour = "What is at the end of a rainbow?";

  if (level === 1) {
    return <div>{LevelOne[Math.floor(Math.random() * LevelOne.length)]}</div>;
  } else if (level === 2) {
    return <div>{LevelTwo[Math.floor(Math.random() * LevelTwo.length)]}</div>;
  } else if (level === 3) {
    return (
      <div>{LevelThree[Math.floor(Math.random() * LevelThree.length)]}</div>
    );
  } else {
    return <div>{LevelFour}</div>;
  }
}

export default Hint;
