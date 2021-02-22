import React from 'react'
import Author from '../me.jpg'

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={Author} alt="author..." /> 
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="aboutme-heading">About Me</h1>
                    <p>
                        Hi, I am Saim Jamil
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe
