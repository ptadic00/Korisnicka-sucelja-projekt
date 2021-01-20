import React from "react"

import styles from './style.module.css'

import faceLogo from '../../images/faceLogo.png'
import instagramLogo from '../../images/instagramLogo.png'

const SocialNetworks = () => (
    <section className={styles.socialNetw} >
        <a href="https://www.google.hr/">
            <img src={instagramLogo} alt="instagramLogo" className={styles.instagramLogo}></img>
        </a>
        <a href="https://www.google.hr/">
            <img src={faceLogo} alt="faceLogo" className={styles.faceLogo}></img>
        </a>
    </section>
)
 
export default SocialNetworks