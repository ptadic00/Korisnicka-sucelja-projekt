import React from "react"
import Footer from '../components/Footer'
import NavigationHeader from '../components/NavigationHeader'
import Photos from '../components/Gallery'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-image-lightbox/style.css'

const GalleryPage = () => (
  <main>
    <NavigationHeader activeTab = "Galerija" />
    <style>{'body { background-color: black; }'}</style>
    <Photos/>
    <Footer/>
  </main>
)

export default GalleryPage