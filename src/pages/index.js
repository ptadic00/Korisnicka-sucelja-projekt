import React from "react"

import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import AboutUs from '../components/AboutUs'

const IndexPage = () => (
  <main>
    <NavigationHeader activeTab = "Početna" />
    <Carousel/>
    <AboutUs/>
    <Footer/>
  </main>
)

export default IndexPage