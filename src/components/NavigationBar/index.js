import React from 'react'
 
  import styles from './style.module.css'
 
  const navTabs = ['Početna', 'Repertoar', 'Poslušajte nas', 'Galerija', 'Blog', 'Kontakt']
 
  const NavigationBar = () => (
    <nav className={styles.navigationBar}>
      {navTabs.map(tab => <li className={tab==='Početna' ? styles.active : ''}>
        {tab}</li>
      )}
    </nav>
  )
 
  export default NavigationBar