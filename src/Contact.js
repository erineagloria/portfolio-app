import React, { Component } from 'react'
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
            <div className="contact-container" id="contact">
                <h2>Contact</h2>
                <br/>
                <br/>
                <br/>
                <form className="contact-form" onSubmit={this.handleSubmit} action="">
                    <input type="text" placeholder="Full Name"/>
                    <input type="text" placeholder="Email"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                    <button>Send Your Message</button>
                </form>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}
 