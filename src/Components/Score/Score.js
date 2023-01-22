import React from "react";
import styles from "./Score.module.css";

const Score = () => {
  return (
    <section className={styles.container}>
      <div className={styles.button} style={{backgroundColor: "#61c1ba"}}>Score</div>
      <div className={styles.button} style={{backgroundColor: "#8E9DA5"}}>Score</div>
      <div className={styles.button} style={{backgroundColor: "#C9A963"}}>Score</div>
    </section>
  );
};

export default Score;
