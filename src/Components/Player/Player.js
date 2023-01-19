import React from "react";
import styles from "./Player.module.css";

const Player = ({ isX }) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.name}> Next Turn: {isX ? "X" : "0"} </h4>
    </div>
  );
};

export default Player;
