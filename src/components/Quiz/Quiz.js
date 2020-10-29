import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';
import { API_KEY } from '../../secrets';

function Quiz() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        console.log(API_KEY);
        let req = new XMLHttpRequest();
        req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            // console.log(req.responseText);
        }
        };
        req.open("GET", 'https://api.jsonbin.io/b/5f9b01129291173cbca5711d', true);
        req.setRequestHeader("secret-key", API_KEY);
        req.onload  = function() {
            var jsonResponse = JSON.parse(req.responseText);
            // do something with jsonResponse
            console.log(jsonResponse);
            setQuestions(jsonResponse);
            console.log(questions);
        };
        req.send();
    }, []);

    return (
      <>
          <div className="quiz">
            <div className="quiz-container container" >
                { questions[0] && 
                    questions[0].question
                }
            </div>
          </div>
      </>
    );
}

export default Quiz