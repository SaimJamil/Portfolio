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
                                <p>OOPS, MultiThreading, Exception Handling, Collections, etc..</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faMicrosoft} size="2x"/></div>
                                <h3>
                                    .Net Framework
                                </h3>
                                <p> ASP.Net MVC, .NetCore Web Api, Grpc services</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faDatabase} size="2x"/></div>
                                <h3>
                                    Database
                                </h3>
                                <p><b>SQL </b>(Sql server, oracle, mysql)<br/><b> NoSql</b> (Mongo)</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faJava} size="2x"/></div>
                                <h3>
                                    Java
                                </h3>
                                <p> OOPS, MultiThreading, Collections, Exception Handling</p>
                                <p>Basics of Spring Framework & Hibernate</p>
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
                                <p> functional & Non functional components, React Hooks, React Context</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faFacebookSquare} size="2x"/></div>
                                <h3>
                                    GraphQL
                                </h3>
                                <p> Schema, Queries, Mutations, Resolvers ..</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faNodeJs} size="2x"/></div>
                                <h3>
                                    Node
                                </h3>
                                <p> Node js Basics</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faHtml5} size="2x"/></div>
                                <h3>
                                    Html & CSS
                                </h3>
                                <p> Basic Html Css</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Skills
