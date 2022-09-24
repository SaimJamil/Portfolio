import React from 'react'
import Typed from 'react-typed'
import { Link } from 'react-scroll'

const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h1>Saim Jamil</h1>
                <Typed className="typed-text"
                    strings={["Software Development Engineer", "At Sharechat", "Backend Developer"]}
                    typeSpeed={50}
                    backSpeed={70} ś
                    loop
                />
                <Link to="contacts" href="#" className="btn-main-offer"><b>Contact Me</b></Link>
            </div>
        </div>
    )
}

export default Header
