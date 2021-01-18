import React from "react";
import ReactPlayer from "react-player";
import Logo from "../Logo";
import styles from "./style.module.css";
 
import { Bounce } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
 
const PoslusajteNas = () => (
  <div>
    <Bounce triggerOnce={true}>
      <h1 className={styles.listenTitle}>Music Band 100's</h1>
      <h2 className={styles.listenSubtitle}>Ovdje možete vidjeti atmosferu s naših svirki te razne spotove i obrade stranih i domaćih hitova.</h2>
    </Bounce>
 
    <div className={styles.content}>
      <Fade triggerOnce={true}>
        <div className={styles.wrapper}>
          <ReactPlayer
            className={styles.player}
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=NPbbLM7TFCk"
          />
        </div>
        <br></br>
        <br></br>
        <div className={styles.wrapper}>
          <ReactPlayer
            className={styles.player}
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=LJ4OtG_NrW4"
          />
        </div>
        <br></br>
        <br></br>
        <div className={styles.wrapper}>
          <ReactPlayer
            className={styles.player}
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=fKxHgF3oNhU"
          />
        </div>
      </Fade>
    </div>
  </div>
);

export default PoslusajteNas;