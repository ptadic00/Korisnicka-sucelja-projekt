import React from 'react'

import styles from './style.module.css'

import { Bounce } from "react-awesome-reveal";

const GalleryTitle = () => (
    <nav >
        <Bounce triggerOnce={true}>
            <h1 className={styles.galleryTitle}>Galerija</h1>
            <h2 className={styles.subtitle}>Ovdje možete pronaći naše slike s vjenčanja, domjenaka i evenata.</h2>
        </Bounce>
    </nav>
)
 
export default GalleryTitle