import React from 'react'
import Logo from '../Logo'

import styles from './style.module.css'
import NavigationBar from '../NavigationBar'
 
const NavigationHeader = ({ activeTab }) => (
    <section className={styles.navigationHeader}>
        <Logo />
        <NavigationBar activeTab={activeTab} />
    </section>
  )
 
export default NavigationHeader