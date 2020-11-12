import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import Quiz from '../Quiz/Quiz';
import './Home.css';
import { AnimatePresence, motion } from 'framer-motion';

function Home() {
    const [start, setStartState] = useState(false);
    const [quizType, setQuizState] = useState(null)

    return (
      <>
        {<div className="home">
          {!start ? 
              <AnimatePresence>
                <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1}} 
                        transition={{ delay: .4, duration: .5}}
                        exit={{ x: '-100vh' }}
                        className="home-container container" >
                  <div className='welcome'>
                      <motion.div 
                          initial={{ y: '-20vh', opacity: 0 }} 
                          animate={{ y: 0, opacity: 1 }} 
                          transition={{ type: 'tween', delay: .3}}
                          className='welcome-title'
                          >
                            Welcome!
                      </motion.div>
                      <div className='intro-description'>Choose a quiz to get started and press home at any point to return here</div>
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: .3, delay: .7 }}
                      className='quiz-list'>
                      <div className='quiz-item' onClick={() => { setQuizState(0); setStartState(true);}} >Tandem's Trivia</div>
                      <div className='quiz-item' onClick={() => { setQuizState(1); setStartState(true);}} >Do you know Alex's LinkedIn?</div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence> 
            : '' }  
          {start ? <Quiz home={() => setStartState(false)} quizidx={quizType}/>  : ''}
        </div>}
      </>
    );
}

export default Home