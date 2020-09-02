import React, { Component } from 'react'
import './TestNavBar.css'

export default class TestNavBar extends Component {

    render() {
        return (
            <div>
                <nav class="main-nav">
                    <span class="material-icons menu">menu</span>
                    <ul>
                        <li>Home</li>
                        <li>Contact Us</li>
                        <li>About Us</li>
                    </ul>
                </nav>
            </div>
        )

    }
}


