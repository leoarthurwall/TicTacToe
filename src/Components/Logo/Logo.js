import React from "react";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.CrossContainer}>
        <div className={styles.CrossTopL} />
        <div className={styles.CrossTopR} />
      </div>
      <div className={styles.Circle}></div>
    </div>
  );
};

export default Logo;
