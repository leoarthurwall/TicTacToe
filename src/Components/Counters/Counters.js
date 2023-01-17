import React from 'react'
import styles from "./Counters.module.css"

const Counters = ({box}) => {
  return (
    <div className={styles.box}>
        <div className={styles.counter}>X</div>
    </div>
  )
}

export default Counters