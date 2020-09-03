import React, { Component } from 'react'
import './Introduction.css'

export default class Introduction extends Component {
    
    render() {
        return (
            <div>
                <div className="intro-content">
                    <br/>
                    <br/>
                    <h4 className="welcome-en">Welcome</h4><h4 className="welcome-fr">Bienvenue //</h4>
                    <h1 className="name">Hi, I'm Erinea</h1>
                    {/* <span className="phonetics">/air-a-ney-yah/</span> */}
                    <h3>Software Developer</h3>

                    <p>A sales and events manager turned software developer</p>
                    <p>Find me on <a href="https://www.linkedin.com/in/erinea-gloria/" target="_blank" className="links" rel="noopener noreferrer" >LinkedIn</a>, <a href="https://github.com/erineagloria" target="_blank" className="links" rel="noopener noreferrer">Github</a> and <a href="https://medium.com/@erineagloria" target="_blank" className="links" rel="noopener noreferrer">Medium</a></p>

                </div>
            </div>
        )
    }
}

