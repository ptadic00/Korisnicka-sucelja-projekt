import React, {Component} from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import styles from './style.module.css'

import { Fade } from "react-awesome-reveal";
 
const images=[
'https://scontent.fzag4-1.fna.fbcdn.net/v/t1.0-9/318707_274122685936721_7339281_n.jpg?_nc_cat=103&ccb=2&_nc_sid=cdbe9c&_nc_ohc=fCuAqrW8FZsAX8X1DIv&_nc_ht=scontent.fzag4-1.fna&oh=1f29c28402d2c04b189848902246165a&oe=602BCE53',
'https://scontent.fzag4-1.fna.fbcdn.net/v/t1.0-9/313319_274123715936618_7003103_n.jpg?_nc_cat=108&ccb=2&_nc_sid=cdbe9c&_nc_ohc=5qkDQ-QszS8AX-Z5TG0&_nc_ht=scontent.fzag4-1.fna&oh=cf2e1dff678eacaa024abac7f3e78c23&oe=602D5EFE',
'https://scontent.fzag4-1.fna.fbcdn.net/v/t1.0-9/185265_274124035936586_6336409_n.jpg?_nc_cat=109&ccb=2&_nc_sid=cdbe9c&_nc_ohc=4qjRsvL7W10AX-cfnx_&_nc_ht=scontent.fzag4-1.fna&oh=045c546cf08cd440d2f26e9e45607e53&oe=602E7303',
'https://scontent.fzag4-1.fna.fbcdn.net/v/t1.0-9/298981_274125829269740_241255_n.jpg?_nc_cat=104&ccb=2&_nc_sid=cdbe9c&_nc_ohc=D6ULQ6b1GngAX89Oyr4&_nc_ht=scontent.fzag4-1.fna&oh=e879bfae2bb38383b3f2273252426ff0&oe=602F3937',
'https://scontent.fzag4-1.fna.fbcdn.net/v/t1.0-9/310574_274123635936626_587991_n.jpg?_nc_cat=105&ccb=2&_nc_sid=cdbe9c&_nc_ohc=5dngJgzwtwAAX_nS3ey&_nc_ht=scontent.fzag4-1.fna&oh=6d9f79730be2dea71a3061609f5c4496&oe=602F1476',
'https://scontent.fzag4-1.fna.fbcdn.net/v/t1.0-9/313453_274124535936536_6898660_n.jpg?_nc_cat=109&ccb=2&_nc_sid=cdbe9c&_nc_ohc=pc-wOlXQv58AX9gzTUL&_nc_ht=scontent.fzag4-1.fna&oh=92a6c2bfd132ade0aae7884144578010&oe=602F06F3',
'https://scontent.fzag4-1.fna.fbcdn.net/v/t1.0-9/303286_274125225936467_6421345_n.jpg?_nc_cat=103&ccb=2&_nc_sid=cdbe9c&_nc_ohc=DkSUT_7i5R4AX-aieZU&_nc_ht=scontent.fzag4-1.fna&oh=a4d42cf1ca1f2483c81f0358dc9607c6&oe=602C3840',
'https://scontent.fzag4-1.fna.fbcdn.net/v/t1.0-9/302931_274123102603346_3205036_n.jpg?_nc_cat=107&ccb=2&_nc_sid=cdbe9c&_nc_ohc=cj-gES6O6jgAX9L38ix&_nc_ht=scontent.fzag4-1.fna&oh=77a245d41c5830f2b4b72494ad609031&oe=602D2E0B',
'https://scontent.fzag4-1.fna.fbcdn.net/v/t1.0-9/309517_274125329269790_7295986_n.jpg?_nc_cat=109&ccb=2&_nc_sid=cdbe9c&_nc_ohc=Za2RvTwflpkAX9LMOB5&_nc_ht=scontent.fzag4-1.fna&oh=97554bf521e8e866125c1fe3cca3f2c9&oe=602DA0D5'
    /*
'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/318707_274122685936721_7339281_n.jpg?_nc_cat=103&ccb=2&_nc_sid=cdbe9c&_nc_ohc=KQ1-A4u-stkAX8wel4b&_nc_ht=scontent-frt3-2.xx&oh=7349983d0376e1fe8a9a6b9e96a1a833&oe=60044153',
'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/313319_274123715936618_7003103_n.jpg?_nc_cat=108&ccb=2&_nc_sid=cdbe9c&_nc_ohc=xXt9ylG-PqgAX9Xs_Rf&_nc_ht=scontent-frt3-1.xx&oh=9bdddbd1ee7f34fa7ca3c9f5035ff409&oe=6005D1FE',
'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/185265_274124035936586_6336409_n.jpg?_nc_cat=109&ccb=2&_nc_sid=cdbe9c&_nc_ohc=Ez1lgbhkCE8AX_o-TP2&_nc_ht=scontent-frt3-1.xx&oh=5ff16ba03a71b31e2bea7f59b93ee6ab&oe=6006E603',
'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/298981_274125829269740_241255_n.jpg?_nc_cat=104&ccb=2&_nc_sid=cdbe9c&_nc_ohc=IPhKU7I9RU8AX98PADH&_nc_ht=scontent-frt3-1.xx&oh=7c67c494f218f086bb281a4cd80c31df&oe=6007AC37',
'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/310574_274123635936626_587991_n.jpg?_nc_cat=105&ccb=2&_nc_sid=cdbe9c&_nc_ohc=DYsThqP8NfYAX8HDxJf&_nc_ht=scontent-frx5-1.xx&oh=498c96c80438277ccffe7ed820e45228&oe=60078776',
'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/313453_274124535936536_6898660_n.jpg?_nc_cat=109&ccb=2&_nc_sid=cdbe9c&_nc_ohc=kQzq1Y6HOhwAX8_vDqm&_nc_ht=scontent-frt3-1.xx&oh=1b91e12263c13467d97b6aff78e75081&oe=600779F3',
'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/303286_274125225936467_6421345_n.jpg?_nc_cat=103&ccb=2&_nc_sid=cdbe9c&_nc_ohc=rtycpN-Dq3YAX8GznHR&_nc_ht=scontent-frt3-2.xx&oh=cbdf08642cbb65b40446f2fb1b2db48d&oe=6004AB40',
'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/302931_274123102603346_3205036_n.jpg?_nc_cat=107&ccb=2&_nc_sid=cdbe9c&_nc_ohc=AVVXKMcmnk0AX-8rm7k&_nc_ht=scontent-frt3-1.xx&oh=a7ab071e669b56b3c651bfe0c617a953&oe=6005A10B',
'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/309517_274125329269790_7295986_n.jpg?_nc_cat=109&ccb=2&_nc_sid=cdbe9c&_nc_ohc=GwrhoFC7D2wAX9IUn2N&_nc_ht=scontent-frt3-1.xx&oh=13d1b72a9088ed661aedda93b91896b7&oe=600613D5'
  */  
]
 
export default class Photos extends Component{
 
    constructor(props){
        super(props);
 
        this.state={
            photoIndex:0,
            isOpen:false,
        };
    }
 
    render(){
        const{photoIndex,isOpen}=this.state;
 
        return(
            <div className={styles.galerija}>
                <Fade triggerOnce={true} delay={500}>
                    <div className={styles.galerijaGrid}>
                        {images.map((image, index) => <img src={image} onClick={() => {
                            this.setState({isOpen: true, photoIndex: index})}
                            }/>)}
                    </div> 
                </Fade>
            {isOpen && ( 
                <Lightbox className={styles.lightbox}
                    mainSrc={images[photoIndex]} 
                    nextSrc={images[photoIndex + 1]} 
                    prevSrc={images[photoIndex -1]} 
                    onCloseRequest={() => this.setState({ isOpen: false })} 
                    onMovePrevRequest={() => 
                        this.setState({ 
                            photoIndex: (photoIndex + images.length - 1) % images.length, 
                        }) 
                    } 
                    
                    onMoveNextRequest={() => 
                        this.setState({ 
                            photoIndex: (photoIndex + 1) % images.length, 
                        }) 
                    } 
                /> 
                )} 
            </div>
        )
    }
}