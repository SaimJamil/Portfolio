import React from 'react'
import Author from '../me.jpg'

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={Author} alt="author..." /> 
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="aboutme-heading">About Me</h1>
                    <p>
                        Hi, I am <b>Saim Jamil</b>.
                        I have 1+ year of experience as an <b>Associate Software Developer</b> in <b>Aptean. </b>
                         While I am a proficient Backend Developer, my expertise is in building scalable backend services( Api service, Grpc services, Async Mechanism).
                    </p>
                    <p>    
                         I love building things. While hard engineering problems are often fun to tackle.
                         I love problem solving & Competitive Programming & i have solved over 600 problems on leetcode.
                    </p>
                    <p>I am looking for a <b>Software Development Engineer (SDE)</b> role where i can grow my knowledge & skills and at the same time apply the experience that i have.</p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe
