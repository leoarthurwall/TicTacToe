import React from "react";
import styles from "./Board.module.css";
import { useState } from "react";
import Player from "../Player/Player";

const Board = () => {
  const [isX, setIsX] = useState(true);
  const [boxes, setBoxes] = useState([
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
    { id: 4, value: "" },
    { id: 5, value: "" },
    { id: 6, value: "" },
    { id: 7, value: "" },
    { id: 8, value: "" },
    { id: 9, value: "" },
  ]);

  const handleCounterClick = (index) => {
    boxes.map((newBox, i) => {
      if (i === index) {
        if (newBox.value === "") {
          if (isX === true) {
            newBox.value = "X";
          } else {
            newBox.value = "0";
          }
          setIsX(!isX);
        }
      }
      return newBox;
    });
  };

  console.log({ boxes });
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {boxes.map((box, index) => (
          <div
            className={styles.box}
            key={index}
            onClick={() => {
              handleCounterClick(index);
            }}
          >
            <div className={styles.counter}>{box.value}</div>
          </div>
        ))}
      </div>
      <Player isX={isX}/>
    </section>
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
