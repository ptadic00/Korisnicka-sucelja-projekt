import React from "react"

import styles from './style.module.css'

import faceLogo from '../../images/faceLogo.png'
import instagramLogo from '../../images/instagramLogo.png'

const SocialNetworks = () => (
    <section className={styles.socialNetw} >
        <img src={instagramLogo} alt="instagramLogo" className={styles.instagramLogo}></img>
        <img src={faceLogo} alt="faceLogo" className={styles.faceLogo}></img>
    </section>
)
 
export default SocialNetworks