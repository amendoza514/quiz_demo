import React, { useState, useEffect } from 'react';
import Answer from '../Answer/Answer';
import './Question.css'

function Question({ next, data: question }) {
    const [answers, setAnswers] = useState([]);
    const [revealState, setRevealState] = useState(false);

    useEffect(() => {
        let store = []
        if (question) {
        for (let i = 0; i < 3; i++) {
            store.push(question.incorrect[i])
        }
        store.push(question.correct)
        }

        let shuffled = store.map(a => ({ sort: Math
                        .random(), value: a }))
                        .sort((a, b) => a.sort - b.sort)
                        .map(a => a.value)
        setAnswers(shuffled);
    }, []);

    return (
      <>
            <div className="quiz-container container" >
                <div className='question-prompt'>
                    {question ? question.question : 'Loading'}
                </div>
                <div className='answer-list'>
                    {answers.map((answer, idx) => {
                        return (
                            <Answer 
                                key={idx} 
                                content={answer} 
                                correct={question.correct}
                                show = {revealState}
                                reveal={() => setRevealState(!revealState)}
                            />
                        )
                    })}
                </div>
            </div>
                <div className="next-button" onClick={next}>
                    <i class="fas fa-long-arrow-alt-right"></i>
                </div>
      </>
    );
}

export default Question