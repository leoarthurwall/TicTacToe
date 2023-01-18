import React from "react";
import styles from "./Counters.module.css";

const Counters = ({ box, boxes, setBoxes, isX, setIsX }) => {
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
  const handleCounterClick = (e) => {
    const updatedValue = [...boxes].map((box) => {
      if (box.id === e.target.id) {
        if (isX === true) {
          box.value = "0";
        } else {
          box.value = "X";
        }
      }
      setIsX(!isX);
      return box;
    });
    console.log({ updatedValue });
    console.log({isX})
    setBoxes(updatedValue);
};

  //  const [count, setCount] = useState(0);

  return (
    <div className={styles.box} id={box.id} onClick={handleCounterClick}>
      <div className={styles.counter} id={box.id}>
        {box.value}
      </div>
    </div>
  );
};

export default Counters;
