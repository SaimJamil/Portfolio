import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

import Workout from '../workout1.jpg'
import TableTennis from '../TableTennis1.jpg'
import Games from '../Game.jpg'
import Puzzle from '../Puzzle.jpg'

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
                    <p>It helps me in staying healthy & lower the risk of some diseases</p>
                </div>
                </>
                <>
                <img src={TableTennis} alt="Table Tennis"/>
                <div className="myCarousel">
                    <h3>Table Tennis</h3>
                    <p>I Like Table Tennis because of the great speed & spin. I love watching top chinese players</p>
                </div>
                </>
                <>
                <img src={Games} alt="Mobile Games"/>
                <div className="myCarousel">
                    <h3>Video Games</h3>
                    <p>I feel they are an escape from our sometimes boring and monotonous lives. </p>
                </div>
                </>
                <>
                <img src={Puzzle} alt="Puzzle"/>
                <div className="myCarousel">
                    <h3>Puzzle Solving</h3>
                    <p>Puzzles give psychological order to the chaos we feel</p>
                </div>
                </>
            </Carousel>
        </div>
    )
}

export default HobbiesCarousel
