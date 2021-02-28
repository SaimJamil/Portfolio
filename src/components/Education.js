import React from 'react'

const Education = () => {
    return (
        <div id="education" className="education">
            <div className="d-flex justify-content-center my-5">
                <h1>Education</h1>
            </div>
            <div className="container education-wraper">
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>SSC (10th) <span style={{color:"#666666",fontWeight:"400"}}>(2012 - 2013)</span></h3>
                        <p><b>School :</b> Harcourt Butler Sr Sec School</p>
                        <p>CBSE Board <b>8.4 CGPA </b></p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                    <h3>HSSC (11th & 12th) <span style={{color:"#666666",fontWeight:"400"}}>(2013 - 2015)</span></h3>
                        <p><b>School :</b> Harcourt Butler Sr Sec School</p>
                        <p>CBSE Board <b>86%</b></p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                    <h3>Btech-CSE <span style={{color:"#666666",fontWeight:"400"}}>(2015 - 2019)</span></h3>
                        <p><b>Universiy :</b> GGSIPU</p>
                        <p><b>College :</b>Ambedkar Institute of technology (AIACTR) </p>
                        <p><b>CGPA :</b>8.56</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
