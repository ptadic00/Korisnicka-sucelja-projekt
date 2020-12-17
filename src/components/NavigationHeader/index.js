import React from 'react'
import Logo from '../Logo'

import styles from './style.module.css'
import NavigationBar from '../NavigationBar'
 
const NavigationHeader = () => (
  <section className={styles.navigationHeader}>
    <Logo />
    <NavigationBar/>
  </section>
)
 
export default NavigationHeader