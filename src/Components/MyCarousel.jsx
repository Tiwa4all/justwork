import React from 'react'
import dev from './new.jpg'
import dev2 from './f.jpg'
import './MyCarousel.css'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyCarousel = () => {
  return (
    <Carousel autoPlay={true} showArrows={true} showIndicators={true} showThumbs={false} infiniteLoop={true}>
        <div>
                    <img src={dev2} />
                    <p className="legend">PushTecnh</p>
                </div>
                <div>
                    <img src={dev2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://source.unsplash.com/random" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={dev2} />
                    <p className="legend">Legend 2</p>
                </div>
                {/* <div>
                    <img src="https://source.unsplash.com/random" />
                    <p className="legend">Legend 2</p>
                </div> */}
    </Carousel>
  )
}

export default MyCarousel
