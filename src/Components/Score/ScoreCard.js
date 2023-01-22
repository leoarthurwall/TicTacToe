import React from "react";
import styles from "./Score.module.css";

const ScoreCard = ({ name, score, style }) => {
  return (
    <div className={styles.button} style={style}>
      <p className={styles.playerTag}>{name}</p>
      <p className={styles.scoreTag}>{score}</p>
    </div>
  );
};

export default ScoreCard;
