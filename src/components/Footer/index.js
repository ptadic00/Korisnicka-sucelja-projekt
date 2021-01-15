import React from 'react'
import styles from './style.module.css'
import {Link} from "gatsby";
import { navs as navTabs } from '../../constants/const'

const Footer = ({activeTab}) => (
  <footer className={styles.footer}>
      <ul className={styles.address}>
        <li className={styles.title}>
              Music Band 100's
          </li>
          <li className={styles.phone}>
              +385 091 5214 758
          </li>
          <li className={styles.email}>bendzasvadbe@email.com</li>
      </ul>
      <ul className={styles.navigation}>
      {navTabs.map(({tab, to}) => (
          <Link to={to} >
              <li className={tab === activeTab ? styles.active : ''}>{tab}</li>
          </Link>)
        )}
      </ul>
  </footer>
)

export default Footer