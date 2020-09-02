import React, { Component } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import './Header.css'

export default class Header extends Component {

    render() {
        return (
            <div className="nav-container">
                <article className="nav-logo" onClick={() => scroll.scrollToTop()}>
                    <a href="#home"><p className="name">Erinea</p>
                    {/* <img className="nav-logo" src="https://i.pinimg.com/originals/91/57/37/9157378329df8904b56c6049ef42f5f4.jpg" alt="logo"/> */}
                    </a>
                </article>
                <nav className="nav-content">
                    <span className="material-icons menu" onClick={() => {
                        var navList = document.querySelector('.nav-content ul')
                        return navList.classList.toggle('updown')}}>menu</span>
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


