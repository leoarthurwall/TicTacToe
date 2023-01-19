import React from "react";
import styles from "./Player.module.css";

const Player = ({ isX }) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.name}> Next Turn: <span className={styles.span}>{isX ? "X" : "0"}</span> </h4>
    </div>
  );
};

export default Player;
