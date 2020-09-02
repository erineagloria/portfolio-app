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
                    <p>Find me on<a href="#" target="_blank" className="links" rel="noopener noreferrer"> LinkedIn</a></p>
                    <p>Check out my code on<a href="#" target="_blank" className="links" rel="noopener noreferrer"> Github</a></p>
                    <p>Soon to be blogging on<a href="#" target="_blank" className="links" rel="noopener noreferrer"> Medium</a> (coming soon!)</p>

                    <button>
                        <Link to="/resume_draft_1.pdf" target="_blank" rel="noopener noreferrer" download>Download My Resume</Link>
                    </button>
                
                    <h4>Say Hello</h4>
                    <h1>Let's do something interesting <br/><a href="#" target="_blank" className="links" rel="noopener noreferrer">hello@erineagloria@gmail.com</a> </h1>
                </div>
            </Router>
        )
    }
}
 