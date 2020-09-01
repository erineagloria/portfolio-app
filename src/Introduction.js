import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'

import './Introduction.css'
// import MyPDF from '../public/resume_draft_1.pdf'

export default class Introduction extends Component {
    
    render() {
        return (
            <Router>
                <div>
                    <div className="intro-content">
                        <h4>Welcome // Bienvenue</h4>
                        <h1>Hi, I'm Erinea</h1>
                        <span>(air-a-ney-yah)</span>

                        <h3>Software Developer</h3>

                        <p>One line summary about me......</p>
                        <p>Find me on <a href="https://www.linkedin.com/in/erinea-gloria/" target="_blank" className="links" rel="noreferrer" >LinkedIn</a>, <a href="https://github.com/erineagloria" target="_blank" className="links" rel="noreferrer">Github</a> and <a href="https://medium.com/@erineagloria" target="_blank" className="links" rel="noreferrer">Medium</a>(coming soon!)</p>

                        <button>
                            <Link to="/resume_draft_1.pdf" target="_blank" rel="noopener noreferrer" download>Download My Resume</Link>
                        </button>

                    </div>
                </div>
            </Router>
        )
    }
}

