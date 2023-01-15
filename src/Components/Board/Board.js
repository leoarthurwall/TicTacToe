import React from "react";
import styles from "./Board.module.css";
import { useState } from "react";

const Board = () => {
  const [boxes, setBoxes] = useState([
    { id: 0, value: 0 },
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
    { id: 5, value: 0 },
    { id: 6, value: 0 },
    { id: 7, value: 0 },
    { id: 8, value: 0 },
  ]);
  return (
    <div className={styles.container}>
      {boxes.map((box, index) => (
        <div className={styles.box} key={index} value={box.value}>
         
        </div>
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
