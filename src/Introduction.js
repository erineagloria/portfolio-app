import React, { Component } from 'react'
import './Introduction.css'

export default class Introduction extends Component {
    
    render() {
        return (
            <div>
                <div className="intro-content">
                    <h4>Welcome // Bienvenue</h4>
                    <h1>Hi, I'm Erinea</h1>
                    <span>(air-a-ney-yah)</span>

                    <h3>Software Developer</h3>

                    <p>One line summary about me......</p>
                    <p>Find me on <a href="https://www.linkedin.com/in/erinea-gloria/" target="_blank" className="links" rel="noopener noreferrer" >LinkedIn</a>, <a href="https://github.com/erineagloria" target="_blank" className="links" rel="noopener noreferrer">Github</a> and <a href="https://medium.com/@erineagloria" target="_blank" className="links" rel="noopener noreferrer">Medium</a> (coming soon!)</p>

                </div>
            </div>
        )
    }
}

