import React, { Component } from 'react'
import './About.css'
import Timeline from './Timeline'

export default class About extends Component {
    
    render() {
        return (
            <div className="about-page" id="about">
                <div>
                <h2>About</h2>
                <span className="nutshell">Me, in a nutshell:</span><span className="nutshell-text"> Travelling <span role="img" aria-label="plane">✈</span><span role="img" aria-label="suitcase">🧳</span>, Fitness, Schitt's Creek, and Chocolate is ALWAYS the answer <span role="img" aria-label="chocolate">🍫</span></span>

                <br/>
                <br/>
                <Timeline />
                </div>
            </div>
        )
    }
}
 