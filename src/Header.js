import React, { Component } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import './Header.css'

export default class Header extends Component {

    render() {
        return (
            <div className="nav-container">
                <article className="nav-logo" onClick={() => scroll.scrollToTop()}>
                    <a href="#home"><i className="fas fa-home"></i>
                    </a>
                </article>
                <nav className="nav-content">
                    {/* <span className="material-icons menu" 
                        onClick={() => {
                            var navList = document.querySelector('.nav-content ul')
                                return navList.classList.toggle('updown')}}
                        >menu</span> */}
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
                            >ABOUT
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
                            >PROJECTS
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
                            >CONTACT
                            </Link>  
                        </li>                
                    </ul>
                </nav>
            </div>
        )

    }
}


