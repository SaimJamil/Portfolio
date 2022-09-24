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
                        I am <b>Saim Jamil</b> <b>Software Development Engineer</b> at <b>Sharechat </b>.
                    </p>
                    <p>
                        I have 3 years of experience as <b>Backend Developer</b>. My expertise is in building scalable services that can serve thousands of requests per second.
                    </p>
                    <p>
                        I love solving complex engineering problems & I also enjoy designing & building applications.
                    </p>
                    <p>I am looking for <b>Software Development Engineer-2 (SDE-2)</b> role where I can use my skills & experience to solve complex problems & at the same time increase my knowledge.</p>
                </div>
            </div>
            <div className="row">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>

        </div>
    )
}

export default AboutMe
