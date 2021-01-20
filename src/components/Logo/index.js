import React from 'react'
import styles from './style.module.css'

const Logo = () => (
  <a href="/">
    <section className={styles.logo}>
      <span className={styles.logoText}>Music Band 100's</span>
      <span className={styles.sub}>BEND ZA SVADBE</span>
    </section>
  </a>
)

export default Logo