import React from "react";
import styles from "./Score.module.css";
import ScoreCard from "./ScoreCard";

const Score = () => {
  return (
    <section className={styles.container}>
      <ScoreCard
        style={{ backgroundColor: "#61c1ba" }}
        name={"X (YOU)"}
        score={"1"}
      />
      <ScoreCard
        style={{ backgroundColor: "#8E9DA5" }}
        name={"TIES"}
        score={"2"}
      />
      <ScoreCard
        style={{ backgroundColor: "#C9A963" }}
        name={"O (CPU)"}
        score={"3"}
      />
    </section>
  );
};

export default Score;
