import React from 'react'
import styles from "./Score.module.css"

const ScoreCard = ({}) => {
  return (
    <div className={styles.button}>
        <p className={styles.playerTag}></p>
        <p className={styles.scoreTag}></p>
    </div>
  )
}

export default ScoreCard