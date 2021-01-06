import React from 'react'
 
import styles from './style.module.css'
import contactImg from '../../images/contactImg.jpg'

import { Bounce } from "react-awesome-reveal";

const ContactTitle = () => (
    <nav>
        <img src={contactImg} alt="contact_img" className={styles.contactImg}></img>
        <Bounce triggerOnce={true}>
            <h2 className={styles.contactTitle}>Kontakt</h2>
            <h3 className={styles.contactSubtitle}>Sve informacije o nama možete dobiti putem maila, broja telefona i naših društvenih mreža.</h3>
        </Bounce>
    </nav>
)
 
export default ContactTitle