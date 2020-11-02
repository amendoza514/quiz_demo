import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import './Navbar.css'

function Navbar() {
    let [click, setClick] = useState(false)

    // let handleClick = () => setClick(!click);
    
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
                <a href='https://www.linkedin.com/in/alex-mendoza-aa4615b5/' className='linkedin-icon'>
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                <li className="nav-item">
                  <a href='https://github.com/amendoza514' className='linkedin-icon' className='subs-icon'>
                        <i className="fab fa-github"></i>
                    </a>
                </li>
                <li className="nav-button">
                   <Link className="button-link">
                     {/* <Link to="/signup" className="button-link"> */}
                      <Button buttonStyle="button--outline" onClick={() =>  window.location.href = `mailto:${'alexjmendoza514@gmail.com'}`}>Contact Me</Button>
                    </Link>
                </li>
              </ul>
            </div>
          </div>
      </>
    );
}

export default Navbar