import React, { Component } from 'react'
import './About.css'
import Timeline from './Timeline'

export default class About extends Component {
    
    render() {
        return (
            <div className="about-page" id="about">
                <h2 className="component-title">About</h2>
                <span className="nutshell">Me, in a nutshell:</span><span className="nutshell-text"> Yoga, hiking, travelling, Schitt's Creek, and when in doubt chocolate <span role="img" aria-label="chocolate-emoji">🍫</span> is ALWAYS the answer
                </span>
                {/* <span role="img" aria-label="plane-emoji">✈</span><span role="img" aria-label="suitcase-emoji">🧳</span> */}
                <br/>
                <br/>
                <Timeline />
            </div>
        )
    }
}
 