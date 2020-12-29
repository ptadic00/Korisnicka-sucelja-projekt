import React from 'react'
import NamesContainer from '../components/SongsContainer/index.jsx'
import Footer from '../components/Footer'
import NavigationHeader from '../components/NavigationHeader'
import styles from '../components/Repertoire/style.module.css'

class App extends React.Component{
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
        '25. Ledena (Tose)',
        '26 Dio tebe (Nola)',
        '27. Tvoja prva djevojka (Severina)',
        '28. Unomomento (Severina)',
        '29. Italijana (Severina)',
        '30. Rujno vino (Pejakovic)',
        '31. Hajde nocas mi dodji - D. Merlin',
        '32. Gdje sam bio (Bebek)',
        '33.Ja po kafanama (Bebek)',
        '34. Djevojka sa cardas nogama (D. Balasevic)',
        '35. Svileni (Magazin)',
        '36. List duhana (Hari &amp; Doris)',
        '37. Lindo (Gracija)',
        '38. Ne pijem, ne pusim (J. Rozga)',
        '39. Ti zivis u oblacima mala (Z. Colic)',
        '40. Pusti pusti modu (Colic)',
        '41. Gutljaj vina (Magazin)',
        '42. Ako poludim (Magazin)',
        '43. Rano ranije (Magazin)',
        '44. Opijum (Magazin)',
        '45. Ja sam za ples (Tajci)',
        '46. 17 mi je godina (Tajci)',
        '47. Hajde da ludujemo (Tajci)',
        '48. Dobitna kombinacija (J. Rozga)',
        '49. Moj mali je opasan (Tajci)',
        '50. Drska zeno plava (Z. Joksimovic)',
        '51. Levisice (Danijel)',
        '52. Zbogom pameti (Zak)',
        '53. Dobro mi došla ljubavi (Gulijano)',
        '54. Srna i vuk (Guliano)',
        '55.Oko moje sanjivo (Magazin)',
        '56. Ljube se dobri losi (Magazin)',
        '57. Kokolo moj (Magazin)',
        '58. Dobra stara vremena mix (Razni izvodači)',
        '59. Dodirni mi koljena (Severina)',
        '60. Ena (Haustor)',
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
        <div className={styles.repertoire_background_image}>
            <NavigationHeader/>
            <br></br>
            <div className={styles.repertoire_page}>
            <h2 className={styles.repertoire_h2}>SEARCH</h2>
            <input type='text' value={this.state.searchTerm} onChange={this.editSearchTerm} placeholder="Pretraži repertoar!"/>
            <br></br>
            <h1 className={styles.repertoire_h1}>Sve pjesme:</h1>
            <br></br>
            <div className={styles.NamesContainer}>
                <NamesContainer names={this.dynamicSearch()}/>
            </div>
            </div>
            <Footer/>
        </div>
    );
}
}

export default App;