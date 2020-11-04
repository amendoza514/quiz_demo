import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import Quiz from '../Quiz/Quiz'
import './Home.css'

function Home() {
    const [start, setStartState] = useState(false);
    const [quizType, setQuizState] = useState(null)

    return (
      <>
        {<div className="home">
          {!start ? <div className="home-container container" >
                <div className='welcome'>
                    <div className='welcome-title'>Welcome!</div>
                    <div className='intro-description'>Choose a quiz to get started and press home at any point to return here</div>
                  <div className='quiz-list'>
                    <div className='quiz-item' onClick={() => { setQuizState(0); setStartState(true);}} >Tandem's Trivia</div>
                    <div className='quiz-item' onClick={() => { setQuizState(1); setStartState(true);}} >Do you know Alex's LinkedIn?</div>
                  </div>
                </div>
            </div> : '' }  
          {start ? <Quiz home={() => setStartState(false)} quizidx={quizType}/>  : ''}
        </div>}
      </>
    );
}

export default Home