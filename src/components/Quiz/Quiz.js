import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Answer from './Answer/Answer';
import Question from './Question/Question'
import './Quiz.css';
import { API_KEY } from '../../secrets';

function Quiz({ home, quizidx }) {
    const [questions, setQuestions] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinishState] = useState(false)
    const [sequence, setSequence] = useState(0);
    const [questionComponents, setQuestionCompenents] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(null);

    let quiz = [
        'https://api.jsonbin.io/b/5f9b01129291173cbca5711d',
        'https://api.jsonbin.io/b/5fa1e43d47077d298f5ca0e2/1'
    ];
    let possibleScore;

    const fetchQuestions = () => {
        setFinishState(false)
        let req = new XMLHttpRequest();
        req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
        }
        };
        req.open("GET", quiz[quizidx], true);
        req.setRequestHeader("secret-key", API_KEY);
        req.onload  = function() {
            var jsonResponse = JSON.parse(req.responseText);
            possibleScore = jsonResponse.length;
            handleQuestionResponse(jsonResponse);
        };
        req.send();
    }

    useEffect(fetchQuestions, []);

    const handleQuestionResponse = (response) => {
        setQuestions(response);
        let answers = getAnswers(response[0]);
        let curQuest = <Question home={home} score={() => handleScore()} next={(index) => nextQuestion(index, response)} data={response[0]} index={0} answers={answers} />
        setCurrentQuestion(curQuest);
    }

    async function handleScore () {
        await setScore(score => score + 1);
    }

    async function resetScore () {
        await setScore(score => score = 0);
    }

    const nextQuestion = (index, qs) => {
        let newIndex = parseInt(index) + 1;
        let newQuestion = qs[newIndex];
        if (!newQuestion) {
            setFinishState(true)
            let newComponent = 
            <div className="end-container container" >
                <div className='end-prompt' onClick={() => { resetScore(); fetchQuestions();}} >
                    Go Again
                </div>
                <div className='end-prompt' onClick={home} >
                    Home
                </div>
                {/* <div className='score-result'>
                    {currentScore} out of {possibleScore}
                </div>
                <div className='percent'>
                    {currentScore / possibleScore}
                </div> */}
            </div>
             setCurrentQuestion(newComponent);
        } else {
            let answers = getAnswers(newQuestion);
            let newComponent = <Question home={home} score={() => handleScore()} next={(i) => nextQuestion(i, qs)} data={newQuestion} index={newIndex} answers={answers} />
            setCurrentQuestion(newComponent);
        }
    }

    const getAnswers = (question) => {
        let store = []
        for (let i = 0; i < question.incorrect.length; i++) {
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
    let scoreBox;

    if (!finished) {
        scoreBox = <div className='score' >score: {score}</div>
    } else {
        scoreBox = 
        <>
            <div className='score-final' >
                Your final score is...
            </div>
            <div>{score}</div>
        </>
    }

    return (
        <>
                { currentQuestion ? scoreBox : '' }
                { currentQuestion ? currentQuestion : loading }
        </>
    );
}

export default Quiz;