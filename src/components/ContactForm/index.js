import React from 'react'
 
import styles from './style.module.css';
import faceLogo from '../../images/faceLogo.png'
import instagramLogo from '../../images/instagramLogo.png'

const ContactForm = () => (
    <main className={styles.contactForm}>
        <section className={styles.contactInfo}>
 
            <h2>KONTAKT</h2>
            <p></p>
            <h3>broj mobitela (Filip Matić)</h3>
            <p></p>
            <p>+385 091 5214 758</p>
 
            <h3>email</h3>
            <p></p>
            <p>bendzasvadbe@email.com</p>
 
            <p>IBAN: HR08497593759385739574</p>

            <section className={styles.socialNetw} >
                <img src={instagramLogo} alt="instagramLogo" className={styles.instagramLogo}></img>
                <img src={faceLogo} alt="faceLogo" className={styles.faceLogo}></img>
            </section>
            
            
        </section>
        <section className={styles.form}>
            <h2 className={styles.title}>KONTAKT FORMA</h2>
            <form>
                <div>
                    <label htmlFor="name">Ime</label>
                    <input name="name" type="text" />
                </div>
                <div>
                    <label htmlFor="lastname">Prezime</label>
                    <input name="lastname" type="text" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" />
                </div>
                <div>
                    <label htmlFor="phone">Broj mobitela</label>
                    <input name="phone" type="tel" />
                </div>
                <div className={styles.message}>
                    <label htmlFor="message">Poruka</label>
                    <input name="message" type="text" />
                </div>
                <button>Pošalji poruku</button>
            </form>
        </section>
    </main>
)
 
export default ContactForm