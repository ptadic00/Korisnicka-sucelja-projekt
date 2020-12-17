import React from 'react'

import styles from './style.module.css'

const NavigationBar = () => (
  <nav className={styles.navigationBar}>
      <li className={styles.active}>Početna</li>
      <li>Repertoar</li>
      <li>Poslušajte nas</li>
      <li>Galerija</li>
      <li>Blog</li>
      <li>Kontakt</li>
  </nav>
)

export default NavigationBar