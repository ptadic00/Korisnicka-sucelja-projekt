import React from "react"

import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import AboutUs from '../components/AboutUs'
import BandMembers from '../components/BandMembers'

const IndexPage = () => (
  <main>
    <NavigationHeader activeTab = "Početna" />
    <Carousel/>
    <AboutUs/>
    <BandMembers/>
    <Footer/>
  </main>
)

export default IndexPage