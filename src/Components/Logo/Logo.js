import React from 'react'
import styles from "./Logo.module.css"
import OCounter from '../Counter/OCounter'
import XCounter from '../Counter/XCounter'


const Logo = () => {
  return (
    <div className={styles.container}>
        <XCounter />
        <OCounter />
    </div>
  )
}

export default Logo