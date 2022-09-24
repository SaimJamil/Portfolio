import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava, faGithub, faHtml5, faWatchmanMonitoring, faServicestack, faStackOverflow, faJenkins } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'


const Skills = () => {
    return (
        <div id="skills" className="skills">
            <h1 className="py-5">My Skills</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faServicestack} size="2x" /></div>
                            <h3>
                                Microservices
                            </h3>
                            <p>
                                Highly Scalable
                                <br></br>
                                Highly Available
                                <br></br>
                                High throughput
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faStackOverflow} size="2x" /></div>
                            <h3>
                                Problem Solving
                            </h3>
                            <p> Solved 700+ problems on
                                <br></br>
                                Leetcode
                                <br></br>
                                GeeksForGeeks
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faDatabase} size="2x" /></div>
                            <h3>
                                Databases
                            </h3>
                            <p>SQL & NoSQL Databases.
                                <br></br>
                                Spanner
                                <br></br>
                                Scylla
                                <br></br>
                                BigTable
                                <br></br>
                                Redis
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faJava} size="2x" /></div>
                            <h3>
                                Java, Golang, Nodejs
                            </h3>
                            <p> OOPS, MultiThreading, Collections, Exception Handling, Async Tasks</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faStackOverflow} size="2x" /></div>
                            <h3>
                                DS & Algorithms
                            </h3>
                            <p>Stacks, Queues, Trees, Graphs, Dynamic Programming etc...</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faJenkins} size="2x" /></div>
                            <h3>
                                CI/CD
                            </h3>
                            <p>Jenkins, Docker, Images, Kubernetes, Deployments, Pods etc ...</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faWatchmanMonitoring} size="2x" /></div>
                            <h3>
                                Monitoring & Alerting
                            </h3>
                            <p> Prometheus, Grafana, Kibana etc ...</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faGithub} size="2x" /></div>
                            <h3>
                                Misc
                            </h3>
                            <p> Github <br></br>
                                JIRA
                                <br></br>
                                VSCode</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
