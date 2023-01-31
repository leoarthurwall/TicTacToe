import React from "react";
import styles from "./Reset.module.css";
import { BsArrowClockwise } from "react-icons/bs";

const Reset = () => {
  return (
    <div className={styles.gridWrapper}>
      <div className={styles.container}>
        <BsArrowClockwise size={30} color="black" />
      </div>
    </div>
  );
};

export default Reset;
