import React from 'react'

const Experience = () => {
    return (
        <div id="experience" className="education">
            <div className="d-flex justify-content-center my-5">
                <h1>Experience</h1>
            </div>
            <div className="container education-wraper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>Engineering Intern <span style={{color:"#666666",fontWeight:"400"}}>(June 2018 - August 2018)</span></h3>
                        <p>Engineering Intern</p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                    <h3>Associate Software Developer <span style={{color:"#666666",fontWeight:"400"}}>(June 2018 - August 2018)</span></h3>
                        <p>Associate Software Developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
