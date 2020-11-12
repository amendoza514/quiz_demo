import React, { useState, useEffect } from 'react';
import Answer from '../Answer/Answer';
import './Question.css';
import { motion } from 'framer-motion';

function Question({ home, next, data, score, index, answers }) {
    const [revealState, setRevealState] = useState(false);
    const [menu, setMenuState] = useState(false)

    const goToNext = () => {
        next(index);
        setRevealState(false)
        //refreshAnswers();
    }

    const quiz = 
        <motion.div 
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            className="quiz-container container" 
        >
            <div className='question-prompt'>
                {data ? data.question : 'Loading'}
            </div>
            <div className='answer-list'>
                {answers.map((answer, idx) => {
                    return (
                        <Answer 
                            key={idx} 
                            content={answer} 
                            correct={data.correct}
                            score={score}
                            show = {revealState}
                            reveal={() => setRevealState(true)}
                        />
                    )
                })}
            </div>
            <div className='button-list'>
                <motion.div 
                    whileHover={{ 
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255, 255, 255)",
                        // boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                    }}
                    // transition={{ yoyo: Infinity }}
                    className="home-button" 
                    onClick={() => setMenuState(true)}
                >
                    <i className="fas fa-home"></i>
                </motion.div>
                <motion.div 
                        whileHover={{ 
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255, 255, 255)",
                        // boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                    }}
                    // transition={{ yoyo: Infinity }}
                    className="next-button" 
                        onClick={goToNext}
                    >
                    <i className="fas fa-long-arrow-alt-right"></i>
                </motion.div>
            </div>
        </motion.div>

    const menuOption = <div className="quiz-container container" >
                <div className='question-prompt'>
                    Go Home? This will exit the quiz and reset any score
                </div>
                <div className='menu-list'>
                    <div className='menu-item' onClick={home}>Yes</div>
                    <div className='menu-item' onClick={() => setMenuState(false)}>No</div>
                </div>
            </div>

    return (
      <>
            {!menu ? quiz : menuOption}
      </>
    );
}

export default Question