import React from "react"
import ReactPlayer from "react-player"
import Logo from "../Logo"
import styles from "./style.module.css"

import { Bounce } from "react-awesome-reveal";
import { Slide  } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

const PoslusajteNas = () => (
  <div className={styles.pozadina}>
    <Bounce triggerOnce={true}>
      <div className={styles.title}>
        <Logo />
      </div>
    </Bounce>
    
    <div className={styles.content}>
    <Fade triggerOnce={true} delay={700}>
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
      </Fade>
    </div>
  </div>
)

export default PoslusajteNas
