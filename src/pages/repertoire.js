import React from "react"
import Footer from "../components/Footer"
import NavigationHeader from '../components/NavigationHeader'
import Repertoire from '../components/Repertoire'
import styles from '../components/Repertoire/style.module.css'
 
const RepertoirePage = () => (
  <main className={styles.repertoire_background_image}>
    <NavigationHeader activeTab="Repertoar"/>
    <Repertoire/>
    <Footer activeTab="Repertoar"/>
  </main>
)
 
export default RepertoirePage
