import React from 'react'

const Experience = () => {
    return (
        <div id="experience" className="education">
            <div className="d-flex justify-content-center my-5">
                <h1>Experience</h1>
            </div>
            <div className="container education-wraper">
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                    <h3>Aptean <span style={{color:"#666666",fontWeight:"400"}}>(Dec 2019 - present)</span></h3>
                        <p><b>Designation :</b> Associate Software Developer</p>
                        <p>Completed 3 months <b>Bootcamp training </b> , currently working on an Ecommerce Store, building Grpc services & GraphQl Apis</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
