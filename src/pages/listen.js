import React from "react"
import Footer from '../components/Footer'
import NavigationHeader from '../components/NavigationHeader'
import PoslusajteNas from "../components/listenUs"

const PoslusajteNasIndex = () => (
  <main>
    <NavigationHeader activeTab = "Poslušajte nas" />
    <PoslusajteNas/>
    <Footer/>
  </main>
)

export default PoslusajteNasIndex