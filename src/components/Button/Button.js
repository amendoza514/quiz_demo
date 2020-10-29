import React from 'react'
import './Button.css'

const STYLES = ['button--primary', 'button--outline']

const SIZES = [
  "button--medium",
  "button--large",
  "button--mobile",
  "button--wide",
];

const COLORS = ["primary", "blue", "red", "green"];

export const Button = ({ 
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize, 
    buttonColor
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0]
    const checkButtonColor = STYLES.includes(buttonColor) ? buttonColor : null

    return (
      <button
        className={`button ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    );
}
