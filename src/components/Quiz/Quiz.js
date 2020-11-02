import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Answer from './Answer/Answer';
import Question from './Question/Question'
import './Quiz.css';
import { API_KEY } from '../../secrets';

function Quiz() {
    const [questions, setQuestions] = useState(0);
    const [score, setScore] = useState(0);
    const [sequence, setSequence] = useState(0);
    const [questionComponents, setQuestionCompenents] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(null)

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
            handleQuestionResponse(jsonResponse);
        };
        req.send();
        // console.log(questions);
    }

    useEffect(fetchQuestions, []);

    const handleQuestionResponse = (response) => {
        setQuestions(response);
        let answers = getAnswers(response[0]);
        let curQuest = <Question score={() => handleScore()} next={(index) => nextQuestion(index, response)} data={response[0]} index={0} answers={answers} />
        setCurrentQuestion(curQuest);
    }
    
    // const handleScore = () => {
    //     console.log(score)
    //     setScore(score + 1)
    // }

    async function handleScore () {
    await setScore(score => score + 1);
  }

    const nextQuestion = (index, qs) => {
        let newIndex = parseInt(index) + 1;
        let newQuestion = qs[newIndex];
        let answers = getAnswers(newQuestion);
        let newComponent = <Question score={() => handleScore()} next={(i) => nextQuestion(i, qs)} data={newQuestion} index={newIndex} answers={answers} />
        setCurrentQuestion(newComponent);
    }

    const getAnswers = (question) => {
        let store = []
        for (let i = 0; i < 3; i++) {
            store.push(question.incorrect[i])
        }
        store.push(question.correct)

        let shuffled = store.map(a => ({ sort: Math
                        .random(), value: a }))
                        .sort((a, b) => a.sort - b.sort)
                        .map(a => a.value);
        return shuffled
    }

    let loading = <div className='loading'>Loading...</div>

    return (
        <>
            <div className='score' onClick={() => handleScore()}>score: {score}</div>
            { currentQuestion ? currentQuestion : loading }
        </>
    );
}

export default Quiz