import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom'
import './Contact.css'

export default class Contact extends Component {
    
    render() {
        return (
            <Router>
                <div className="contact-container" id="contact">
                    <h2 className="component-title">Contact</h2>

                    <p>I'd love to connect with you over coffee or zoom.</p>
                    <p>Find me on <a href="https://www.linkedin.com/in/erinea-gloria/" target="_blank" className="links" rel="noopener noreferrer">LinkedIn.</a></p>
                    <p>Check out my code on <a href="https://github.com/erineagloria" target="_blank" className="links" rel="noopener noreferrer">Github</a> and my blogging skills on <a href="https://medium.com/@erineagloria" target="_blank" className="links" rel="noopener noreferrer">Medium.</a></p>

                    <button>
                        <a href="https://resume.io/r/Qf9AD5oSb"
                        target="_blank" rel="noopener noreferrer" className="resume" download>VIEW MY RESUME</a>
                    </button>

                    <button>
                        <a href="https://resume.io/r/Qf9AD5oSb/download.pdf"
                        target="_blank" rel="noopener noreferrer" className="resume" download>DOWNLOAD MY RESUME</a>
                    </button>

                    <p className="say-hello">Say Hello</p>
                    <h2 className="call-to-action">Let's do something <br/>interesting <br/>
                    <a href="mailto:hello@erineagloria.com" className="email">hello@erineagloria.com</a> </h2>
                </div>
            </Router>
        )
    }
}
