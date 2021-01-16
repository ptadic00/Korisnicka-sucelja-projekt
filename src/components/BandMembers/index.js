import React from 'react'

import styles from './style.module.css';

import i1 from '../../images/member1.jpg'
import i2 from '../../images/member2.jpg'
import i3 from '../../images/member3.jpg'

import { Bounce } from "react-awesome-reveal";
import { Slide  } from "react-awesome-reveal";

const BandMembers = () => (
    <nav>
        <Bounce triggerOnce={true}>
            <h2 className={styles.title}>Članovi benda</h2>
        </Bounce>
        <Slide triggerOnce={true} delay={700}>
            <div className={styles.members}>
                <article className={styles.member1}>
                    <img src={i1} alt="member1" className={styles.member_img} width="300px" height="400px"></img>
                    <h4 className={styles.memberName}>
                        Marijana Cikatić
                        <br></br>
                        (vokalistica)
                    </h4>
                    <p className={styles.descr}>
                        Marijana je vokalistica koja je svoj pjevački alat brusila u srednjoj glazbenoj školi. Vesela i uvijek nasmijana Marijana uveselit će vas obradama kako dalmatinskih hitova tako i stranih evergreena. 
                    </p>
            </article>
            <article className={styles.member1}>
                    <img src={i2} alt="member2" className={styles.member_img} width="300px" height="400px"></img>
                    <h4 className={styles.memberName}>
                        Filip Matić
                        <br></br>
                        (vokal i klavijature)
                    </h4>
                    <p className={styles.descr}>
                        Drži titulu najneozbiljnijeg člana benda. Ima toliko široki raspon znanja, od slikavanja i snimanja do glazbe, da ste ga sigurno već negdje susreli po splitskim pirevima. Ako niste - jednom kad budete, nećete ga moći promašiti.
                    </p>
            </article>
            <article className={styles.member1}>
                    <img src={i3} alt="member3" className={styles.member_img} width="300px" height="400px"></img>
                    <h4 className={styles.memberName}>
                        Zoran Vučičić
                        <br></br>
                        (vokal i gitara)
                    </h4>
                    <p className={styles.descr}>
                        Zoki je, uz Filipa, osnivač 100's benda. Od ranog djetinjstva svirao je u svojoj garaži s prijateljima, te je do sada sudjelovao u brojnim gažama s više bendova. Iskustvo je njegova najveća vrlina, a druga kaže da je ljubav prema countryju.
                    </p>
            </article>
            </div>
        </Slide>
    </nav>
)

export default BandMembers