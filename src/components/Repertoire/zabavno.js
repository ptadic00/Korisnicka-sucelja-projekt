import React from 'react'
import NamesContainer from '../SongsContainer/index.jsx'
import styles from './style.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Zabavno extends React.Component{
state={
    names:[
        '1. Ako te pitaju (Graso)',
        '2. Dani i godine (Nina)',
        '3. Samo s tobom sam upoznao ljubav (Oliver &amp; Skugor)',
        '4. Dodiri od stakla (N. Badric)',
        '5. Kad zena zavoli (T. Cetinski)',
        '6. Malo je dana (Halid)',
        '7. Stranac u noci (Masimo &amp; Nina)',
        '8. Ne ide vino bez harmonike',
        '9. Marija (Vigor)',
        '10. Zivot je raj (Vigor)',
        '11. Sta mi ljube oćeš kazat (Amulic)',
        '12. Vidi se iz aviona (Domenica)',
        '13. Ljubavna limunada (Domenica)',
        '14. Zadnja zelja',
        '15. Kad pijem vino (Mjesni odbor)',
        '16. Živim za to (Jacques Houdek)',
        '17. Kad nekoga voliš (Jacques Houdek)',
        '18. Udajem se (J. Rozga)',
        '19. Moderna žena (J. Rozga)',
        '20. Pismo glava (J. Rozga)',
        '21. Volim barabu (Danijela)',
        '22. Ti si mi u mislima (D. Dvornik)',
        '23. Ella e (D. Dvornik)',
        '24. 92 godine (P. Graso)',
        '25. Ledena (Tose)'
    ],
    searchTerm: ''
}

editSearchTerm=(e)=>{
    this.setState({searchTerm: e.target.value})
}

dynamicSearch=()=>{
    return this.state.names.filter(name=>name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
}

render(){
    return(
        <div >
            <div className={styles.repertoire_page}>
            <FontAwesomeIcon icon={faSearch}  className={styles.repertoire_h2}></FontAwesomeIcon>
            <input type='text' value={this.state.searchTerm} onChange={this.editSearchTerm} placeholder="Pretraži repertoar!"/>
            <br></br>
            <h1 className={styles.repertoire_h1}>Zabavno:</h1>
            <br></br>
            <div className={styles.NamesContainer}>
                <NamesContainer names={this.dynamicSearch()}/>
            </div>
            </div>
        </div>
    );
}
}

export default Zabavno;