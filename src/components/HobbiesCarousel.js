import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

import Workout from '../Workout.jpg'
import TableTennis from '../TableTennis.jpg'
import Games from '../Game.jpg'

const HobbiesCarousel = () => {
    return (
        <div>
            <Carousel 
                infiniteLoop={true}
                showThumbs={false}
                showArrows={true}
                showStatus={false}
                autoPlay={true}
                interval={3000}
            >
                <>
                <img src={Workout} alt="workout"/>
                <div className="myCarousel">
                    <h3>Workout</h3>
                    <p>i like to do workout</p>
                </div>
                </>
                <>
                <img src={TableTennis} alt="Table Tennis"/>
                <div className="myCarousel">
                    <h3>Table Tennis</h3>
                    <p>i like to play Table Tennis</p>
                </div>
                </>
                <>
                <img src={Games} alt="Mobile Games"/>
                <div className="myCarousel">
                    <h3>Video Games</h3>
                    <p>i like to play video Games</p>
                </div>
                </>
            </Carousel>
        </div>
    )
}

export default HobbiesCarousel
