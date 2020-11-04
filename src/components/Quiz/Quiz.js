import React, { useState, useEffect } from 'react';
import Question from './Question/Question'
import './Quiz.css';
import { API_KEY } from '../../secrets';

function Quiz({ home, quizidx }) {
    const [questions, setQuestions] = useState(0);
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);
    const [finished, setFinishState] = useState(false);
    const [sequence, setSequence] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(null);

    let quiz = [
        'https://api.jsonbin.io/b/5f9b01129291173cbca5711d',
        'https://api.jsonbin.io/b/5fa1e43d47077d298f5ca0e2/1'
    ];
    
    const fetchQuestions = () => {
        setFinishState(false);
        let req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            if (req.readyState == XMLHttpRequest.DONE) {
            }
        };
        req.open("GET", quiz[quizidx], true);
        req.setRequestHeader("secret-key", API_KEY);
        req.onload  = function() {
            var jsonResponse = JSON.parse(req.responseText);
            handleCount(jsonResponse)
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

    const handleCount = (jsonResponse) => {
        setCount(jsonResponse.length)
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
            let newComponent = <div></div>
            // <div className="end-container container" >
            //     <div className='score-result'>
            //         {score}
            //     </div>
            //     <div className='percent'>
            //         {Math.ceil(score / possibleScore)} %
            //     </div>
            //     <div className='end-buttons'>
            //     <div className='end-button' onClick={() => { resetScore(); fetchQuestions();}} >
            //         Retry
            //     </div>
            //     <div className='end-button' onClick={home} >
            //         Home
            //     </div>
            //     </div>
            // </div>
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

    let loading = 
        <div className="loader">Loading<span className="loader__dot">.</span><span className="loader__dot">.</span><span className="loader__dot">.</span></div>
    let scoreBox;
    let scoreBlurb;
    
    if ((score / count) === 1) {
        scoreBlurb = 'Perfect!'
    } else if ((score / count) > .9000) {
        scoreBlurb = 'Almost perfect!'
    } else if ((score / count) > .8000) {
        scoreBlurb = 'Solid score!'
    } else if ((score / count) > .7000) {
        scoreBlurb = 'Still a passing grade!'
    } else if ((score / count) > .4000) {
        scoreBlurb = 'Maybe try again?'
    } else if ((score / count) > .1000) {
        scoreBlurb = 'You got at least one right'
    } else {
        scoreBlurb = 'This did not go well...'
    }

    if (!finished) {
        scoreBox = <div className='score' >score: {score}</div>
    } else {
        scoreBox = 
        <>
        <div className='score-final-container'>
            <div className='score-final' >Your final score is...</div>
        </div>
        <div className="end-container container" >
                <div className='score-result'>
                    {score} out of {count}
                </div>
                <div className='percent'>
                    {Math.round((score / count) * 100)}%
                </div>
                <div className='score-blurb'>{scoreBlurb}</div>
                <div className='end-buttons'>
                <div className='end-button' onClick={() => { resetScore(); fetchQuestions();}} >
                    Retry
                </div>
                <div className='end-button' onClick={home} >
                    Home
                </div>
                </div>
            </div>
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