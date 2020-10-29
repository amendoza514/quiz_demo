import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import './Navbar.css'

function Navbar() {
    let [click, setClick] = useState(false)

    // let handleClick = () => setClick(!click);
    // unnecessary code


    return (
      <>
          <div className="navbar">
            <div className="navbar-container container">
              <Link to="/" className="navbar-logo" onClick={() => setClick(false)} >
                All That Apply !
              </Link>
              <div className="menu-icon" onClick={() => setClick(!click)}>
              </div>
              <ul className={"nav-menu"}>
                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={() => setClick(false)} >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/projects" className="nav-links" onClick={() => setClick(false)} >
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/services" className="nav-links" onClick={() => setClick(false)} >
                    Services
                  </Link>
                </li>
                <li className="nav-button">
                   <Link to="/signup" className="button-link">
                      <Button buttonStyle="button--outline">Contact Me</Button>
                    </Link>
                </li>
              </ul>
            </div>
          </div>
      </>
    );
}

export default Navbar