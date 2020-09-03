import React, { Component } from 'react'
import './Projects.css'

export default class Projects extends Component {
    
    render() {
        return (
            <div className="projects-container" id="projects">
                <h2 className="component-title">Projects</h2>

                <div className="project-content three">
                    <a href="https://floating-cliffs-04957.herokuapp.com/index.html" target="_blank" rel="noopener noreferrer"><img src="https://github.com/ajsaule/The-Happy-Path/blob/master/images/final_product_1.png?raw=true" alt="project-three-design" className="project-img"/>
                    </a>
                    <div className="project-text">
                        <h3 className="project-title">The Happy Path</h3>
                        <p className="project-summary">A platform to share positive resources during the COVID-19 pandemic.</p>
                        <p className="project-tech-stack">Group project built using: JavaScript, Ruby on Rails (Active Record), CSS, HTML, PostgreSQL, Sinatra, Mircosoft Text Analysis API and Tasty Food API.</p>
                        <p className="project-login">Login as erinea@ga.co, password: 123456</p>
                        <button>
                            <a href="https://github.com/ajsaule/The-Happy-Path" target="_blank" rel="noopener noreferrer" className="project-code">VIEW MY CODE</a>
                        </button>
                    </div>
                </div>
                <div className="project-content two">
                    <a href="https://boiling-temple-92123.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="https://github.com/erineagloria/project_2/raw/master/Loopd%20Final%20Design.png?raw=true" alt="project-two-design" className="project-img"/>
                    </a>
                    <div className="project-text">
                        <h3 className="project-title">loopd</h3>
                        <p className="project-summary"> A client event database to store previous event details and manage upcoming events.</p>
                        <p className="project-tech-stack">loopd is a full Ruby CRUD application, complete with a login feature using bcrypt, user sessions, images added via Cloudinary API and a PostgreSQL database with two tables joined togeter.</p>
                        <p className="project-login">Login as GA, password: pudding</p>
                        <button>
                            <a href="https://github.com/erineagloria/project_2" target="_blank" rel="noopener noreferrer" className="project-code">VIEW MY CODE</a>
                        </button>
                    </div>
                </div>
                <div className="project-content one">
                    <a href="https://erineagloria.github.io/tic-tac-toe/" target="_blank" rel="noopener noreferrer"><img src="https://github.com/erineagloria/tic-tac-toe/blob/master/Tic-Tac-Toe.png?raw=true" alt="project-one-design" className="project-img"/>
                    </a>
                    <div className="project-text">
                        <h3 className="project-title">Tic-Tac-Toe</h3>
                        <p className="project-summary">A futuristic theme of the classic game</p>
                        <p className="project-tech-stack">Built using: JavaScript, HTML, and CSS</p>
                        <p className="project-login">No login details required.</p>
                        <button>
                            <a href="https://github.com/erineagloria/tic-tac-toe" target="_blank" rel="noopener noreferrer" className="project-code">VIEW MY CODE</a>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
 