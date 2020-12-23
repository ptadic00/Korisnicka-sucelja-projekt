import React from "react"
import ReactPlayer from "react-player"
import Logo from "../Logo"
import styles from "./style.module.css"

const PoslusajteNas = () => (
  <div className={styles.pozadina}>
    <div className={styles.title}>
      <Logo />
    </div>
    <div className={styles.content}>
      <ReactPlayer url="https://www.youtube.com/watch?v=NPbbLM7TFCk" />
      <br></br>
      <br></br>
      <ReactPlayer
        className={styles.player}
        url="https://www.youtube.com/watch?v=LJ4OtG_NrW4"
      />
      <br></br>
      <br></br>
      <ReactPlayer url="https://www.youtube.com/watch?v=fKxHgF3oNhU" />
    </div>
  </div>
)

export default PoslusajteNas
