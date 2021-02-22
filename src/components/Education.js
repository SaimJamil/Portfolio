import React from 'react'

const Education = () => {
    return (
        <div className="education">
            <div className="d-flex justify-content-center my-5">
                <h1>Education</h1>
            </div>
            <div className="container education-wraper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2012-2013</h3>
                        <p>I completed my 10th From Harcourt Butler Sr. Sec. School with 8.4 CGPA</p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2014-2015</h3>
                        <p>I completed my 12th From Harcourt Butler Sr. Sec. School with 86%</p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2015-2019</h3>
                        <p>I have completed my btech in computer science from Ambedkar Institute of technology(AIACTR)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
