import React from 'react'
import NamesContainer from '../SongsContainer/index.jsx'
import styles from './style.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { Bounce } from "react-awesome-reveal";

class Strano extends React.Component{
state={
    names:[
        '1. Stand by me (Ben E King)',
        '2. Simple the best (Tina Turner)',
        '3. Vivo per lei (Andrea Bocelli)',
        '4. Someone like you (Adele)',
        '5. Valerie (Amy Winehouse)',
        '6. Rolling In The Deep (Adele)',
        '7. Wonderfull tonight (Eric Klepton)',
        '8. The Time Of My Life (Bill Medley & Jennifer Warnes )',
        '9. Cocain (Eric Clapton)',
        '10. Without You (Mariah Carey)',
        '11. Lay down Saly (Eric Clapton)',
        '12. Proud Mary (Tina Turner)',
        '13. Walk of life (Dire Straits)',
        '14. Makarena (Gernte de Zona)',
        '15. Lets Get Loud (Jennifer Lopez)',
        '16. Green grass (Elvis)',
        '17. Sex bomb (Tom Jones)',
        '18. Its now of never (Elvis)',
        '19. Islands in the stream (Dolly Parton & Kenny Rogers )',
        '20. Rock around the clock (Elvis)',
        '21. Lets twist again (Chubby Checker)',
        '22. I Cant Get No - Satisfaction (The Rolling Stones)',
        '23. Blue suede shoes (Elvis)',
        '24. La bamba (Ritchie Valens)',
        '25. Bad moon rising (Creedence Clearwater Revival)',
        '26. Living in the next door to alice (Smokie)',
        '27. California blue',
        '28. Country roads (John Denver)',
        '29. Pretty woman',
        '30. Suspicious minds (Elvis Presley)',
        '31. Hello Mary Lou',
        '32. La isla Bonita',
        '33. My number one',
        '34. Whenever, Wherever',
        '35. I will survive',
        '36. How long will I love you (Ellie Goulding)',
        '37. Diana (Paul Anka)',
        '38. Bonasera sinjorina',
        '39. Unchain my heart (Joe cocker)',
        '40. Sorry seems to be the hardest word',
        '41. Looking into my eyes (Bryan Adams)',
        '42. Ai se eu te pego (Michael Telo)',
        '43. La vida loca',
        '44. Country road',
        '45. Summer 69 (Bryan Adams)',
        '46. So far away (Dire Straits)',
        '47. Money for nothing (Dire Straits)',
        '48. Sultans of swing (Dire Straits)',
        '49. Nah neh nah (Vaya con dios)',
        '50. Dont Let The Sun Go Down On Me (George Michael & Elton John)',
        '51. Let it be (Beatles)',
        '52. Coco jambo',
        '53. Imagine (John Lennon)',
        '54. Twist And Shou (Beatles)',
        '55. Hey Jude (Beatles)',
        '56. Rolling in the Deep (Adele)',
        '57. Fleetwood Mac (Seven Wonders)',
        '58. All my loving (Beatles)',
        '59. Jumping Jack flash (Rolling Stones)',
        '60. Love somebody',
        '61. Hey tonight (Credence)',
        '​62. Bad moon rising (Credence)',
        '​63. Wild dances (Ruslana)',
        '64. No woman no cry (Bob Marley)',
        '65. Sunshine reggae (Bob Marley)',
        '66. I can see clearly now (Johny Nash)',
        '67. Lucile (Kenny Rogers)',
        '68. Yesterday (Beatles)',
        '69. Always on my mind (Willie Nelson)',
        '70. Me & Bobby Mc gee (Janis Joplin)',
        '71. Wurlitzer price (Willie Nelson & Norah Jones)',
        '72. Nikita (Elton John)',
        '73. Bomboleo (Gipsy Kings)',
        '74. Somethin stupid',
        '75. Whish you were here (Pink Floyd)',
        '76. The wall (Pink Floyd)',
        '77. Shine on your crazy diamond (Pink Floyd)',
        '78. Black magic woman (Santana)',
        '79. If tomorrow never comes (Ronan Keating)',
        '80. I Dont Want To Talk About It (Rod Stewart)',
        '81. Lambada',
        '82. Cesera',
        '83. Something stupid (Frank & Nancy Sinatra)',
        '84. Quanta La Mera',
        '85. Volara',
        '86. Lucille',
        '87. Layla',
        '88. I got you baby',
        '89. Every breath you take',
        '90. Moonlight shadow',
        '91. Can You Feel The Love Tonight (Elton John)',
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
                <h1 className={styles.repertoire_h1}>Strano:</h1>
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

export default Strano;