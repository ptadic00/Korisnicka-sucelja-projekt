import React from "react"
import Footer from "../components/Footer"
import NavigationHeader from '../components/NavigationHeader'
import ContactTitle from '../components/ContactTitle'
import ContactForm from '../components/ContactForm'
 
const ContactPage = () => (
  <main>
    <NavigationHeader activeTab="Kontakt"/>
        <ContactTitle/>
        <ContactForm/>
        <br></br>
    <Footer activeTab = "Kontakt"/>
  </main>
)
 
export default ContactPage