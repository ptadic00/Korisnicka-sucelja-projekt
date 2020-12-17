import React from 'react'
import styles from './style.module.css'

const navTabs = ['Početna', 'Repertoar', 'Poslušajte nas', 'Galerija', 'Blog', 'Kontakt']

const Footer = () => (
  <footer className={styles.footer}>
      <ul className={styles.address}>
      <li className={styles.title}>
              Music Band 100's
          </li>
          <li className={styles.phone}>
              +385 091 5214 758
          </li>
          <li>bendzasvadbe@email.com</li>
      </ul>
      <ul className={styles.navigation}>
          {navTabs.map(tab =>
            <li>{tab}</li>)
          }
      </ul>
  </footer>
)

export default Footer