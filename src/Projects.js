import React, { Component } from 'react'
import './Projects.css'

export default class Projects extends Component {
    
    render() {
        return (
            <div className="projects-container" id="projects">
                <h2>Projects</h2>

                <div className="project-content three">
                    <a href="https://floating-cliffs-04957.herokuapp.com/index.html" target="_blank" rel="noopener noreferrer"><img src="https://github.com/ajsaule/The-Happy-Path/blob/master/images/final_product_1.png?raw=true" alt="project-three-design" srcset="" className="project-img"/>
                    </a>
                    <div className="project-text">
                        <p className="project-title">The Happy Path | A platform to share positive resources during the COVID-19 pandemic</p>
                        <p className="project-summary">Built using: JavaScript, Ruby on Rails (Active Record), CSS, HTML, PostgreSQL, Sinatra, Mircosoft Text Analysis API and Tasty Food API</p>
                        <p className="login-details">You can login as erinea@ga.co, password: 123456</p>
                    </div>
                </div>
                <div className="project-content two">
                    <a href="https://boiling-temple-92123.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="https://github.com/erineagloria/project_2/raw/master/Loopd%20Final%20Design.png?raw=true" alt="project-two-design" srcset="" className="project-img"/>
                    </a>
                    <div className="project-text">
                        <p className="project-title">loopd | A Client Event Database</p>
                        <p className="project-summary">Loopd is a full Ruby CRUD application, complete with a login feature using bcrypt, user sessions, images added via Cloudinary API and a PostgreSQL database with two tables joined togeter.</p>
                        <p className="login-details">You can login as GA, password: pudding</p>
                    </div>
                </div>
                <div className="project-content one">
                    <a href="https://erineagloria.github.io/tic-tac-toe/" target="_blank" rel="noopener noreferrer"><img src="https://github.com/erineagloria/tic-tac-toe/blob/master/Tic-Tac-Toe.png?raw=true" alt="project-one-design" srcset="" className="project-img"/>
                    </a>
                    <div className="project-text">
                        <p className="project-title">Tic-Tac-Toe | Futuristic version of the classic game</p>
                        <p className="project-summary">Built using: JavaScript, HTML, and CSS</p>
                        <p className="login-details">No login details required</p>
                    </div>
                </div>
            </div>
        )
    }
}
 