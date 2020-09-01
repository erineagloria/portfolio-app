import React, { Component } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import './Header.css'

export default class Header extends Component {

    render() {
        return (
            <div className="nav-container">
                <article className="nav-logo" onClick={() => scroll.scrollToTop()}>
                    <a href="#home" >
                        <img src="http://placekitten.com/100/100" alt="logo"/>
                    </a>
                </article>
                <nav className="nav-content">
                    <ul className="nav-items">
                        <li>
                            <Link 
                                className="nav-item"
                                activeClass="active"
                                to="about"
                                spy={true}
                                hashSpy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                                aria-label={`Scroll to about section`}
                            >About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className="nav-item"
                                activeClass="active"
                                to="projects"
                                spy={true}
                                hashSpy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000} 
                                aria-label={`Scroll to projects section`}
                            >Projects
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className="nav-item"
                                activeClass="active"
                                to="contact"
                                spy={true}
                                hashSpy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                                aria-label={`Scroll to contact section`}
                            >Contact
                            </Link>  
                        </li>                
                    </ul>
                </nav>
            </div>
        )

    }
}


