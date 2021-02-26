import React from 'react'
import HobbiesCarousel from './HobbiesCarousel'

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h1>My Hobbies</h1>
            <div className="container">
                <div className="hobbies-content">
                    <HobbiesCarousel/>
                </div>
            </div>
        </div>
    )
}

export default Hobbies
