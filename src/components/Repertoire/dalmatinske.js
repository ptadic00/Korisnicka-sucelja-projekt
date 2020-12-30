import React from 'react'
import NamesContainer from '../SongsContainer/index.jsx'
import styles from './style.module.css'

class Dalmatinske extends React.Component{
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
        '16. Živim za to (Jacques Houdek)'
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
            <h2 className={styles.repertoire_h2}>SEARCH</h2>
            <input type='text' value={this.state.searchTerm} onChange={this.editSearchTerm} placeholder="Pretraži repertoar!"/>
            <br></br>
            <h1 className={styles.repertoire_h1}>Dalmatinske:</h1>
            <br></br>
            <div className={styles.NamesContainer}>
                <NamesContainer names={this.dynamicSearch()}/>
            </div>
            </div>
        </div>
    );
}
}

export default Dalmatinske;