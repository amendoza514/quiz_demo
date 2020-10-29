import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {

    return (
      <>
          <div className="footer">
            <div className="footer-container container">
              <Link to="/" className="footer-logo" >
                a quiz app created by Alex Mendoza
              </Link>
              <div className="menu-icon" >
              </div>
              {/* <ul className={"nav-menu"}>
                <li className="nav-item">
                  <Link to="/" className="nav-links"  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/services" className="nav-links" >
                    Services
                  </Link>
                </li>
              </ul> */}
            </div>
          </div>
      </>
    );
}

export default Footer