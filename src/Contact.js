import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom'
import './Contact.css'

export default class Contact extends Component {
    
    state = {
        newName: '',
        newEmail: '',
        newMessage: '',
    }

    handleSubmit = e => {
        e.preventDefault()

        this.setState({

        })
    }

    render() {
        return (
            <Router>
                <div className="contact-container" id="contact">
                    <h2>Contact</h2>
                    <p>I'd love to connect with you over coffee or zoom.</p>
                    <p>Find me on <a href="https://www.linkedin.com/in/erinea-gloria/" target="_blank" className="links" rel="noopener noreferrer">LinkedIn</a></p>
                    <p>Check out my code on <a href="https://github.com/erineagloria" target="_blank" className="links" rel="noopener noreferrer">Github</a> and my blogging skills on <a href="https://medium.com/@erineagloria" target="_blank" className="links" rel="noopener noreferrer">Medium</a></p>

                    <button className="resume">
                        <Link to="/resume_draft_1.pdf" target="_blank" rel="noopener noreferrer" download>Download My Resume</Link>
                    </button>
                
                    <p className="say-hello">Say Hello</p>
                    <h1 className="call-to-action">Let's do something <br/>interesting <br/><a href="#" target="_blank" className="links email" rel="noopener noreferrer">hello@erineagloria.com</a> </h1>
                </div>
            </Router>
        )
    }
}
 