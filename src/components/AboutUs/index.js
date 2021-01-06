import React from "react"

import styles from './style.module.css'
import { Fade } from "react-awesome-reveal";
import { Bounce } from "react-awesome-reveal";
import { Flip } from "react-awesome-reveal";
import { Hinge } from "react-awesome-reveal";
import { JackInTheBox } from "react-awesome-reveal";
import { Roll } from "react-awesome-reveal";
import { Rotate } from "react-awesome-reveal";
import { Slide  } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";

const AboutUs = () => (
    <nav>
        <Bounce triggerOnce={true}>
        <h2 className={styles.aboutUsTitle}>O nama</h2>
        </Bounce>
        <Slide triggerOnce={true} delay={700}>
        <p className={styles.aboutUsText}>
            Music Band 100's je profesionalni bend za svadbe koji već dugi niz godina djeluje na Hrvatskoj glazbenoj sceni. 
            Više od 15 godina iskustva u profesionalnim glazbenim vodama pokazatelj su ozbiljnosti i sigurnosti. 
            Naše glazbeno iskustvo stečeno je u mnogim glazbenim školama. 
            Kasnije smo iskustvo stekli na raznim eventima i nastupima diljem Hrvatske i inozemstva zasigurno će oduševiti i 
            najzahtjevniji dio publike.    
        </p>
        <p className={styles.aboutUsText}>
            Music Band 100's svake godine odsvira velik broj koncerata. Našim velikim iskustvom rado ćemo Vam pomoći s raznim 
            glazbenim savjetima i prijedlozima tako da Vaša svečanost bude za pamćenje. Za izvođenje programa koristimo vrhunski 
            razglas te light show za osvjetljavanje stage-a i plesnog podija vrhunskim svjetlosnim efektima.
        </p>
        <p className={styles.aboutUsText}>
            Odlična svirka, glazbena kreativnost i energija, profesionalnost te veliko iskustvo jamstvo su da Vaša svadbena 
            svečanost bude jedinstvena!
        </p>
        </Slide>
    </nav>
)
 
export default AboutUs