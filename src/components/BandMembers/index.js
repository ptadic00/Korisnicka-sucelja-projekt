import React from 'react'

import styles from './style.module.css';

import i1 from '../../images/member1.jpg'
import i2 from '../../images/member2.jpg'
import i3 from '../../images/member3.jpg'

const BandMembers = () => (
    <nav>
        <h2 className={styles.title}>Članovi benda</h2>
        <div className={styles.members}>
            <article className={styles.member1}>
                <img src={i1} alt="member1" className={styles.member_img} width="300px" height="400px"></img>
                <h4 className={styles.memberName}>
                    Marijana Cikatić
                    <br></br>
                    (vokalistica)
                </h4>
                <p className={styles.descr}>
                    Nešto o tom članu benda. Kratka biografija.
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
                    Nešto o tom članu benda. Kratka biografija.
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
                    Nešto o tom članu benda. Kratka biografija.
                </p>
        </article>
        </div>
    </nav>
)

export default BandMembers