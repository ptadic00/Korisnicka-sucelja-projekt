import React from "react"
import Footer from '../components/Footer'
import NavigationHeader from '../components/NavigationHeader'
import PoslusajteNas from "../components/listenUs"

const PoslusajteNasIndex = () => (
  <main>
    <NavigationHeader activeTab = "Poslušajte nas" />
    <style>{'body { background-color: black; }'}</style>
    <PoslusajteNas/>
    <Footer activeTab = "Poslušajte nas"/>
  </main>
)

export default PoslusajteNasIndex