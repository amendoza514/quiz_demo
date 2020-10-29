import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Answer from './Answer/Answer';
import Question from './Question/Question'
import './Quiz.css';
import { API_KEY } from '../../secrets';

function Quiz() {
    const [questions, setQuestions] = useState(null);

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
        // console.log(questions);
    }

    useEffect(fetchQuestions, []);

    return (
        <>
            { questions &&
                    <Question data={questions[0]}/>
            }
        </>
    );
}

export default Quiz