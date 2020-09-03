import React, { Component } from 'react'
import './About.css'
import Timeline from './Timeline'

export default class About extends Component {
    
    render() {
        return (
            <div className="about-page" id="about">
                <div>
                <h2 className="component-title">About</h2>
                <span className="nutshell">Me, in a nutshell:</span><span className="nutshell-text"> Yoga <span role="img" aria-label="yoga-emoji">🧘‍♀️</span>, travelling <span role="img" aria-label="plane-emoji">✈</span><span role="img" aria-label="suitcase-emoji">🧳</span>, Schitt's Creek <span role="img" aria-label="tv-emoji">📺</span>, and when in doubt chocolate is ALWAYS the answer <span role="img" aria-label="chocolate-emoji">🍫</span></span>
                <br/>
                <br/>
                <Timeline />
                </div>
            </div>
        )
    }
}
 