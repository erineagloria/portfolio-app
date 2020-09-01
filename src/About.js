import React, { Component } from 'react'
import './About.css'
import Timeline from './Timeline'

export default class About extends Component {
    
    render() {
        return (
            <div className="about-page" id="about">
                <div>
                <h2>About</h2>
                <span className="nutshell">Me, in a nutshell: blah blah blah...... </span>

                <p>Who am I? TBC if I will put a few lines to summarise who I am... </p>
                
                <Timeline />
                </div>
            </div>
        )
    }
}
 