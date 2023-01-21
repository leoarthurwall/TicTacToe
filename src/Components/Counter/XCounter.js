import React from "react";
import styles from "./Counter.module.css";

const XCounter = () => {
  return (
    <div className={styles.CrossContainer}>
      <div className={styles.CrossTopL} />
      <div className={styles.CrossTopR} />
    </div>
  );
};

export default XCounter;
