import React from 'react'
import Amazon from '../amazon-clone.PNG'
import PortFolio from '../Portfolio.PNG'
import LeetCode from '../Leetcode.PNG'
import GeeksForGeeks from '../GeeksForGeeks.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus} from '@fortawesome/free-solid-svg-icons'
import {PopupboxContainer, PopupboxManager} from 'react-popupbox'
import "react-popupbox/dist/react-popupbox.css"

const Portfolio = () => {
    const openPopBoxAmazon = ()=>{
        const content=(
        <>
        <img  className="portfolio-image-popupbox" src={Amazon} alt="Amazon Clone Project"/>
        <p>Amazon Clone Using React Js with complete payment functionality using Stripe & using firebase for hosting & database</p>
        <b>Link :<a className="hyper-link" onClick={()=>window.open("https://clone-5fe02.web.app/","_blank")}>https://clone-5fe02.web.app/</a></b>
        </>
        )
        
        PopupboxManager.open({content})
    }

    const popupBoxConfigAmazon = {
        titleBar: {
            enable:false,
        },
        fadeIn:true,
        fadeInSpeed:500
    }

    const openPopBoxPortfolio = ()=>{
        const content=(
        <>
        <img  className="portfolio-image-popupbox" src={PortFolio} alt="PortFolio Project"/>
        <p>Responsive Portfilio Using React Js & Bootstrap</p>
        <b>Link :<a className="hyper-link" onClick={()=>window.open("https://saimjamil.github.io/Portfolio/","_blank")}>http://localhost:3000/</a></b>
        </>
        )
        
        PopupboxManager.open({content})
    }

    const popupBoxConfigPortFolio = {
        titleBar: {
            enable:false,
        },
        fadeIn:true,
        fadeInSpeed:500
    }

    const openPopBoxLeetcode = ()=>{
        const content=(
        <>
        <img  className="portfolio-image-popupbox" src={LeetCode} alt="LeetCode Profile"/>
        <p>Leetcode Profile : Solved over 600 questions on Leetcode</p>
        <b>Profile Link :<a className="hyper-link" onClick={()=>window.open("https://leetcode.com/saimjamil70/","_blank")}>https://leetcode.com/saimjamil70/</a></b>
        </>
        )
        
        PopupboxManager.open({content})
    }

    const popupBoxConfigLeetcode = {
        titleBar: {
            enable:false,
        },
        fadeIn:true,
        fadeInSpeed:500
    }

    const openPopBoxGeeksForGeeks = ()=>{
        const content=(
        <>
        <img  className="portfolio-image-popupbox" src={GeeksForGeeks} alt="GeeksForGeeks Profile"/>
        <p>GeeksForGeeks Profile : Solved over 130 problems </p>
        <b>Link :<a className="hyper-link" onClick={()=>window.open("https://auth.geeksforgeeks.org/user/saimjamil/profile","_blank")}>https://auth.geeksforgeeks.org/user/saimjamil/profile</a></b>
        </>
        )
        
        PopupboxManager.open({content})
    }

    const popupBoxConfigGeeksForGeeks = {
        titleBar: {
            enable:false,
        },
        fadeIn:true,
        fadeInSpeed:500
    }

    return (
        <div id="projects" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-4">Portfolio</h1>
                <h4 className="text-uppercase text-center py-2">Projects</h4>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopBoxAmazon}>
                    <img className="portfolio-image" src={Amazon} alt="Amazon Clone Project"/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                    <div className="portfolio-image-box" onClick={openPopBoxPortfolio}>
                        <img className="portfolio-image" src={PortFolio} alt="PortFolio Project"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                </div>
                <h4 className="text-uppercase text-center py-2">Coding Profiles</h4>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopBoxLeetcode}>
                        <img className="portfolio-image" src={LeetCode} alt="LeetCode"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                
                    <div className="portfolio-image-box" onClick={openPopBoxGeeksForGeeks}>
                        <img className="portfolio-image" src={GeeksForGeeks} alt="GeeksForGeeks"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                </div>
            </div>
            
            <PopupboxContainer {...popupBoxConfigAmazon}/>
            <PopupboxContainer {...popupBoxConfigPortFolio}/>
            <PopupboxContainer {...popupBoxConfigLeetcode}/>
            <PopupboxContainer {...popupBoxConfigGeeksForGeeks}/>

        </div>
    )
}

export default Portfolio
