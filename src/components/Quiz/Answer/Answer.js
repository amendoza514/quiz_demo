import React, { useState, useEffect } from 'react';
import './Answer.css';

function Answer({ content, correct, reveal, show, score }) {
    console.log(content)

    const handleScore = () => {
        if (correct === content) score()
    }

    const handleReveal = () => {
        reveal()
    }

    return (
      <>
            <div 
                className= {show ? correct === content && show ? 'answer-correct' : 'answer-incorrect' : 'answer'} 
                onClick={() => { handleScore(); handleReveal();}} 
                >
                {content}
            </div>
      </>
    );
}

export default Answer