import { Link } from 'gatsby'
import React, {useState} from 'react'
 
import { navs } from '../../constants/const'
import styles from './style.module.css'
 
const MobileNavBar= ({ activeTab, useThisStyle }) => {
    const[visible, setVisible]=useState(false)
 
    return(
        <section className={styles.container}>
            <button className={`${styles.burgerButton} ${visible ? styles.actives : ''}`} 
                onClick={() => setVisible(!visible)}
            >
                <div />
                <div />
                <div />
            </button>
            <nav className={`${styles.menu} ${visible ? styles.visible : styles.hidden}`}>
                    {navs.map(({tab, to}) => (
                <Link to={to} >
                    <li className={tab === activeTab ? styles.active : ''}>{tab}</li>
                </Link>)
        )}
                </nav>
        </section>
    )    
}
 
export default MobileNavBar