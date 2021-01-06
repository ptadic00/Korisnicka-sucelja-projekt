import React from 'react'
 
import styles from './style.module.css'
import contactImg from '../../images/contactImg.jpg'

const ContactTitle = () => (
    <nav>
        <img src={contactImg} alt="contact_img" className={styles.contactImg}></img>
        <h2 className={styles.contactTitle}>Kontakt</h2>
        <h3 className={styles.contactSubtitle}>Sve informacije o nama možete dobiti putem maila, broja telefona i naših društvenih mreža.</h3>
    </nav>
)
 
export default ContactTitle