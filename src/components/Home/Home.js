import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import Quiz from '../Quiz/Quiz'
import './Home.css'

function Home() {
    return (
      <>
          <div className="home">
            <div className="home-container container" >
                <div className='welcome'>
                    Welcome! Choose a quiz to get started
                </div>
                <Quiz />
            </div>
          </div>
      </>
    );
}

export default Home