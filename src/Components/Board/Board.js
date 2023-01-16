import React from "react";
import styles from "./Board.module.css";
import { useState } from "react";

const Board = () => {
  const [boxes, setBoxes] = useState([
    { id: "0", value: "" },
    { id: "1", value: "" },
    { id: "2", value: "" },
    { id: "3", value: "" },
    { id: "4", value: "" },
    { id: "5", value: "" },
    { id: "6", value: "" },
    { id: "7", value: "" },
    { id: "8", value: "" },
  ]);
  const [count, setCount] = useState(0);

  const handleCounterClick = (e) => {
    const updatedValue = [...boxes].map((box) => {
      if (box.id === e.target.id) {
        if (count % 2 === 0) {
          box.value = "0";
        } else {
          box.value = "X";
        }
      }
      setCount(count + 1);
      return box;
    });
    setBoxes(updatedValue);
    console.log({ updatedValue });
    console.log(
      "value length",
      boxes.value

      // set number of boxes to 0 if
    );
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
