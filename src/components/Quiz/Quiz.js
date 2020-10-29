import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Answer from './Answer/Answer';
import './Quiz.css';
import { API_KEY } from '../../secrets';

function Quiz() {
    const [questions, setQuestions] = useState([]);

    const fetchQuestions = () => {
                let req = new XMLHttpRequest();
        req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
        }
        };
        req.open("GET", 'https://api.jsonbin.io/b/5f9b01129291173cbca5711d', true);
        req.setRequestHeader("secret-key", API_KEY);
        req.onload  = function() {
            var jsonResponse = JSON.parse(req.responseText);
            // do something with jsonResponse
            setQuestions(jsonResponse);
        };
        req.send();
        console.log(questions);
    }

    let answers = []

    if (questions[0]) {
        for (let i = 0; i < 3; i++) {
            answers.push(questions[0].incorrect)
        }
        answers.push(questions[0].correct)
    }


    useEffect(fetchQuestions, []);

    return (
      <>
            <div className="quiz-container container" >
                <div className='question-prompt'>
                    {questions[0] ? questions[1].question : 'Loading'}
                </div>
                <div className='answer-list'>
                    {/* {questions[0] ? questions[0].incorrect[1] : ''} */}
                    {answers.map((comment, idx) => {
                        return (
                            <Answer />
                        )
                    })}
                </div>
            </div>
      </>
    );
}

export default Quiz