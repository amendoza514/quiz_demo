import React, { useState, useEffect } from 'react';
import Answer from '../Answer/Answer';
import './Question.css'

function Question({ next, data, score, index, answers }) {
    const [revealState, setRevealState] = useState(false);

    /*
    const refreshAnswers = () => {
        let store = []
        if (data) {
            for (let i = 0; i < 3; i++) {
                store.push(data.incorrect[i])
            }
            store.push(data.correct)
        }

        let shuffled = store.map(a => ({ sort: Math
                        .random(), value: a }))
                        .sort((a, b) => a.sort - b.sort)
                        .map(a => a.value)
        setAnswers(shuffled);
    }
    */

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
            </div>
                <div className="next-button" onClick={goToNext}>
                    <i className="fas fa-long-arrow-alt-right"></i>
                </div>
      </>
    );
}

export default Question