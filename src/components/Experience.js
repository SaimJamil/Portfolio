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
                        <h3>Aptean <span style={{ color: "#666666", fontWeight: "400" }}>(Dec 2019 - Aug 2021)</span></h3>
                        <p><b>Designation :</b> Associate Software Developer</p>
                        <p>Went through 3 months <b>Bootcamp training </b>
                            <br></br> Worked on an Ecommerce Application (<b>Aptean Ecommerce</b>).<br></br>
                            Built highly scalable Grpc services & GraphQl Apis</p>
                        <br></br>
                        <br></br>
                    </div>
                </div>
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>Sharechat <span style={{ color: "#666666", fontWeight: "400" }}>(Aug 2021 - present)</span></h3>
                        <p><b>Designation :</b> Software Development Engineer</p>
                        <p> Worked on <b>Moj & Takatak</b> Backend.<br></br>
                            Created Highly scalable services from scratch.<br></br>
                            Performance & cost optimisations<br></br>
                            Took complete ownership of critical backend services.</p>
                        <br></br>
                        <br></br>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Experience
