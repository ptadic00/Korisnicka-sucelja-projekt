import React from 'react'
import NamesContainer from '../SongsContainer/index.jsx'
import styles from './style.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Dalmatinske extends React.Component{
state={
    names:[
        '1. Dalmatinac sam',
        '2. Dalmacija u mom oku',
        '3. Da te mogu pismom zvati',
        '4. Dalmatinka (Severina)',
        '5. Večeras je naša fešta',
        '6. Takav Sam Rođen (Mišo Kovač)',
        '7. Da Te Mogu Pismom Zvati (Klapa Maslina)',
        '8. Nosi Mi Se Bijela Boja (Jole)',
        '9. Dalmacijo Ljubav Si Vječna (Milo Hrnić)',
        '10. Majko Stara (Matko Jelavić)',
        '11. Srdele (Doris Dragović)',
        '12. Barka (Zaratino)',
        '13. Od Mora Do Mora (Daleka Obala)',
        '14. Stojin Na Kantunu (Đavoli)',
        '15. Moja Ljubav Stara (Klapa Godimenti)',
        '16. Ne Krij Oči Zelene (Bepo Matešić)',
        '17. Ja Sam Samo Vagabundo (Goran Karan)',
        '18. Šteta Duše Šteta Tila (Giuliano)',
        '19. Pričaj Mi Dalmaciju (Klapa Cambi)',
        '20. Uvik Isti (Petar Graso)',
        '21. Noći U Dalmaciji (Klapa Bonaca)',
        '22. Ribari (Vinko Coce)',
        '23. Još Ne Mogu Pristat Volit (Klapa Iskon)',
        '24. Projdi Vilo (Gibonni)',
        '25. Sve Ću Preživit (Tedi Spalato)',
        '26. Ča Će Mi Copacabana (Oliver Dragojević)',
        '27. Plovi Mala Barka (Novi Fosili)',
        '28. Adio Bella (Jasna Zlokić)',
        '29. Tamo Gdje Sam Rođen (Tomislav Ivčić)',
        '30. Kad Mendule Procvitaju (Đani Maršan)',
        '31. Ne diraj moju ljubav (Klapa Šufit)',
        '32. Kuća Naše pisme (Goran Karan)',
        '33. Zora bila (Tomislav Bralić i klapa Intrade)',
        '34. Od zipke do križa (Klapa Cambi)',
        '35. Da te mogu pismom zvati (Klapa Maslina)',
        '36. Sunce mi od tebe dolazi (Klapa Rišpet i Mišo Kovač)',
        '37. Lipote gladan, jubavi žedan (Tedi Spalati i klapa Teuta)',
        '38. Ako si pošla spat (Klapa Šibenik i Mišo Kovač)',
        '39. Vilo moja (Klapa Crikvenica)',
        '40. Jute san se zajubija (Klapa Lučica)',
        '41. Ne more mi bit (Klapa Cambi)',
        '42. Ne damo te pismo naša (Tomislav Bralić i klapa Intrade)',
        '43. Kad je pošla ća (Klapa Rišpet)',
        '44. Škrinja jubavi (Tomislav Bralić i Oliver Dragojević)',
        '45. Kraj tvoje duše moje (Klapa Sv. Juraj HRM)',
        '46. Jubin te (Klapa Šufit)',
        '47. Oči boje lavande (Bonaca)',
        '48. Maslina je neobrana (Klapa Maslina)',
        '49. Aj ća, volin te (Klapa Kampanel)',
        '50. Dalmatino povišću pritrujena',
        '51. Mirno spavaj, ružo moja (Vinko Coce)',
        '52. Kalelarga (Tomislav Ivčić)',
        '53. Galeb i ja (Oliver Dragojević)',
        '54. Konoba (Meri Cetinić)',
        '55. Cvit od kamena (Dalmatino)',
        '56. More (Meri Cetinić)',
        '57. Noćas mi se snilo',
        '58. Kada umrem umotan u bilo (Vinko Coce)'
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