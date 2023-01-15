import React from "react";
import styles from "./Board.module.css";
import { useState } from "react";

const Board = () => {
  const [boxes, setBoxes] = useState([
    { id: 0, value: "" },
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
    { id: 4, value: "" },
    { id: 5, value: "0" },
    { id: 6, value: "X" },
    { id: 7, value: "" },
    { id: 8, value: "" },
  ]);

  const handleCounterClick = (e) => {
    console.log(e.target.id);
    
  };

  return (
    <div className={styles.container}>
      {boxes.map((box, index) => (
        <div
          className={styles.box}
          id={box.id}
          key={index}
          onClick={handleCounterClick}
        >
          <h2 className={styles.counter} id={box.id}>
            {box.value}
          </h2>
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
