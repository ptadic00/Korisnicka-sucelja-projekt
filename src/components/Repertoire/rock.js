import React from 'react'
import NamesContainer from '../SongsContainer/index.jsx'
import styles from './style.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { Bounce } from "react-awesome-reveal";

class App extends React.Component{
state={
    names:[
        '1. Ako te pitaju (Grašo)',
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
        '24. 92 godine (P. Grašo)',
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
        '61. Srce za vodiča (Grašo)',
        '62. Ne mogu te prestat ljubit (Bralic)',
        '63. Zalutali pogled (Bralic)',
        '64. Kadi su ta vrata (Gustafi)',
        '65. Ja nisan stija mala (Gustafi)',
        '66. Zorica (Mejasi)',
        '67. Mata (Skoro)',
        '68. Juliska (Skoro)',
        '69. Karanfili (Nives Celzijus)',
        '70. Brkica (Gustafi)',
        '71. Lutka (S.A.R.S.)',
        '72. Sinoc sam pola kafane popio (Bebek)',
        '73. Tijana (Bebek)',
        '74. Stari lav (Ž. Samarđić)',
        '75. Morski vuk (Oliver &amp; Tony)',
        '76. Tražena si roba (Vuco)',
        '77. Tarapana (Severina)',
        '78. Brad Pitt (Severina)',
        '79. Italiana (Severina)',
        '80. Okus mentola (J. Rozga)',
        '81. Obožavam (J. Rozga)',
        '82. Tsunami (J. Rozga)',
        '83. Vozacka (L. Bacic)',
        '84. Viski (L. Bacic)',
        '85. Uzorita (Grdovic &amp; Bralic)',
        '86. Ne diraj moju ljubav (Klapa Sufit)',
        '87. Nakon svih ovih godina (P. Valjak)',
        '88. Tvoja mala (I. Kovač)',
        '89. No, no, no (Magazin)',
        '90. Kad zamirisu jorgovani (D. Merlin)',
        '91. Da je srece bilo (Bebek)',
        '92. Moje zlato (Grašo)',
        '93. Uvik isti (Grašo)',
        '94. Nevista (Grašo)',
        '95. Sporke rici (Grašo)',
        '96. Volim i postojim (Grašo)',
        '97. Vera od suvog zlata (Grašo)',
        '98. Tko nam brani (Grašo)',
        '99. Zdravko Čolić (Esma)',
        '100. Obriši suze (Begini)',
        '101. Pretjerujem (Ivan Zak)',
        '102. Za sve moje bivše (Begini)',
        '103. Usne varane (Ivan Zak)',
        '104. Devet slova jedne riči (Alen Nizetic)',
        '105. Kada žene tulumare (Jole)',
        '106. Remek djelo (Jole)',
        '107. Ima nesto od srca do srca (C. Jabuka)',
        '108. Dalmacijo srce oca moga (Ivana Kovac)',
        '109. To mi radi',
        '110. Svidja mi se ova stvar',
        '111. Tempera (Giboni)',
        '112. Posoljeni zrak i razlivena tinta (Giboni)',
        '113. Činim pravu stvar (Giboni)',
        '114. Sve ove godine (Indexi)',
        '115. Kad srce kaze da (Sandi)',
        '116. Što učinila si ti (Oliver)',
        '117. Lijepa li si (Thompson)'
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
            <Bounce triggerOnce={true}>
                <h1 className={styles.repertoire_h1}>PopRock:</h1>
            </Bounce>
            <br></br>
            <div className={styles.NamesContainer}>
                <NamesContainer names={this.dynamicSearch()}/>
            </div>
            </div>
        </div>
    );
}
}

export default App;