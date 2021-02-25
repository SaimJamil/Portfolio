import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faJava, faReact,faNodeJs,faHtml5,faMicrosoft,faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import { faDatabase} from '@fortawesome/free-solid-svg-icons'


const Skills = () => {
    return (
        <div id="skills" className="skills">
            <h1 className="py-5">My Skills</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faMicrosoft} size="2x"/></div>
                                <h3>
                                    C#
                                </h3>
                                <p>I know OOPS principles</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faMicrosoft} size="2x"/></div>
                                <h3>
                                    .Net Framework
                                </h3>
                                <p> I know Asp.Net, .Net MVC & .Net Core Web Api's</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faDatabase} size="2x"/></div>
                                <h3>
                                    Database
                                </h3>
                                <p> I know Asp.Net, .Net MVC & .Net Core Web Api's</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faJava} size="2x"/></div>
                                <h3>
                                    Java
                                </h3>
                                <p> I know Asp.Net, .Net MVC & .Net Core Web Api's</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faReact} size="2x"/></div>
                                <h3>
                                    React
                                </h3>
                                <p> I know Asp.Net, .Net MVC & .Net Core Web Api's</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faFacebookSquare} size="2x"/></div>
                                <h3>
                                    GraphQL
                                </h3>
                                <p> I know Asp.Net, .Net MVC & .Net Core Web Api's</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faNodeJs} size="2x"/></div>
                                <h3>
                                    Node
                                </h3>
                                <p> I know Asp.Net, .Net MVC & .Net Core Web Api's</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faHtml5} size="2x"/></div>
                                <h3>
                                    Html & CSS
                                </h3>
                                <p> I know Asp.Net, .Net MVC & .Net Core Web Api's</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Skills
