import React from "react"

import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'

const IndexPage = () => (
  <main>
    <NavigationHeader activeTab = "Početna" />
    <Carousel/>
    <Footer/>
  </main>
)

export default IndexPage