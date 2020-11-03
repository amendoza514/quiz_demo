import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import Quiz from '../Quiz/Quiz'
import './Home.css'

function Home() {
    const [start, setStartState] = useState(false);

    return (
      <>
        {<div className="home">
          {!start ? <div className="home-container container" >
                <div className='welcome'>
                    <div style={{ fontSize: '30px'}}>Welcome to All That Apply!</div>
                    <div className='intro-description'>Choose a quiz to get started, and press home at any point to return here!</div>
                  <div className='quiz-list'>
                    <div className='quiz-item' onClick={() => setStartState(true)}>Choice One</div>
                    <div className='quiz-item'>Choice Two</div>
                  </div>
                </div>
            </div> : '' }  
          {start ? <Quiz home={() => setStartState(false)}/>  : ''}
        </div>}
      </>
    );
}

export default Home