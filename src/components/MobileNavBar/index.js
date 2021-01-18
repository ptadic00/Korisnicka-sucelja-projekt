import { Link } from 'gatsby'
import React, {useState} from 'react'
 
import { navs } from '../../constants/const'
import styles from './style.module.css'
 
const MobileNavBar= () => {
    const[visible, setVisible]=useState(false)
 
    return(
        <section className={styles.container}>
            <button className={`${styles.burgerButton} ${visible ? styles.active : ''}`} 
                onClick={() => setVisible(!visible)}
            >
                <div />
                <div />
                <div />
            </button>
            <nav className={`${styles.menu} ${visible ? styles.visible : styles.hidden}`}>
                {navs.map(nav => (
                    <li>
                        <Link to={nav.to}>
                        {nav.tab}
                        </Link>
                    </li>)
                )}
                </nav>
        </section>
    )    
}
 
export default MobileNavBar