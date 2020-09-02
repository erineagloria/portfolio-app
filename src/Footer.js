import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
    
    render() {
        return (
            <div className="footer-container">
                <footer>
                    <span>Made with <span id="heart-emoji" aria-label="love" role="img"> 💜 </span> and <span id="coffee-emoji" aria-label="coffee" role="img"> ☕ </span></span>
                    <br/>
                    <span>&copy; Erinea Gloria 2020. All rights reserved.</span>
                </footer>
            </div>
        )
    }
}
