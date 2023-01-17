import React from "react";
import styles from "./Board.module.css";
import { useState } from "react";
import Counters from "../Counters/Counters";

const Board = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(""));
  const [isX, setIsX] = useState(true)

  const handleCounterClick = (box) => {
  }



  console.log({boxes})
  return (
    <div className={styles.container}>
      {boxes.map((box, index) => (
        <Counters box={box} key={index} />
      ))}
    </div>
  );
};

export default Board;

/*
PLAN
create an array of 9 objects
- id: 0-8
- value: 0, 1 or 2

map through the array and display 0 (an empty box)


*/

  // const handleCounterClick = (e) => {
  //   const updatedValue = [...boxes].map((box) => {
  //     if (box.id === e.target.id) {
  //       if (count % 2 === 0) {
  //         box.value = "0";
  //       } else {
  //         box.value = "X";
  //       }
  //     }
  //     setCount(count + 1);
  //     return box;
  //   });
  //   setBoxes(updatedValue);
  // };

  //  const [count, setCount] = useState(0);
