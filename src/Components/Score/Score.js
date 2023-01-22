import React from "react";
import styles from "./Score.module.css";

const Score = () => {
  return (
    <section className={styles.container}>
      <div className={styles.button} style={{backgroundColor: "#61c1ba"}}>X (YOU)</div>
      <div className={styles.button} style={{backgroundColor: "#8E9DA5"}}>TIES</div>
      <div className={styles.button} style={{backgroundColor: "#C9A963"}}>O (CPU)</div>
    </section>
  );
};

export default Score;
