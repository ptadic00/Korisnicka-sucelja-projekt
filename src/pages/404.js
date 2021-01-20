import React from "react"
import styles from '../components/404Page/style.module.css'
import i1 from '../images/bubnjevi.jpg'
import i2 from '../images/4.png'

const NotFoundPage = () => (
  <div>
      <h2 className={styles.error_h2} >Oops! Page not found.</h2>
      <img className={styles.no4left} src={i2} alt="4left"></img>
      <img className={styles.no4right} src={i2} alt="4right"></img>
      <img className={styles.imgDrums} src={i1} alt="drumsImg"></img>
      <p className={styles.error_p}>We can't find the page you're looking for.</p>
      <a className={styles.error_a} href="../">Go back home</a>
  </div>
)

export default NotFoundPage