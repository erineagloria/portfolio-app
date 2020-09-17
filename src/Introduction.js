import React, { Component } from 'react'
import './Introduction.css'

export default class Introduction extends Component {
    
    render() {
        return (
            <div>
                <div className="intro-content tracking-in-expand">
                    {/* <br/>
                    <br/> */}
                    <div className="inner-text">
                        <h4 className="welcome-en">Welcome</h4><h4 className="welcome-fr">Bienvenue //</h4>
                        <h1 className="name">Hi, <br/>I'm Erinea!</h1>
                        <span>Software Developer</span>
                        {/* <div className="find-me">
                            <p><a href="mailto:hello@erineagloria.com"><span className="material-icons md-36 email">email</span></a>    Find me on <a href="https://www.linkedin.com/in/erinea-gloria/" target="_blank" className="links" rel="noopener noreferrer" >LinkedIn</a>, <a href="https://github.com/erineagloria" target="_blank" className="links" rel="noopener noreferrer">Github</a> and <a href="https://medium.com/@erineagloria" target="_blank" className="links" rel="noopener noreferrer">Medium</a></p>
                        </div> */}
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

