import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import { motion } from 'framer-motion'
import './Navbar.css'

function Navbar() {
    let [click, setClick] = useState(false)

    const navbar = (
          <div className="navbar">
            <div className="navbar-container container">
              <Link to="/" className="navbar-logo" onClick={() => setClick(false)} >
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  All That Apply&nbsp;
                  <i className="fas fa-check"></i>
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
    )

    return (
      <>
          { navbar }
      </>
    );
}

export default Navbar