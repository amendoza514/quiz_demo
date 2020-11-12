import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import { motion } from 'framer-motion'
import './Navbar.css'

function Navbar() {
    let [click, setClick] = useState(false)
        
    return (
      <>
          <div className="navbar">
            <div className="navbar-container container">
              <Link to="/" className="navbar-logo" onClick={() => setClick(false)} >
                <motion.div whileHover={{ }}>
                  All That Apply&nbsp;
                  <i className="fas fa-check"></i>
                  {/* <svg 
                    className='check'
                    xmlns="http://www.w3.org/2000/svg" 
                    
                    width='30' 
                    height='30'
                    viewBox="0 0 24 24">
                    <g fill="#ffffff">
                      <path 
                        d="M0 11.386l1.17-1.206c1.951.522 5.313 1.731 8.33 3.597 3.175-4.177 9.582-9.398 13.456-11.777l1.044 1.073-14 18.927-10-10.614z"/>
                    </g>
                  </svg> */}
                  </motion.div>
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
                  <a 
                    href='https://github.com/amendoza514' 
                    className='linkedin-icon' 
                    className='subs-icon'
                    style={{ marginRight: '-10px'}}
                  >
                        <i className="fab fa-github"></i>
                    </a>
                </li>
                <li className="nav-button">
                   <Link to="/" className="button-link">
                     {/* <Link to="/signup" className="button-link"> */}
                      <Button buttonStyle="button--outline" onClick={() =>  window.location.href = `mailto:${'alexjmendoza514@gmail.com'}`}>contact me</Button>
                    </Link>
                </li>
              </ul>
            </div>
          </div>
      </>
    );
}

export default Navbar