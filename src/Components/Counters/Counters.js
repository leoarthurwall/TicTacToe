import React from "react";
import styles from "./Counters.module.css";

const Counters = ({ box, boxes, setBoxes, isX, setIsX,  }) => {
  
  const handleCounterClick = (key) => {
    console.log({key})
  };


  return (
    <div className={styles.box} id={box.id} onClick={() =>{handleCounterClick(key)}}>
      <div className={styles.counter} id={box.id}>
        {box.value}
      </div>
    </div>
  );
};

export default Counters;
