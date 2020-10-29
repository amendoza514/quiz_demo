import React, { useState, useEffect } from 'react';
import './Answer.css';

function Answer({ content, correct, reveal, show}) {
    console.log(content)
    return (
      <>
            <div 
                className= {correct === content && show ? 'answer-correct' : 'answer'} 
                onClick={reveal}
                >
                {content}
            </div>
      </>
    );
}

export default Answer