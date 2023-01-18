import React from "react";
import styles from "./Board.module.css";
import { useState } from "react";

const Board = () => {
  const [isX, setIsX] = useState(true);
  const [boxes, setBoxes] = useState([
    { id: 1, value: "" },
    { id: 2, value: "X" },
    { id: 3, value: "X" },
    { id: 4, value: "0" },
    { id: 5, value: "" },
    { id: 6, value: "" },
    { id: 7, value: "" },
    { id: 8, value: "" },
    { id: 9, value: "" },
  ]);

  const handleCounterClick = (index) => {
    const newBoxexArray = boxes.map((newBox, i) => {
      if (i === index) {
        console.log("hello");
      }
    });
    console.log({ index });
  };

  return (
    <div className={styles.container}>
      {boxes.map((box, index) => (
        <div
          className={styles.box}
          id={box.id}
          key={index}
          onClick={() => {
            handleCounterClick(index);
          }}
        >
          <div className={styles.counter} id={box.id}>
            {box.value}
          </div>
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
