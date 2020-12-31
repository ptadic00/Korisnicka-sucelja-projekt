import React from "react"

import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import AboutUs from '../components/AboutUs'
import BandMembers from '../components/BandMembers'
import SocialNetworks from '../components/SocialNetworks'

const IndexPage = () => (
  <main>
    <NavigationHeader activeTab = "Početna" />
    <Carousel/>
    <SocialNetworks/>
    <AboutUs/>
    <BandMembers/>
    <Footer activeTab = "Početna"/>
  </main>
)

export default IndexPage