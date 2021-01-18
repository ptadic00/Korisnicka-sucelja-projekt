import React from 'react'
import Logo from '../Logo'

import styles from './style.module.css'
import NavigationBar from '../NavigationBar'
import MobileNavBar from '../MobileNavBar'

const NavigationHeader = ({ activeTab }) => (
    <section className={styles.navigationHeader}>
        <Logo />
        <NavigationBar activeTab={activeTab} />
        <div className={styles.mobile}><MobileNavBar/></div>
    </section>
  )
 
export default NavigationHeader