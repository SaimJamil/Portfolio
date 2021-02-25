import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
} from 'react-share'

import {Link} from 'react-scroll'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6" >
                        <div className="d-flex">
                            <p>Delhi </p>
                        </div>
                        <div className="d-flex">
                        <p>HNo : 6935 Ahata Kidara, BHR Delhi 06 </p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:9899-487-999">+91(989)948-7999 </a>
                        </div>
                        <div className="d-flex">
                            <p>saimjamil70@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6" >
                        <div className="row">
                            <div className="col">
                                <Link smooth={ true } to="home" offset={-110} className="footer-nav">Home</Link>
                                <br/>
                                <Link smooth={ true } to="about" offset={-110} className="footer-nav">About Me</Link>
                                <br/>
                                <Link smooth={ true } to="skills" offset={-110} className="footer-nav">Skills</Link>
                                <br/>
                                <Link smooth={ true } to="education" offset={-110} className="footer-nav">Education</Link>
                                <br/>
                            </div>
                            <div className="col">
                                <Link smooth={ true } to="experience" offset={-110} className="footer-nav">Experience</Link>
                                <br/>
                                <Link smooth={ true } to="projects" offset={-110} className="footer-nav">Projects</Link>
                                <br/>
                                <Link smooth={ true } to="contacts" offset={-110} className="footer-nav">Contact Me</Link>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center" >
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton url="https://clone-5fe02.web.app/"
                            quote="Backend Developer"
                            hashtag="#.Net"
                            >
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>

                            <TwitterShareButton url="https://clone-5fe02.web.app/"
                            quote="Backend Developer"
                            hashtag="#.Net"
                            >
                                <TwitterIcon className="mx-3" size={36}/>
                            </TwitterShareButton>
                            <RedditShareButton url="https://clone-5fe02.web.app/"
                            quote="Backend Developer"
                            hashtag="#.Net"
                            >
                                <RedditIcon className="mx-3" size={36}/>
                            </RedditShareButton>
                            <LinkedinShareButton url="https://clone-5fe02.web.app/"
                            quote="Backend Developer"
                            hashtag="#.Net"
                            >
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp; Saim Jamil | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
