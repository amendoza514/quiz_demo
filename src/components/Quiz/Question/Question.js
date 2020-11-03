import React, { useState, useEffect } from 'react';
import Answer from '../Answer/Answer';
import './Question.css'

function Question({ home, next, data, score, index, answers }) {
    const [revealState, setRevealState] = useState(false);

    const goToNext = () => {
        next(index);
        setRevealState(false)
        //refreshAnswers();
    }

    return (
      <>
            <div className="quiz-container container" >
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
                    <div className="home-button" onClick={home}>
                        <i className="fas fa-home"></i>
                    </div>
                    <div className="next-button" onClick={goToNext}>
                        <i className="fas fa-long-arrow-alt-right"></i>
                    </div>
                </div>
            </div>
      </>
    );
}

export default Question