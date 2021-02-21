import React from 'react'
import Typed from 'react-typed'
const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Saim Jamil</h1>
                <Typed className="typed-text" 
                strings={["Associate Software Developer","At Aptean","Backend Developer"]}
                typeSpeed={50}
                backSpeed={70}
                loop
                />
                <a href="#" className="btn-main-offer"><b>Contact Me</b></a>
            </div>
        </div>
    )
}

export default Header
