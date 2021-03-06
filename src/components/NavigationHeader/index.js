import React from 'react'
import Logo from '../Logo'
import { useMediaQuery } from 'react-responsive'
 
import styles from './style.module.css'
import NavigationBar from '../NavigationBar'
import MobileNavBar from '../MobileNavBar'
 
const NavigationHeader = ({ activeTab }) => {
  const isMobile = useMediaQuery({query: '(max-device-width: 800px)'})
  console.log(isMobile)
  return (
    <section className={styles.navigationHeader}>
        <Logo />
        {isMobile
          ? <MobileNavBar activeTab={activeTab}/>
          : <NavigationBar activeTab={activeTab} />
        }
    </section>
  )
}
 
export default NavigationHeader