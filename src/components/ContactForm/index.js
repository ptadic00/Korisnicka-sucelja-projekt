import React from 'react'
 
import styles from './style.module.css';
import SocialNetworks from '../SocialNetworks'
import { Fade } from "react-awesome-reveal";

const ContactForm = () => (
    <main className={styles.contactForm}>
        <Fade triggerOnce={true} delay={300}>
            <section className={styles.contactInfo}>
    
                <h2>KONTAKT</h2>
                <p></p>
                <h3>broj mobitela (Filip Matić)</h3>
                <p></p>
                <p>+385 091 5214 758</p>
                <br></br>
                <h3>email</h3>
                <p></p>
                <p>bendzasvadbe@email.com</p>
    
                <p>IBAN: HR08497593759385739574</p>

                <section className={styles.socialNetw} >
                    <SocialNetworks/>
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
                        <label className={styles.message_label} htmlFor="message">Poruka</label>
                        <input name="message" type="text" />
                    </div>
                    <button>Pošalji poruku</button>
                </form>
            </section>
        </Fade>
    </main>
)
 
export default ContactForm