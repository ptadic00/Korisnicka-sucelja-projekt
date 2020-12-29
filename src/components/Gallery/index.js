import React, {Component} from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './style.module.css'

const images=[
'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/318707_274122685936721_7339281_n.jpg?_nc_cat=103&ccb=2&_nc_sid=cdbe9c&_nc_ohc=KQ1-A4u-stkAX8wel4b&_nc_ht=scontent-frt3-2.xx&oh=7349983d0376e1fe8a9a6b9e96a1a833&oe=60044153',
'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/313319_274123715936618_7003103_n.jpg?_nc_cat=108&ccb=2&_nc_sid=cdbe9c&_nc_ohc=xXt9ylG-PqgAX9Xs_Rf&_nc_ht=scontent-frt3-1.xx&oh=9bdddbd1ee7f34fa7ca3c9f5035ff409&oe=6005D1FE',
'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/185265_274124035936586_6336409_n.jpg?_nc_cat=109&ccb=2&_nc_sid=cdbe9c&_nc_ohc=Ez1lgbhkCE8AX_o-TP2&_nc_ht=scontent-frt3-1.xx&oh=5ff16ba03a71b31e2bea7f59b93ee6ab&oe=6006E603',
'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/298981_274125829269740_241255_n.jpg?_nc_cat=104&ccb=2&_nc_sid=cdbe9c&_nc_ohc=IPhKU7I9RU8AX98PADH&_nc_ht=scontent-frt3-1.xx&oh=7c67c494f218f086bb281a4cd80c31df&oe=6007AC37',
'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/310574_274123635936626_587991_n.jpg?_nc_cat=105&ccb=2&_nc_sid=cdbe9c&_nc_ohc=DYsThqP8NfYAX8HDxJf&_nc_ht=scontent-frx5-1.xx&oh=498c96c80438277ccffe7ed820e45228&oe=60078776',
'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/313453_274124535936536_6898660_n.jpg?_nc_cat=109&ccb=2&_nc_sid=cdbe9c&_nc_ohc=kQzq1Y6HOhwAX8_vDqm&_nc_ht=scontent-frt3-1.xx&oh=1b91e12263c13467d97b6aff78e75081&oe=600779F3',
'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/303286_274125225936467_6421345_n.jpg?_nc_cat=103&ccb=2&_nc_sid=cdbe9c&_nc_ohc=rtycpN-Dq3YAX8GznHR&_nc_ht=scontent-frt3-2.xx&oh=cbdf08642cbb65b40446f2fb1b2db48d&oe=6004AB40',
'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/302931_274123102603346_3205036_n.jpg?_nc_cat=107&ccb=2&_nc_sid=cdbe9c&_nc_ohc=AVVXKMcmnk0AX-8rm7k&_nc_ht=scontent-frt3-1.xx&oh=a7ab071e669b56b3c651bfe0c617a953&oe=6005A10B',
'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/309517_274125329269790_7295986_n.jpg?_nc_cat=109&ccb=2&_nc_sid=cdbe9c&_nc_ohc=GwrhoFC7D2wAX9IUn2N&_nc_ht=scontent-frt3-1.xx&oh=13d1b72a9088ed661aedda93b91896b7&oe=600613D5'
    
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
            <div className='my-3'> 
                <div className='row'> 
                    <div className='col'> 
                        <img src='https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/318707_274122685936721_7339281_n.jpg?_nc_cat=103&ccb=2&_nc_sid=cdbe9c&_nc_ohc=KQ1-A4u-stkAX8wel4b&_nc_ht=scontent-frt3-2.xx&oh=7349983d0376e1fe8a9a6b9e96a1a833&oe=60044153' onClick={() => this.setState({ isOpen: true, photoIndex:0 })} /> 
                        <img src='https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/298981_274125829269740_241255_n.jpg?_nc_cat=104&ccb=2&_nc_sid=cdbe9c&_nc_ohc=IPhKU7I9RU8AX98PADH&_nc_ht=scontent-frt3-1.xx&oh=7c67c494f218f086bb281a4cd80c31df&oe=6007AC37' onClick={() => this.setState({ isOpen: true, photoIndex:3 })} /> 
                        <img src='https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/303286_274125225936467_6421345_n.jpg?_nc_cat=103&ccb=2&_nc_sid=cdbe9c&_nc_ohc=rtycpN-Dq3YAX8GznHR&_nc_ht=scontent-frt3-2.xx&oh=cbdf08642cbb65b40446f2fb1b2db48d&oe=6004AB40' onClick={() => this.setState({ isOpen: true, photoIndex:6 })} /> 
                    </div> 
                    <div className='col'> 
                        <img src='https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/313319_274123715936618_7003103_n.jpg?_nc_cat=108&ccb=2&_nc_sid=cdbe9c&_nc_ohc=xXt9ylG-PqgAX9Xs_Rf&_nc_ht=scontent-frt3-1.xx&oh=9bdddbd1ee7f34fa7ca3c9f5035ff409&oe=6005D1FE' onClick={() => this.setState({ isOpen: true, photoIndex:1 })} /> 
                        <img src='https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/310574_274123635936626_587991_n.jpg?_nc_cat=105&ccb=2&_nc_sid=cdbe9c&_nc_ohc=DYsThqP8NfYAX8HDxJf&_nc_ht=scontent-frx5-1.xx&oh=498c96c80438277ccffe7ed820e45228&oe=60078776' onClick={() => this.setState({ isOpen: true, photoIndex:4 })} /> 
                        <img src='https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/302931_274123102603346_3205036_n.jpg?_nc_cat=107&ccb=2&_nc_sid=cdbe9c&_nc_ohc=AVVXKMcmnk0AX-8rm7k&_nc_ht=scontent-frt3-1.xx&oh=a7ab071e669b56b3c651bfe0c617a953&oe=6005A10B' onClick={() => this.setState({ isOpen: true, photoIndex:7 })} /> 
                    </div> 
                    <div className='col'> 
                        <img src='https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/185265_274124035936586_6336409_n.jpg?_nc_cat=109&ccb=2&_nc_sid=cdbe9c&_nc_ohc=Ez1lgbhkCE8AX_o-TP2&_nc_ht=scontent-frt3-1.xx&oh=5ff16ba03a71b31e2bea7f59b93ee6ab&oe=6006E603' onClick={() => this.setState({ isOpen: true, photoIndex:2 })} /> 
                        <img src='https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/313453_274124535936536_6898660_n.jpg?_nc_cat=109&ccb=2&_nc_sid=cdbe9c&_nc_ohc=kQzq1Y6HOhwAX8_vDqm&_nc_ht=scontent-frt3-1.xx&oh=1b91e12263c13467d97b6aff78e75081&oe=600779F3' onClick={() => this.setState({ isOpen: true, photoIndex:5 })} /> 
                        <img src='https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/309517_274125329269790_7295986_n.jpg?_nc_cat=109&ccb=2&_nc_sid=cdbe9c&_nc_ohc=GwrhoFC7D2wAX9IUn2N&_nc_ht=scontent-frt3-1.xx&oh=13d1b72a9088ed661aedda93b91896b7&oe=600613D5' onClick={() => this.setState({ isOpen: true, photoIndex:8 })} /> 
                    </div> 
                    </div> {isOpen && ( 
                    <Lightbox 
                        mainSrc={images[photoIndex]} 
                        nextSrc={images[(photoIndex + 1) % images.length]} 
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]} 
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
            </div>
        )
    }
}