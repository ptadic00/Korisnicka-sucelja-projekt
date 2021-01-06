import React from 'react'
import NamesContainer from '../SongsContainer/index.jsx'
import styles from './style.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Zabavno extends React.Component{
state={
    names:[
        '1. Svatovska (Maja Šuput)',
        '2. Ja jos uvijek kao momak zivim (Mate Bulić)',
        '3. Djevojacko vece (Maja Šuput)',
        '4. Dao bi 100 Amerika (Jasmin Stavros)',
        '5. Dabogda se i ti udala (Mate Bulić)',
        '6. Otvor ženo kapiju (Miroslav Škoro)',
        '7. 5,6 piva (Mejaši)',
        '8. A kad mi dođeš ti (Oliver Dragojević)',
        '9. A šta da radim (Azra)',
        '10. Ako me ostaviš (Mišo Kovač)',
        '11. Ako odem prijatelji (Zlatko Pejaković)',
        '12. Ako poludim (Magazin)',
        '13. Ako su to samo bile laži (Plavi Orkestar)',
        '14. Ako varaš (Leo)',
        '15.Ako voliš me (Oliver Dragojević)',
        '16. Bitanga i princeza (Bijelo Dugme)',
        '17. Bižuterija (Jelena Rozga)',
        '18. Bolja od najbolje (Ivan Zak)',
        '19. Bolje biti pijan nego star (Plavi Orkestar)',
        '20. Da te ne volim (Novi fosili)',
        '21. Danas majko ženiš svoga sina',
        '22. Duša od papira (Jole)',
        '23. Dva zrna grožđa (Danijela)',
        '24. Hajde da ludujemo (Tajči)',
        '25. Heroj ulice (Prljavo kazalište)',
        '26. Još fališ (Vigor)',
        '27. Kad žena zavoli (Toni Cetinski)',
        '28. Krivi spoj (Severina)',
        '29. Milijun poljubaca (Gazde i Šola)',
        '30. Napala me s leđa (Begini)',
        '31. Morska vila (Daleka obala)',
        '32. Ne zovi mama doktora (Prljavo kazalište)',
        '33. Nesanica (Toše Proeski)',
        '34. Odvest ću te na vjenčanje (Mišo Kovač)',
        '35. Otkad te nema (Alka Vuica)',
        '36. Ove noći jedna žena (Zlatko Pejaković)',
        '37. Previše suza u mom pivu (Prljavo kazalište)',
        '38. Prijatelji (Thompson)',
        '39. Prijateljice (Severina)',
        '40. Sad kad došla si (Klapa Kambi)',
        '41. Samac (Jole)',
        '42. Samo jedan dan života (Mišo Kovač)',
        '43. Samo je ljubav tajna dvaju svjetova (Thompson)',
        '44. Sanjao sam moju ružicu (Leteći odred)',
        '45. Sreća je tamo gdje si ti (Oliver Dragojević)',
        '46. Sve je lako kad si mlad (Prljavo kazalište)',
        '47. Takvi kao ti (Nina Badrić)',
        '48. Ti si moj san (Oliver i Kondža)',
        '49. Tko mi te krade (Ivan Zak)',
        '50. Viski (Lidija Bačić)',
        '51. Volio bih (Dubioza kolektiv)',
        '52. Za dobra stara vremena (Novi fosili)',
        '53. Za ljubav ja dao bih sve (Mladen Grdović i Bepo Metešić)',
        '54. Zavela me Ana (Mejaši)',
        '55. Zbog jedne divne crne žene (Kićo Slabinac)',
        '56. Zenica Blues (Zabranjeno pušenje)',
        '57. Četrnaest palmi (Daleka obala)',
        '58. Što učinio si ti (Nina Badrić)',
        '59. Ženo (Jasmin Stavros)',
        '60. Žuto lišće ljubavi (Oliver Dragojević)'
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
            <input className={styles.repertoireInput} type='text' value={this.state.searchTerm} onChange={this.editSearchTerm} placeholder="Pretraži repertoar!"/>
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