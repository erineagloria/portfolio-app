import React, { Component } from 'react'
import './Introduction.css'

export default class Introduction extends Component {
    
    render() {
        return (
            <div className="intro-container">
                <div className="intro-content tracking-in-expand">
                    <div className="inner-text">
                        <h4 className="welcome">Welcome // Bienvenue</h4>
                        <h1 className="name">Hi, I'm Erinea!</h1>
                        <span>Software Developer</span>
                    </div>
                    <div className="language-icons">
                            <img className="icon" src="https://pngimg.com/uploads/ruby/ruby_PNG28.png" alt="ruby"/>
                            <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png" alt="javascript"/>
                            <img className="icon" src="https://www.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="react"/>
                    </div>
                </div>
                <img className="profile-photo" src="https://github.com/erineagloria/portfolio-app/blob/master/images/photo.png?raw=true" alt="profile"/>
            </div>
        )
    }
}

