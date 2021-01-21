import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'

import i1 from '../../images/carousel_img1.jpg'
import i2 from '../../images/carousel_img3.jpg'
import i3 from '../../images/slider.jpg'
import i4 from '../../images/carousel_img4.jpg'

import styles from './style.module.css'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


function Slider(props){
    return(
        <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={props.deviceType !== 'mobile' ? true : false}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            /*customTransition='all .5'*/
            customTransition="transform 500ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={['tablet', 'mobile']}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            >
            <div>
                <img src={i1} alt="img1" className={styles.slideImg}/>
            </div>
            <div>
                <img src={i4} alt="img4" className={styles.slideImg}/>
            </div>
            <div>
                <img src={i2} alt="img2" className={styles.slideImg}/>
            </div>
            <div>
                <img src={i3} alt="img3" className={styles.slideImg}/>  
            </div>
        </Carousel>
    );
}

export default Slider;