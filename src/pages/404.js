import React from "react"
import styles from '../components/404Page/style.module.css'

const NotFoundPage = () => (
  <div className={styles.error_container}>
      <h2 className={styles.error_h2} >Oops! Page not found.</h2>
      <p className={styles.error_p}>We can't find the page you're looking for.</p>
      <a className={styles.error_a} href="../">Go back home</a>
  </div>
)

export default NotFoundPage